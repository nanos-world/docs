import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import { Link } from "react-router-dom";
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';

import { AuthorityType, NativeType, BasicType, Classes, Structs, Enums, AssetPath, LinkActiveVersion, getActiveVersionPath, ReferenceLink } from '@site/src/components/_nanos';
import { FunctionToolTip, StaticFunctionToolTip, InlineFunctionToolTip, TablePropertiesToolTip, EventToolTip } from '@site/src/components/Tooltips';
import { Details } from '@site/src/components/MarkdownUtils.mdx';

import APIData from '@site/src/components/APIData';

// Asset Paths Map
export const AssetPaths = {
	StaticMeshPath: AssetPath.StaticMesh,
	SkeletalMeshPath: AssetPath.SkeletalMesh,
	AnimationPath: AssetPath.Animation,
	ParticlePath: AssetPath.Particle,
	MaterialPath: AssetPath.Material,
	MapPath: AssetPath.Map,
	BlueprintPath: AssetPath.Blueprint,
	SoundPath: AssetPath.Sound,
	ImagePath: AssetPath.Image,
	HTMLPath: AssetPath.HTML,
}

// Gets an Element by it's string type
export function GetElementByType(type, index) {
	const is_optional = type.endsWith("?");
	if (is_optional)
		type = type.slice(0, -1);
	const is_variadic = type.endsWith("...");
	if (is_variadic)
		type = type.slice(0, -3);
	const is_array = type.endsWith("[]");
	if (is_array)
		type = type.slice(0, -2);
	const type_uppercase = type.charAt(0).toUpperCase() + type.slice(1);
	const TypeElement =
		BasicType[type_uppercase] ? BasicType[type_uppercase] :
		Classes[type] ? Classes[type] :
		AssetPaths[type] ? AssetPaths[type] :
		Structs[type] ? Structs[type] : null;
	if (!TypeElement)
		return <Enums>{type}</Enums>;
	return <span key={`${type}-${index}`}>
		{ is_array ? <><BasicType.Table /> of </> : "" }
		{ is_variadic ? <><BasicType.VarArgs /> of </> : "" }
		<TypeElement />
		{ is_optional ? <> or <BasicType.Nil /></> : "" }
	</span>;
}

// Splits a value if it has |
export function SplitTypesByOr(types) {
	return types.split("|").map((type, index) => GetElementByType(type, index)).reduce((prev, next) => [prev, " or ", next])
}

// Gets a list of Returns elements
export function GetReturnList(return_list) {
	return return_list.map((return_data) => SplitTypesByOr(return_data.type)).reduce((prev, next) => [prev, ", ", next]);
}

// Gets a list of return descriptions surrounded by ()
export function GetReturnDescriptionList(return_list) {
	const ret = return_list.map((return_data) =>
		return_data.description || return_data.table_properties || return_data.table_properties_custom ?
			<>
				{ return_data.description }
				{ return_data.description && (return_data.table_properties || return_data.table_properties_custom) ? <> </> : null }
				{ return_data.table_properties ? <InlineTablePropertiesDeclaration table_properties={return_data.table_properties} /> : null }
				{ return_data.table_properties_custom ? <InlineTablePropertiesDeclaration table_properties_custom={return_data.table_properties_custom} /> : null }
			</>
		: null
	).reduce((prev, next) => [prev, ", ", next]);
	return ret ? <>{" ("}{ ret }{")"}</> : "";
}

// Authority Label Map
export const AuthorityLabels = {
	client: <>This class can only be spawned on 🟧 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Client</LinkActiveVersion> side.</>,
	server: <>This class can only be spawned on 🟦 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Server</LinkActiveVersion> side.</>,
	both: <>This class can be spawned on both 🟧 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Client</LinkActiveVersion> and 🟦 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Server</LinkActiveVersion> side (if you spawn it on client, it won't be synchronized with other players).</>,
}

// Authority Label Map for Static Classes
export const AuthorityLabelsStatic = {
	client: <>This static class can be accessed only on 🟧 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Client</LinkActiveVersion> side.</>,
	server: <>This static class can be accessed only on 🟦 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Server</LinkActiveVersion> side.</>,
	both: <>This static class can be accessed on both 🟧 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Client</LinkActiveVersion> and 🟦 <LinkActiveVersion to="core-concepts/scripting/authority-concepts">Server</LinkActiveVersion> side.</>,
}

// Gets a Parameter name (with ? when optional)
export function GetParameterName(parameter_data) {
	return `${parameter_data.name}${parameter_data.default != null ? "?" : ""}${parameter_data.type.endsWith("...") ? "..." : ""}`;
}

// Gets a Parameter description
export function GetParameterDescription(parameter_data) {
	return <>
		<span style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: parameter_data.description }}></span>
		<> </>
		{ parameter_data.type == "function" && parameter_data.function_parameters ? <InlineFunctionNameDeclaration function_parameters={parameter_data.function_parameters} /> : "" }
	</>;
}

