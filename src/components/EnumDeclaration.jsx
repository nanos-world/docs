import React from 'react';
import EnumsData from '@site/src/api/Enums.json';
import { GetRelations } from '@site/src/components/ClassBuilder.mdx';

export const EnumDeclaration = ({ enum_name, enum_data, is_tooltip }) => (
	<>
		<h3 id={ is_tooltip ? "" : enum_name.toLowerCase() }>
			{ is_tooltip ? <>Enum { enum_name }</> : <code>{ enum_name }</code> }
		</h3>
		{enum_data && enum_data.relations ?
			<p className={"relations"}>
				Used by { GetRelations(enum_data.relations) }.
			</p>
		: null}
		<table style={{ width: "100%", display: "table", marginBottom: "0" }}>
			<thead>
				<tr>
					<th>Label</th>
					<th>Value</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{!enum_data ? null : enum_data.map((value) =>
					<tr key={value.key}>
						<td style={{ whiteSpace: "nowrap" }}><code>{ enum_name }.{ value.key }</code></td>
						<td style={{ whiteSpace: "nowrap" }}><code>{ value.value }</code></td>
						<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
					</tr>
				)}
			</tbody>
		</table>
		{ is_tooltip ? "" : <hr /> }
	</>
);

export const EnumsDeclaration = () => (
	Object.keys(EnumsData).map((enum_name) => <EnumDeclaration key={enum_name} enum_name={enum_name} enum_data={EnumsData[enum_name]} /> )
);