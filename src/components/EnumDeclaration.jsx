import React from 'react';
import EnumsData from '@site/src/api/Enums.json';

export const EnumDeclaration = ({ enum_name, enum_data, is_tooltip }) => (
	<>
		<h3 id={ is_tooltip ? "" : enum_name.toLowerCase() }>
			{ is_tooltip ? <>Enum { enum_name }</> : <code>{ enum_name }</code> }
		</h3>
		<table style={{ width: "100%", display: "table", "margin-bottom": "0" }}>
			<thead>
				<th>Label</th>
				<th>Value</th>
				<th>Description</th>
			</thead>
			<tbody>
				{!enum_data ? "" : enum_data.map((value) =>
					<tr>
						<td style={{ "white-space": "nowrap" }}><code>{ enum_name }.{ value.key }</code></td>
						<td style={{ "white-space": "nowrap" }}><code>{ value.value }</code></td>
						<td style={{ "word-break": "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
					</tr>
				)}
			</tbody>
		</table>
		{ is_tooltip ? "" : <hr /> }
	</>
);

export const EnumsDeclaration = () => (
	Object.keys(EnumsData).map((enum_name) => <EnumDeclaration enum_name={enum_name} enum_data={EnumsData[enum_name]} /> )
);