// Gets a list of parameters separated by comma
export function GetParametersList(list) {
	return !list ? "" : list.map((value) => GetParameterName(value)).join(", ");
}

// Generates Constructor Example Codeblock
export function GetConstructorExample(class_data, constructor_index) {
	return `local my_${class_data.name.toLowerCase()} = ${class_data.name}(${GetParametersList(class_data.constructors[constructor_index].parameters)})`;
}

// Generates the local ret = Part of the function
export function GetReturnPart(function_data) {
	if (!function_data.return)
		return "";
	if (function_data.return.length == 1)
	{
		if (function_data.return[0].type && function_data.return[0].type.endsWith("..."))
			return "local ret_01, ret_02, ... = ";
		return "local ret = ";
	}
	return `local${function_data.return.map((value, i) => " ret_0" + (i + 1))} = `;
}

// Gets Multiline Code or a single line
export function GetCodeExampleParsed(content) {
	return (Array.isArray(content) ? content.join("\n") : content).replaceAll("    ", "\t");
}

// Generates Generic Example Codeblock
export function GetGenericExample(example, context) {
	return <CodeBlock key={example.title} className="language-lua api-examples" title={ `${context ? `(${context}) ` : ""}${example.title}` }>
		{ GetCodeExampleParsed(example.content) }
		{ example.output ? `\n-- Outputs \"${ example.output }\"` : "" }
	</CodeBlock>;
}

// Generates Event Example Codeblock
export function GetEventExample(class_name, event_data, example, context) {
	return GetGenericExample({ content: GetEventSignature(class_name, event_data, `\t${ GetCodeExampleParsed(example.content).replaceAll('\n', "\n\t") }`), title: example.title }, context);
}

// Generates Function Signature Codeblock
export function GetFunctionSignature(class_name, function_data) {
	return `${GetReturnPart(function_data)}my_${class_name.toLowerCase()}:${function_data.name}(${GetParametersList(function_data.parameters)})`;
}

// Generates Static Function Signature Codeblock
export function GetStaticFunctionSignature(class_name, function_data) {
	return `${GetReturnPart(function_data)}${class_name}.${function_data.name}(${GetParametersList(function_data.parameters)})`;
}

// Generates Event Signature Codeblock
export function GetEventSignature(class_name, event_data, content) {
	return `${class_name}.Subscribe("${event_data.name}", function(${GetParametersList(event_data.arguments)})\n${ content ? content : `\t-- ${event_data.name} was called` }\nend)`;
}

// Authority Admonition
export const AuthorityAdmonition = ({ authority, is_static }) => (
	<Admonition type="info" icon="💂" title="Authority">{ is_static ? AuthorityLabelsStatic[authority] : AuthorityLabels[authority] }</Admonition>
);

export const TypeToAPIFolder = { StandardLibrary: "StandardLibraries/", Struct: "Structs/", Class: "Classes/", StaticClass: "StaticClasses/", UtilityClass: "UtilityClasses/", UtilityClasses: "UtilityClass/", Enums: "" };

// API Source URL
export const APISourceURL = ({ type, class_name }) => (
	<Admonition type="note" icon="🧑‍💻" title="API Source">
		The methods, properties and events descriptions from this page are defined in our <a href={`https://github.com/nanos-world/api/blob/main/${TypeToAPIFolder[type]}${class_name}.json`}>GitHub API Repository</a>!
	</Admonition>
);

// Open Source Admonition
export const OpenSourceAdmonition = ({ url }) => (
	<Admonition type="tip" icon="👐" title="Open Source">
		This library implementation is Open Sourced on <a href={`https://github.com/nanos-world/nanos-world-lua-lib${url ? `/blob/master/${url}` : ""}`}>GitHub</a>!
	</Admonition>
);

