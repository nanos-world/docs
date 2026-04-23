import React from 'react';
import Admonition from '@theme/Admonition';
import { GetRelations, GetClassData } from '@site/src/components/ClassBuilder';

export const EnumDeclaration = ({ enum_name, enum_data, is_tooltip }) => (
	<>
		{
			is_tooltip ? <h3>
				<img src={"/img/scripting/lua.webp"} title={"Lua"} className={"tooltip-img"} loading={"lazy"} />
				<span className={"tooltip-span"}>
					<div>{enum_name}</div>
					<div className={"tooltip-sub"}>Enum (integer)</div>
				</span>
			</h3> :
			<h3 id={ enum_name.toLowerCase() }>
				<code>{ enum_name }</code>
				<a className={"hash-link"} href={`#${enum_name.toLowerCase()}`}></a>
			</h3>
		}
		<blockquote>
			<span dangerouslySetInnerHTML={{ __html: enum_data ? enum_data.description : null }}></span>
		</blockquote>
		{enum_data && enum_data.supports_bitwise ?
			<Admonition type="tip" icon="💡" title="TIP">
				This Enum supports <a href="https://www.lua.org/manual/5.4/manual.html#3.4.2">Bitwise Operations</a>!
			</Admonition>
		: null}
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
				{enum_data && enum_data.enums ? enum_data.enums.map((value) =>
					<tr key={value.key}>
						<td style={{ whiteSpace: "nowrap" }}><code>{ enum_name }.{ value.key }</code></td>
						<td style={{ whiteSpace: "nowrap" }}><code>{ value.value }</code></td>
						<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
					</tr>
				) : null}
			</tbody>
		</table>
		{ is_tooltip ? "" : <hr /> }
	</>
);

export const EnumsDeclaration = () => {
	const enums_data = GetClassData("Enums");
	return Object.keys(enums_data).map((enum_name) => <EnumDeclaration key={enum_name} enum_name={enum_name} enum_data={enums_data[enum_name]} /> )
};