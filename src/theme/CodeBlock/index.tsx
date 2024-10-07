import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';
import ReferenceCodeBlock from '@saucelabs/theme-github-codeblock/build/theme/ReferenceCodeBlock';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): JSX.Element {
	// Fixes props.metastring parsing
	if (props.metastring?.split(' ').includes('reference')) {
		return (
			<ReferenceCodeBlock {...props} />
		);
	}

	// Native CodeBlock
	return (
		<>
			<CodeBlock {...props} />
		</>
	);
}