// Inheritance Admonition
export const InheritanceAdmonition = ({ inheritance }) => (
	<Admonition type="info" icon="👪" title="Inheritance">
		This class shares methods and events from { inheritance.map((inherit, index) => GetElementByType(inherit, index)).reduce((prev, next) => [prev, ", ", next]) }.
	</Admonition>
);

// Base Class Admonition
export const BaseClassAdmonition = ({ inherited }) => (
	<Admonition type="info" icon="👪" title="Base Class">
		This is a Base Class. Base Classes are abstract definitions used to share common methods and events between related child classes, thus you cannot spawn it directly.
		<br />
		<br />
		Classes that share methods and events from this Base Class: { inherited.map((inherit, index) => GetElementByType(inherit, index)).reduce((prev, next) => [prev, ", ", next]) }.
	</Admonition>
);

// Static Class Admonition
export const StaticClassAdmonition = () => (
	<Admonition type="info" icon="🗿" title="Static Class">
		This is a <b>Static Class</b>. Access it's methods directly with <code>.</code>. It's not possible to spawn new instances.
	</Admonition>
);

// Gets Authority Element by string
export function GetAuthorityType(authority) {
	if (authority == "server")
		return <AuthorityType.ServerOnly />;
	if (authority == "client")
		return <AuthorityType.ClientOnly />;
	if (authority == "authority")
		return <AuthorityType.AuthorityOnly />;
	if (authority == "network-authority")
		return <AuthorityType.NetworkAuthority />;
	if (authority == "both")
		return <AuthorityType.Both />;
	return "";
};

// Gets Native Element
export function GetNative(is_native) {
	if (is_native === true)
		return <NativeType.Native />;
	if (is_native === false)
		return <NativeType.NotNative />;
	return null;
};

