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

let CachedAPIData = null;

// Each locale is built separately, so '@nanos-api' (see the nanos-api plugin in docusaurus.config.js) only points to the locale being built
export default function APIData() {
	if (CachedAPIData)
		return CachedAPIData;

	const { i18n } = useDocusaurusContext();
	const locale = i18n.currentLocale;

	CachedAPIData = {};
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

				CachedAPIData[locale]["BleedingEdge"][proper_category][key] = require(`@nanos-api/${category}/${file}`);
				CachedAPIData[locale]["Stable"][proper_category][key] = require(`@nanos-api/Stable/${category}/${file}`);
			}
		// Usually this is only enum
		} else {
			const file = category_files;
			CachedAPIData[locale]["BleedingEdge"][proper_category] = require(`@nanos-api/${file}`);
			CachedAPIData[locale]["Stable"][proper_category] = require(`@nanos-api/Stable/${file}`);
		}
	}

	return CachedAPIData;
};
