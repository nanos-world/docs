// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import custom elements
import { HeaderDeclaration, ConstructorDeclaration, FunctionsDeclaration, StaticFunctionsDeclaration, EventsDeclaration } from '@site/src/components/ClassBuilder.mdx';
import { Structs, BasicType, AuthorityType, Classes, ReferenceLink, Enums, CardLink, AssetPath } from '@site/docs/components/_nanos.mdx';

export default {
	// Re-use the default mapping
	...MDXComponents,

	// Define custom elements
	HeaderDeclaration,
	ConstructorDeclaration,
	FunctionsDeclaration,
	StaticFunctionsDeclaration,
	EventsDeclaration,
	Structs,
	BasicType,
	AuthorityType,
	Classes,
	ReferenceLink,
	Enums,
	CardLink,
	AssetPath
};