export function GetRelations(relations) {
	const functions = relations.functions ? relations.functions.map(function(value, index) {
			return <Link key={ `${value.name}-${index}` } to={`#function-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const static_functions = relations.static_functions ? relations.static_functions.map(function(value, index) {
			return <Link key={ `${value.name}-${index}` } to={`#static-function-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const events = relations.events ? relations.events.map(function(value, index) {
			return <Link key={ `${value.name}-${index}` } to={`#event-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const etc = relations.etc ? relations.etc.map(function(value, index) {
			return <Link key={ `${value.name}-${index}` } to={`${value.url}`}>{value.label}</Link>;
		}) : [];
	return [...functions, ...static_functions, ...events, ...etc].reduce((prev, next) => [prev, ", ", next]);
};

// Function Parameters Declaration
export const FunctionParametersDeclaration = ({ parameters, include_default = true }) => (
	<>
		{Array.isArray(parameters) && parameters.length > 0 ?
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Parameter</th>
							{ include_default ? <th>Default</th> : null }
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{parameters.map(function(value, index) {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ SplitTypesByOr(value.type) }</td>
								<td><code>{ GetParameterName(value) }</code></td>
								{ include_default ? <td style={{ whiteSpace: "nowrap" }}>{ value.default != null ? <code>{value.default}</code> : "" }</td> : null }
								<td>{ GetParameterDescription(value) }</td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		: <></>}
	</>
);

// Function Block Declaration
export const FunctionDeclaration = ({ function_data, is_static, class_name }) => (
	<>
		<hr />
		<h3 id={ `${is_static ? "static-function" : "function"}-${function_data.name.toLowerCase()}` }>
			{ GetAuthorityType(function_data.authority) }
			{ GetNative(function_data.is_native) }
			<code>
				{ function_data.name }
			</code>
		</h3>
		<blockquote>
			<span dangerouslySetInnerHTML={{ __html: function_data.description_long ? function_data.description_long : function_data.description }}></span>
		</blockquote>
		<p className="function-return">
			{ !function_data.return ? "" :
				<>
					<>— Returns </>
					{ GetReturnList(function_data.return) }
					{ GetReturnDescriptionList(function_data.return) }
					{"."}
				</>
			}
		</p>
		<CodeBlock className="language-lua">
			{ is_static ? GetStaticFunctionSignature(class_name, function_data) : GetFunctionSignature(class_name, function_data) }
		</CodeBlock>
		<FunctionParametersDeclaration parameters={function_data.parameters} />
		{Array.isArray(function_data.examples) && function_data.examples.length > 0 ?
			<Details summary={`${class_name}.${function_data.name} Examples`}>
				{function_data.examples.map(function(example, index) {
					return GetGenericExample(example)
				})}
			</Details>
		: <></>}
		{function_data.relations ?
			<p className={"relations"}>
				{"See also "}
				{ GetRelations(function_data.relations) }
				{"."}
			</p>
		: <></>}
	</>
);

// Event Block Declaration
export const EventDeclaration = ({ event_data, class_name }) => (
	<>
		<hr />
		<h3 id={ `event-${event_data.name.toLowerCase()}` }>
			{ GetAuthorityType(event_data.authority) }
			{ GetNative(event_data.is_native) }
			<code>
				{ event_data.name }
			</code>
		</h3>
		<blockquote dangerouslySetInnerHTML={{ __html: `${ event_data.description_long ? event_data.description_long : event_data.description }${ event_data.return ? "<br/><br/>" + event_data.return[0].description : ""}` }}></blockquote>
		<CodeBlock className="language-lua">
			{ GetEventSignature(class_name, event_data) }
		</CodeBlock>
		{ Array.isArray(event_data.arguments) && event_data.arguments.length > 0 ?
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Argument</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{event_data.arguments.map(function(value, index) {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ SplitTypesByOr(value.type) }</td>
								<td><code>{ value.name }</code></td>
								<td dangerouslySetInnerHTML={{ __html: value.description }} style={{ wordBreak: "break-word" }}></td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		: <></> }
		{Array.isArray(event_data.examples) && event_data.examples.length > 0 ?
			<Details summary={ `${class_name} "${event_data.name}" Event Examples`}>
				{event_data.examples.map(function(example, index) {
					return GetEventExample(class_name, event_data, example)
				})}
			</Details>
		: <></>}
		{event_data.relations ?
			<p className={"relations"}>
				{"See also "}
				{ GetRelations(event_data.relations) }
				{"."}
			</p>
		: <></>}
	</>
);

export const StaticFunctionNameDeclaration = ({ class_name, function_data, base_class }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<StaticFunctionToolTip class_name={class_name} function_data={function_data} />}>
		<b>
			<Link to={`${ base_class ? `${getActiveVersionPath()}/scripting-reference/classes/base-classes/${base_class.toLowerCase()}` : "" }${`#static-function-${function_data.name.toLowerCase()}`}`} className={"hover-link"}>
				<code>{ function_data.name }</code>
			</Link>
		</b>
	</Tippy>
);

export const FunctionNameDeclaration = ({ class_name, function_data, base_class }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<FunctionToolTip class_name={class_name} function_data={function_data} />}>
		<b>
			<Link to={`${ base_class ? `${getActiveVersionPath()}/scripting-reference/classes/base-classes/${base_class.toLowerCase()}` : "" }${`#function-${function_data.name.toLowerCase()}`}`} className={"hover-link"}>
				<code>{ function_data.name }</code>
			</Link>
		</b>
	</Tippy>
);

export const InlineFunctionNameDeclaration = ({ function_parameters }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<InlineFunctionToolTip function_parameters={function_parameters} />}>
		<span className={"hover-link"}>with this format</span>
	</Tippy>
);

export const InlineTablePropertiesDeclaration = ({ table_properties, table_properties_custom }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<TablePropertiesToolTip table_properties={table_properties} table_properties_custom={table_properties_custom} />}>
		<span className={"hover-link"}>with this format</span>
	</Tippy>
);

export const EventNameDeclaration = ({ class_name, event_data, base_class }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<EventToolTip class_name={class_name} event_data={event_data} />}>
		<b>
			<Link to={`${ base_class ? `${getActiveVersionPath()}/scripting-reference/classes/base-classes/${base_class.toLowerCase()}` : "" }${`#event-${event_data.name.toLowerCase()}`}`} className={"hover-link"}>
				<code>{ event_data.name }</code>
			</Link>
		</b>
	</Tippy>
);

// Static Function List Declaration
export const StaticFunctionListDeclaration = ({ class_name, functions_list, base_class }) => (
	<div className="table-wrapper">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Returns</th>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{functions_list.map(function(value, index) {
					return <tr key={ `${value.name}-${index}` }>
						<td width="50px">{ GetAuthorityType(value.authority) }{ GetNative(value.is_native) }</td>
						<td>{ value.return ? GetReturnList(value.return) : "" }</td>
						<td><StaticFunctionNameDeclaration class_name={ class_name } base_class={ base_class } function_data={ value } /></td>
						<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
					</tr>;
				})}
			</tbody>
		</table>
	</div>
);

// Function List Declaration
export const FunctionListDeclaration = ({ class_name, functions_list, base_class }) => (
	<div className="table-wrapper">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Returns</th>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{functions_list.map(function(value, index) {
					return <tr key={ `${value.name}-${index}` }>
						<td width="50px">{ GetAuthorityType(value.authority) }{ GetNative(value.is_native) }</td>
						<td>{ value.return ? GetReturnList(value.return) : "" }</td>
						<td><FunctionNameDeclaration class_name={ class_name } base_class={ base_class } function_data={ value } /></td>
						<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
					</tr>;
				})}
			</tbody>
		</table>
	</div>
);

// Events List Declaration
export const EventListDeclaration = ({ type, name, inherited_class_name, base_class }) => {
	const class_data = GetClassData(type, name);
	return (
		<div className="table-wrapper">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{class_data.events.map(function(value, index) {
						return <tr key={ `${value.name}-${index}` }>
							<td width="50px">{ GetAuthorityType(value.authority) }{ GetNative(value.is_native) }</td>
							<td><EventNameDeclaration class_name={ inherited_class_name } base_class={ base_class } event_data={ value } /></td>
							<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
						</tr>;
					})}
				</tbody>
			</table>
		</div>
	);
};

export const GetClassData = (type, name) => {
	const is_bleeding_edge = useActiveVersion().name == "current";
	return APIData[is_bleeding_edge ? "BleedingEdge" : "Stable"][type][name];
}

// Header Block Declaration
export const HeaderDeclaration = ({ type, name, image, is_static, open_source_url }) => {
	const class_data = GetClassData(type, name);
	return (<>
		<p dangerouslySetInnerHTML={{ __html: class_data.description }}></p>
		{ image ? <><p><img src={image} /></p><hr /></> : "" }
		{ is_static ? <StaticClassAdmonition /> : "" }
		{ class_data.authority ? <AuthorityAdmonition authority={class_data.authority} is_static={is_static} /> : "" }
		{ class_data.inheritance ? <InheritanceAdmonition inheritance={class_data.inheritance} /> : "" }
		{ open_source_url ? <OpenSourceAdmonition url={open_source_url} /> : "" }
		<APISourceURL type={type} class_name={name} />
		{ class_data.is_base ? <BaseClassAdmonition inherited={class_data.inheritance_children} /> : "" }
		<hr />
	</>);
};

// Block of Constructor
export const ConstructorDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return class_data.constructors.map((constructor, index) =>
		<>
			<h4 id={ `constructor-${ constructor.description.toLowerCase().replace(' ', '-') }` }>{ constructor.description }</h4>
			<CodeBlock className="language-lua">
				{ GetConstructorExample(class_data, index) }
			</CodeBlock>
			{
				constructor.parameters.length == 0 ? <i>This constructor doesn't have parameters.</i> :
				<>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>Type</th>
									<th>Name</th>
									<th>Default</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{ constructor.parameters.map(function(value, index) {
									return <tr key={ `${value.name}-${index}` }>
										<td>{ SplitTypesByOr(value.type) }</td>
										<td><b><code>{ value.name }</code></b></td>
										<td style={{ whiteSpace: "nowrap" }}>{ value.default != null ? <code>{ value.default }</code> : "" }</td>
										<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
									</tr>;
								} )}
							</tbody>
						</table>
					</div>
				</>
			}
		</>
	);
};

// Base Class Functions
export const InheritedClassFunctions = ({ inherited_class_name, parent_class_name, is_static } ) => {
	const class_data = GetClassData("Class", parent_class_name);
	return (<>
		<Details summary={`Inherited ${parent_class_name} ${is_static ? "Static " : ""}Functions`}>
			<ReferenceLink href={`scripting-reference/classes/base-classes/${parent_class_name}`}>Base {parent_class_name}</ReferenceLink>
			{ is_static ?
				<StaticFunctionListDeclaration class_name={inherited_class_name} base_class={parent_class_name} functions_list={class_data.static_functions} />
				: <FunctionListDeclaration class_name={inherited_class_name} base_class={parent_class_name} functions_list={class_data.functions} />
			}
		</Details>
	</>);
};

// Base Class Events
export const InheritedClassEvents = ({ inherited_class_name, parent_class_name }) => (
	<Details summary={`Inherited ${parent_class_name} Events`}>
		<ReferenceLink href={`scripting-reference/classes/base-classes/${parent_class_name}`}>Base {parent_class_name}</ReferenceLink>
		<EventListDeclaration type="Class" name="Entity" inherited_class_name={inherited_class_name} base_class={parent_class_name} />
	</Details>
);

// Block of Functions
export const FunctionsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return (<>
		{ class_data.inheritance && class_data.inheritance.includes("Entity") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Entity"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Actor") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Actor"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Paintable") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Paintable"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Damageable") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Damageable"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Pickable") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Pickable"} /> : "" }
		{
			class_data.functions == null || class_data.functions.length == 0 ? <i>This class doesn't have own functions.</i> :
			<>
				<FunctionListDeclaration class_name={class_data.name} functions_list={class_data.functions} />
				{ class_data.functions.map((value, index) => <FunctionDeclaration key={ `${value.name}-${index}` } function_data={value} class_name={class_data.name} />) }
			</>
		}
	</>);
};

// Block of Static Functions
export const StaticFunctionsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return (<>
		{ class_data.inheritance && class_data.inheritance.includes("Entity") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Entity"} is_static={true} /> : "" }
		{/* { class_data.inheritance && class_data.inheritance.includes("Actor") ?
			<InheritedClassFunctions inherited_class_name={class_data.name} parent_class_name={"Actor"} is_static={true} /> : "" } */}
		{
			class_data.static_functions == null || class_data.static_functions.length == 0 ? <i>This class doesn't have own static functions.</i> :
			<>
				<StaticFunctionListDeclaration class_name={class_data.name} functions_list={class_data.static_functions} />
				{ class_data.static_functions.map((value, index) => <FunctionDeclaration key={ `${value.name}-${index}` } function_data={value} is_static class_name={class_data.name} />) }
			</>
		}
	</>);
};

// Block of Examples
export const ExamplesDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return <>
		{ class_data.static_functions && class_data.static_functions.map((value) =>
			value.examples && value.examples.map((example) => GetGenericExample(example, `${ name }.${ value.name }`))
		)}
		{ class_data.functions && class_data.functions.map((value) =>
			value.examples && value.examples.map((example) => GetGenericExample(example, `${ name }.${ value.name }`))
		)}
		{ class_data.events && class_data.events.map((value) =>
			value.examples && value.examples.map((example) => GetEventExample(name, class_data, example, `${ name } "${ value.name }" Event`))
		)}
	</>;
};

// Block of Events
export const EventsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return (<>
		{ class_data.inheritance && class_data.inheritance.includes("Entity") ?
			<InheritedClassEvents inherited_class_name={class_data.name} parent_class_name={"Entity"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Actor") ?
			<InheritedClassEvents inherited_class_name={class_data.name} parent_class_name={"Actor"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Pickable") ?
			<InheritedClassEvents inherited_class_name={class_data.name} parent_class_name={"Pickable"} /> : "" }
		{ class_data.inheritance && class_data.inheritance.includes("Damageable") ?
			<InheritedClassEvents inherited_class_name={class_data.name} parent_class_name={"Damageable"} /> : "" }
		{
			class_data.events == null || class_data.events.length == 0 ? <i>This class doesn't have own events.</i> :
			<>
				<EventListDeclaration type={type} name={class_data.name} inherited_class_name={class_data.name} />
				{ class_data.events.map((value, index) => <EventDeclaration key={ `${value.name}-${index}` } event_data={value} class_name={class_data.name} />) }
			</>
		}
	</>);
};

// Block of Properties
export const PropertiesDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);
	return (<>
		{
			class_data.properties == null || class_data.properties.length == 0 ? <i>This class doesn't have properties.</i> :
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{class_data.properties.map(function(value, index) {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ GetElementByType(value.type) }</td>
								<td><b><code>{ value.name }</code></b></td>
								<td style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: value.description }}></td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		}
	</>);
};