import React from 'react';
import TOC from '@theme-original/TOC';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

import { GetClassData, GetAuthorityImage } from '@site/src/components/ClassBuilder';


// Map URL paths to internal data types
const routeMapping = {
	'/classes/':			'Class',
	'/static-classes/':		'StaticClass',
	'/utility-libraries/':	'UtilityClass',
	'/structs/':			'Struct',
	'/standard-libraries/':	'StandardLibrary'
};

// Map Docusaurus heading IDs to JSON arrays and anchor ID prefixes
const sectionMapping = {
	'functions':			{ dataKey: 'functions',			prefix: 'function-' },
	'static-functions':		{ dataKey: 'static_functions',	prefix: 'static-function-' },
	'events':				{ dataKey: 'events',			prefix: 'event-' },
	// 'properties':		{ dataKey: 'properties',		prefix: 'property-' },
	// 'static-properties':	{ dataKey: 'static_properties',	prefix: 'static-property-' },
	// 'constructors':			{ dataKey: 'constructors',		prefix: 'constructor-' }
};

export default function TOCWrapper(props) {
	const location = useLocation();

	// Special case for Enums
	if (location.pathname.includes("/enums")) {
		const enums_data = GetClassData("Enums");

		Object.keys(enums_data).map((enum_name) => {
			const enum_data = enums_data[enum_name];

			// Adds to existing "All Enums" TOC
			props.toc.push({
				value: `<code>${enum_name}</code>`,
				id: `${enum_name.toLowerCase()}`,
				level: 3
			});
		});

		return <TOC {...props} />;
	}

	let currentDataType = null;
	for (const [route, type] of Object.entries(routeMapping)) {
		if (location.pathname.includes(route)) {
			currentDataType = type;
			break;
		}
	}

	// If the route didn't match any of our API paths, just render the normal TOC
	if (!currentDataType) {
		return <TOC {...props} />;
	}

	const { metadata } = useDoc();
	const pageTitle = metadata.title.replace(/Base|[^\w\s-]/g, '').trim();

	// Fetches Data
	const apiData = GetClassData(currentDataType, pageTitle);

	if (!apiData) {
		return <TOC {...props} />;
	}

	// Create new TOC
	const nestedToc = [];

	for (const item of props.toc) {
		// Push the standard Markdown heading first (e.g., "🦠 Functions")
		nestedToc.push(item);

		// Check if this heading exists in our section mapper
		const sectionInfo = sectionMapping[item.id];

		// If it's a valid section AND the data exists in the JSON, loop through it
		if (sectionInfo && apiData[sectionInfo.dataKey]) {

			apiData[sectionInfo.dataKey].forEach(entry => {
				let imageSrc;

				if (entry.authority)
					imageSrc = GetAuthorityImage(entry.authority);
				else if (entry.is_native !== null)
					imageSrc = entry.is_native ? "/img/scripting/native.svg" : "/img/scripting/not-native.svg";

				nestedToc.push({
					value: `${imageSrc ? `<img src="${imageSrc}" loading="lazy" />` : '' }<code>${entry.name}</code>`,
					id: `${sectionInfo.prefix}${entry.name.toLowerCase().replaceAll(' ', '-')}`,
					level: 3
				});
			});
		}
	}

	// Pass the newly ordered array back into the original Docusaurus TOC
	return <TOC {...props} toc={nestedToc} />;
}