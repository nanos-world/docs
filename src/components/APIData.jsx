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

export default function APIData() {
	if (CachedAPIData)
		return CachedAPIData;

	const { i18n } = useDocusaurusContext();

	CachedAPIData = {};

	// Loads each locale
	for (const locale of i18n.locales) {
		CachedAPIData[locale] = {
			"Stable": {},
			"BleedingEdge": {}
		};

		// Loads each category
		for (const category in APIFiles) {

			const category_files = APIFiles[category];
			const is_table = typeof category_files === "object";

			const proper_category = ProperCategoryNames[category];

			// Loads each file
			if (is_table) {
				CachedAPIData[locale]["Stable"][proper_category] = {};
				CachedAPIData[locale]["BleedingEdge"][proper_category] = {};

				for (const key in category_files) {
					const file = category_files[key];

					CachedAPIData[locale]["Stable"][proper_category][key] = require("@site/src/api/.generated/en/Stable/" + category + "/" + file);
					CachedAPIData[locale]["BleedingEdge"][proper_category][key] = require("@site/src/api/.generated/en/" + category + "/" + file);
				}
			// Usually this is only enum
			} else {
				const file = category_files;
				CachedAPIData[locale]["Stable"][proper_category] = require("@site/src/api/.generated/en/Stable/" + file);
				CachedAPIData[locale]["BleedingEdge"][proper_category] = require("@site/src/api/.generated/en/" + file);
			}
		}
	}

	return CachedAPIData;
};