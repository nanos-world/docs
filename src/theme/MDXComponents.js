// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import custom elements
import { HeaderDeclaration, ConstructorDeclaration, FunctionsDeclaration, StaticFunctionsDeclaration, ExamplesDeclaration, EventsDeclaration, PropertiesDeclaration, APISourceURL } from '@site/src/components/ClassBuilder';
import { Classes, Structs, BasicType, AuthorityType, UtilityClasses, ReferenceLink, Enums, CardLink, AssetPath, VideoExternal } from '@site/src/components/_nanos';

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
	APISourceURL,
	UtilityClasses,
	Structs,
	BasicType,
	AuthorityType,
	Classes,
	ReferenceLink,
	Enums,
	CardLink,
	AssetPath,
	VideoExternal
};