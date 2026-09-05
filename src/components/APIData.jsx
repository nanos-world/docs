import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const APIFiles = require('../api/APIFiles.json');

const ProperCategoryNames = {
	"Classes": "Class",
	"Structs": "Struct",
	"StaticClasses": "StaticClass",
	"StandardLibraries": "StandardLibrary",
	"UtilityClasses": "UtilityClass",
	"Enums": "Enums"
}

// Collections the API generator writes keyed by entry name, so Crowdin identifies strings by name instead of by array index
const KeyedCollections = ["constructors", "functions", "static_functions", "events", "operators", "properties", "static_properties"];

// Turns those keyed collections back into arrays, preserving the order the generator wrote the keys in
function RehydrateAPIFile(file_data) {
	if (file_data == null || typeof file_data !== "object")
		return file_data;

	let rehydrated = null;

	for (const collection_key of KeyedCollections) {
		const collection = file_data[collection_key];

		// Arrays are already in the expected shape, which is also what older Crowdin downloads still contain
		if (collection == null || Array.isArray(collection) || typeof collection !== "object")
			continue;

		if (!rehydrated)
			rehydrated = { ...file_data };

		rehydrated[collection_key] = Object.values(collection);
	}

	return rehydrated || file_data;
}

let CachedAPIData = null;

export default function APIData() {
	if (CachedAPIData)
		return CachedAPIData;

	const { i18n } = useDocusaurusContext();

	CachedAPIData = {};

	// Loads each locale
	for (const locale of i18n.locales) {
		CachedAPIData[locale] = {
			"BleedingEdge": {},
			"Stable": {}
		};

		// Loads each category
		for (const category in APIFiles) {

			const category_files = APIFiles[category];
			const is_table = typeof category_files === "object";

			const proper_category = ProperCategoryNames[category];

			// Loads each file
			if (is_table) {
				CachedAPIData[locale]["BleedingEdge"][proper_category] = {};
				CachedAPIData[locale]["Stable"][proper_category] = {};

				for (const key in category_files) {
					const file = category_files[key];

					CachedAPIData[locale]["BleedingEdge"][proper_category][key] = RehydrateAPIFile(require(`@site/src/api/.generated/${locale}/${category}/${file}`));
					CachedAPIData[locale]["Stable"][proper_category][key] = RehydrateAPIFile(require(`@site/src/api/.generated/${locale}/Stable/${category}/${file}`));
				}
			// Usually this is only enum
			} else {
				const file = category_files;
				CachedAPIData[locale]["BleedingEdge"][proper_category] = RehydrateAPIFile(require(`@site/src/api/.generated/${locale}/${file}`));
				CachedAPIData[locale]["Stable"][proper_category] = RehydrateAPIFile(require(`@site/src/api/.generated/${locale}/Stable/${file}`));
			}
		}
	}

	return CachedAPIData;
};