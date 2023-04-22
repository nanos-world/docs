import React from 'react';
import CodeBlock from '@theme/CodeBlock';

import { EnumDeclaration } from '@site/src/components/EnumDeclaration';
import { GetFunctionSignature, GetStaticFunctionSignature, GetEventSignature, GetParametersList, FunctionParametersDeclaration } from '@site/src/components/ClassBuilder.mdx';


export const AuthorityTooltip = ({ img, title, description }) => (
	<>
		<h3>
			<img src={img} title={title} style={{ width: "24px", "vertical-align": "middle", "margin-right": "5px" }} /> {title}
		</h3>
		<span dangerouslySetInnerHTML={{ __html: description }}></span>
	</>
);

export const AssetPathToolTip = ({ label, description }) => (
	<>
		<h3>
			{label}
		</h3>
		<span dangerouslySetInnerHTML={{ __html: description }}></span>
	</>
);

export const ClassToolTip = ({ class_name, description }) => (
	<>
		<h3>
			{class_name} Class
		</h3>
		<span dangerouslySetInnerHTML={{ __html: description }}></span>
	</>
);

export const StructToolTip = ({ struct_name, description }) => (
	<>
		<h3>
			{struct_name} Struct
		</h3>
		<span dangerouslySetInnerHTML={{ __html: description }}></span>
	</>
);

export const EventToolTip = ({ class_name, event_data }) => (
	<CodeBlock className="language-lua">
		{ GetEventSignature(class_name, event_data) }
	</CodeBlock>
);

export const StaticFunctionToolTip = ({ class_name, function_data }) => (
	<CodeBlock className="language-lua">
		{ GetStaticFunctionSignature(class_name, function_data) }
	</CodeBlock>
);

export const FunctionToolTip = ({ class_name, function_data }) => (
	<CodeBlock className="language-lua">
		{ GetFunctionSignature(class_name, function_data) }
	</CodeBlock>
);

export const InlineFunctionToolTip = ({ function_parameters }) => (
	<>
		<CodeBlock className="language-lua">
			function({ GetParametersList(function_parameters) })
		</CodeBlock>
		<br />
		<FunctionParametersDeclaration parameters={function_parameters} include_default={false} />
	</>
);

export const EnumToolTip = ({ enum_name, enum_data }) => (
	<EnumDeclaration enum_name={ enum_name } enum_data={ enum_data } is_tooltip={true} />
);