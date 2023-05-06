// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import custom elements
import { HeaderDeclaration, ConstructorDeclaration, FunctionsDeclaration, StaticFunctionsDeclaration, ExamplesDeclaration, EventsDeclaration, PropertiesDeclaration, APISourceURL } from '@site/src/components/ClassBuilder.mdx';
import { EnumsDeclaration, EnumDeclaration } from '@site/src/components/EnumDeclaration';
import { Structs, BasicType, AuthorityType, Classes, UtilityClasses, ReferenceLink, Enums, CardLink, AssetPath } from '@site/docs/components/_nanos.mdx';

export default {
	// Re-use the default mapping
	...MDXComponents,

	// Define custom elements
	HeaderDeclaration,
	ConstructorDeclaration,
	FunctionsDeclaration,
	StaticFunctionsDeclaration,
	PropertiesDeclaration,
	EventsDeclaration,
	ExamplesDeclaration,
	EnumsDeclaration,
	APISourceURL,
	EnumDeclaration,
	UtilityClasses,
	Structs,
	BasicType,
	AuthorityType,
	Classes,
	ReferenceLink,
	Enums,
	CardLink,
	AssetPath
};