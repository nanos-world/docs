import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import { Link } from "react-router-dom";
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';

import { AuthorityType, NativeType, EfficiencyType, BasicType, Classes, Structs, Enums, AssetPath, ReferenceLink } from '@site/src/components/_nanos';
import { getActiveVersionPath, LinkActiveVersion } from '@site/src/components/Utils.jsx';
import { FunctionToolTip, StaticFunctionToolTip, InlineFunctionToolTip, TablePropertiesToolTip, EventToolTip, HeaderChipToolTip } from '@site/src/components/Tooltips';
import Details from '@theme/Details';

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
	OtherPath: AssetPath.Other,
	SoundPath: AssetPath.Sound,
	ImagePath: AssetPath.Image,
	HTMLPath: AssetPath.HTML,
}

// Base classes show as <AnyBaseClass> when used in examples
export function GetExampleClassName(class_name) {
	const class_data = GetClassData("Class", class_name);
	return class_data && class_data.is_base ? `<Any${class_name}Class>` : class_name;
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
		return <Enums short={true}>{type}</Enums>;
	return <span key={`${type}-${index}`}>
		{ is_array ? <><BasicType.Table />{ ` ${GetOfLabel()} ` }</> : "" }
		{ is_variadic ? <><BasicType.VarArgs />{ ` ${GetOfLabel()} ` }</> : "" }
		<TypeElement />
		{ is_optional ? <>{ ` ${GetOrLabel()} ` }<BasicType.Nil /></> : "" }
	</span>;
}

// Word joining a container type to its element type, as in "table of string"
const GetOfLabel = () => translate({ id: 'api.type.of', message: 'of', description: 'Joins a container type to its element type, as in "table of string"' });

// Word joining alternative types, as in "string or nil"
const GetOrLabel = () => translate({ id: 'api.type.or', message: 'or', description: 'Joins alternative types, as in "string or nil"' });

// Splits a value if it has |
export function SplitTypesByOr(types) {
	return types.split("|").map((type, index) => GetElementByType(type, index)).reduce((prev, next) => [prev, ` ${GetOrLabel()} `, next])
}

// Placeholder shown when the API has no description, as HTML for the fields rendered with dangerouslySetInnerHTML
const GetNoDescriptionLabel = () => translate({ id: 'api.no_description', message: 'No description provided' });
const GetNoDescriptionHTML = () => `<span class='subtle-description'>${GetNoDescriptionLabel()}</span>`;

// Link text that opens the tooltip with a table or callback format
const WithThisFormatLabel = () => <Translate id="api.with_this_format">with this format</Translate>;

// Pages linked from the authority sentences
const AuthorityConceptsPath = "core-concepts/scripting/authority-concepts";
const ClientOnlyPath = `${AuthorityConceptsPath}#authoritytypeclientonly-client-side`;
const ServerOnlyPath = `${AuthorityConceptsPath}#authoritytypeserveronly-server-side`;
const BothSidesPath = `${AuthorityConceptsPath}#authoritytypeboth-both-sides`;
const SetNetworkAuthorityPath = "scripting-reference/classes/base-classes/actor#function-setnetworkauthority";
const SetNetworkAuthorityAutoDistributedPath = "scripting-reference/classes/base-classes/actor#function-setnetworkauthorityautodistributed";

// Words used in the authority sentences, links to the authority concepts page
const ClientSideLink = ({ to }) => (
	<LinkActiveVersion to={to}>
		<Translate id="api.side.client">Client</Translate>
	</LinkActiveVersion>
);
const ServerSideLink = ({ to }) => (
	<LinkActiveVersion to={to}>
		<Translate id="api.side.server">Server</Translate>
	</LinkActiveVersion>
);
const NetworkAuthorityLink = () => (
	<LinkActiveVersion to={`${AuthorityConceptsPath}#network-authority`}>
		<Translate id="api.network_authority">Network Authority</Translate>
	</LinkActiveVersion>
);

// Gets a list of Returns elements
export function GetReturnList(return_list) {
	return return_list.map((return_data) => SplitTypesByOr(return_data.type)).reduce((prev, next) => [prev, ", ", next]);
}

// Gets a Return description
export function GetReturnDescription(return_data, show_inline_keys = true) {
	return <>
		{ return_data.name || return_data.description || return_data.table_properties || return_data.table_properties_custom ?
			<>
				{[
					return_data.description || return_data.name,
					return_data.table_properties && show_inline_keys ? <InlineTablePropertiesDeclaration table_properties={return_data.table_properties} /> : null,
					return_data.function_parameters ? <InlineFunctionNameDeclaration function_parameters={return_data.function_parameters} /> : null,
					return_data.table_properties_custom ? <InlineTablePropertiesDeclaration table_properties_custom={return_data.table_properties_custom} /> : null,
				].filter(Boolean).reduce((prev, next) => [prev, " ", next])}
			</>
		: <span class="subtle-description">{ GetNoDescriptionLabel() }</span> }
	</>;
}

// Network Authority Label Map
export const NetworkAuthorityDistributionLabels = {
	enabled: (
		<Translate
			id="api.network_distribution.enabled.description"
			values={{
				network_authority: <NetworkAuthorityLink />,
				enabled: (
					<strong>
						<Translate id="api.network_distribution.enabled">enabled</Translate>
					</strong>
				),
				override: (
					<LinkActiveVersion to={SetNetworkAuthorityPath}>
						<Translate id="api.network_distribution.override">override</Translate>
					</LinkActiveVersion>
				),
				disable_it: (
					<LinkActiveVersion to={SetNetworkAuthorityAutoDistributedPath}>
						<Translate id="api.network_distribution.disable_it">disable it</Translate>
					</LinkActiveVersion>
				),
			}}>
			{'This class have the {network_authority} distribution {enabled} and automatically handled by the server. You can {override} the Network Authority or {disable_it} from automatically distributing.'}
		</Translate>
	),
	disabled: (
		<Translate
			id="api.network_distribution.disabled.description"
			values={{
				network_authority: <NetworkAuthorityLink />,
				disabled: (
					<strong>
						<Translate id="api.network_distribution.disabled">disabled</Translate>
					</strong>
				),
				enable_it: (
					<LinkActiveVersion to={SetNetworkAuthorityAutoDistributedPath}>
						<Translate id="api.network_distribution.enable_it">enable it</Translate>
					</LinkActiveVersion>
				),
			}}>
			{'This class have the {network_authority} auto distribution {disabled} by default. But you can {enable_it}.'}
		</Translate>
	),
	none: (
		<Translate
			id="api.network_distribution.none.description"
			values={{ network_authority: <NetworkAuthorityLink /> }}>
			{'This class can\'t be {network_authority} distributed.'}
		</Translate>
	),
}

// Authority Label Map
export const AuthorityLabels = {
	client: (
		<Translate
			id="api.class_authority.client.label"
			values={{ client: <ClientSideLink to={ClientOnlyPath} /> }}>
			{'This class can only be spawned on 🟧 {client} side.'}
		</Translate>
	),
	server: (
		<Translate
			id="api.class_authority.server.label"
			values={{ server: <ServerSideLink to={ServerOnlyPath} /> }}>
			{'This class can only be spawned on 🟦 {server} side.'}
		</Translate>
	),
	both: (
		<Translate
			id="api.class_authority.both.label"
			values={{
				client: <ClientSideLink to={BothSidesPath} />,
				server: <ServerSideLink to={BothSidesPath} />,
			}}>
			{'This class can be spawned on both 🟧 {client} and 🟦 {server} side.'}
		</Translate>
	),
}

// Authority Label Map for Static Classes
export const AuthorityLabelsStatic = {
	client: (
		<Translate
			id="api.static_class_authority.client.label"
			values={{ client: <ClientSideLink to={ClientOnlyPath} /> }}>
			{'This static class can be accessed only on 🟧 {client} side.'}
		</Translate>
	),
	server: (
		<Translate
			id="api.static_class_authority.server.label"
			values={{ server: <ServerSideLink to={ServerOnlyPath} /> }}>
			{'This static class can be accessed only on 🟦 {server} side.'}
		</Translate>
	),
	both: (
		<Translate
			id="api.static_class_authority.both.label"
			values={{
				client: <ClientSideLink to={BothSidesPath} />,
				server: <ServerSideLink to={BothSidesPath} />,
			}}>
			{'This static class can be accessed on both 🟧 {client} and 🟦 {server} side.'}
		</Translate>
	),
}

// Gets a Parameter name (with ? when optional)
export function GetParameterName(parameter_data) {
	return `${parameter_data.name}${parameter_data.default != null ? "?" : ""}${parameter_data.type.endsWith("...") ? "..." : ""}`;
}

// Gets a Parameter description
export function GetParameterDescription(parameter_data, show_inline_keys = true) {
	return <>
		<span style={{ wordBreak: "break-word" }} dangerouslySetInnerHTML={{ __html: parameter_data.description ? parameter_data.description : GetNoDescriptionHTML() }}></span>
		<> </>
		{ parameter_data.type == "function" && parameter_data.function_parameters ? <InlineFunctionNameDeclaration function_parameters={parameter_data.function_parameters} /> : "" }
		<> </>
		{ parameter_data.type == "table" ? <>
			{ parameter_data.table_properties && show_inline_keys ? <InlineTablePropertiesDeclaration table_properties={parameter_data.table_properties} /> : null }
			{ parameter_data.table_properties_custom ? <InlineTablePropertiesDeclaration table_properties_custom={parameter_data.table_properties_custom} /> : null }
		</> : "" }
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
		const return_name = function_data.return[0].name || "ret";
		if (function_data.return[0].type && function_data.return[0].type.endsWith("..."))
			return `local ${return_name}_01, ${return_name}_02, ... = `;
		return `local ${return_name} = `;
	}
	return `local ${function_data.return.map((value, i) => value.name || `ret_${i + 1}`).join(", ")} = `;
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
	return `${GetReturnPart(function_data)}${GetExampleClassName(class_name)}.${function_data.name}(${GetParametersList(function_data.parameters)})`;
}

// Generates Event Signature Codeblock
export function GetEventSignature(class_name, event_data, content) {
	return `${GetExampleClassName(class_name)}.Subscribe("${event_data.name}", function(${GetParametersList(event_data.arguments)})\n${ content ? content : `\t-- ${event_data.name} was called` }${ event_data.return ? `\n\treturn ${ (event_data.return[0].type == "boolean") ? "true" : (event_data.return[0].type == "number" ? "1.0" : "") }` : "" }\nend)`;
}

// Network Authority Distribution Admonition
export const NetAuthorityDistributionAdmonition = ({ network_distribution }) => (
	<Admonition type="info" icon="🔁" title={ GetNetworkDistributionTitle() }>{ NetworkAuthorityDistributionLabels[network_distribution] }</Admonition>
);
// Authority Admonition
export const AuthorityAdmonition = ({ authority, is_static }) => (
	<Admonition type="info" icon="💂" title={ GetAuthorityTitle() }>{ is_static ? AuthorityLabelsStatic[authority] : AuthorityLabels[authority] }</Admonition>
);

export const TypeToAPIFolder = { StandardLibrary: "StandardLibraries/", Struct: "Structs/", Class: "Classes/", StaticClass: "StaticClasses/", UtilityClass: "UtilityClasses/", UtilityClasses: "UtilityClass/", Enums: "" };

// API Source URL
export const APISourceAdmonition = ({ type, class_name }) => (
	<Admonition type="note" icon="🧑‍💻" title={ GetAPISourceTitle() }>
		{ APISourceLabel(type, class_name) }
	</Admonition>
);

// Open Source Admonition
export const OpenSourceAdmonition = ({ url }) => (
	<Admonition type="tip" icon="👐" title={ GetOpenSourceTitle() }>
		{ OpenSourceLabel(url) }
	</Admonition>
);

// Comma separated list of class links, wrapped in a fragment so <Translate> values keep it as an element
const ClassList = ({ classes }) => <>{ classes.map((class_name, index) => GetElementByType(class_name, index)).reduce((prev, next) => [prev, ", ", next]) }</>;

// Inheritance Admonition
export const InheritanceAdmonition = ({ inheritance }) => (
	<Admonition type="info" icon="👪" title={ translate({ id: 'api.inheritance.title', message: 'Inheritance' }) }>
		<Translate
			id="api.inheritance.description"
			values={{ classes: <ClassList classes={ inheritance } /> }}>
			{'This class shares methods and events from {classes}.'}
		</Translate>
	</Admonition>
);

// Base Class Admonition
export const BaseClassAdmonition = ({ inherited }) => (
	<Admonition type="info" icon="👪" title={ GetBaseClassTitle() }>
		{ BaseClassLabel }
		<br />
		<br />
		<Translate
			id="api.base_class.children"
			values={{ classes: <ClassList classes={ inherited } /> }}>
			{'Classes that share methods and events from this Base Class: {classes}.'}
		</Translate>
	</Admonition>
);

// Static Class Admonition
export const StaticClassAdmonition = () => (
	<Admonition type="info" icon="🗿" title={ GetStaticClassTitle() }>
		{ StaticClassLabel }
	</Admonition>
);


// Shared label sources
export const StaticClassLabel = (
	<Translate
		id="api.static_class.description"
		values={{
			static_class: <b><Translate id="api.static_class.title">Static Class</Translate></b>,
			dot: <code>.</code>,
		}}>
		{'This is a {static_class}. Access it\'s methods directly with {dot}. It\'s not possible to spawn new instances.'}
	</Translate>
);
export const BaseClassLabel = (
	<Translate
		id="api.base_class.description"
		values={{ base_class: <b><Translate id="api.base_class.title">Base Class</Translate></b> }}>
		{'This is a {base_class}, an abstract definition that shares common methods and events with it\'s child classes. You cannot spawn it, and you cannot call anything on the Base Class name itself. Use any class that inherits it.'}
	</Translate>
);
export const GetOpenSourceURL = (url) => `https://github.com/nanos-world/nanos-world-lua-lib${url ? `/blob/master/${url}` : ""}`;
export const GetAPISourceURL = (type, class_name) => `https://github.com/nanos-world/api/blob/main/${TypeToAPIFolder[type]}${class_name}.json`;
export const APISourceLabel = (type, class_name) => (
	<Translate
		id="api.api_source.description"
		values={{
			repository: (
				<a href={GetAPISourceURL(type, class_name)}>
					<Translate id="api.api_source.repository">GitHub's API Repository</Translate>
				</a>
			),
		}}>
		{'This page is auto-generated! The Functions, Properties and Events described here are defined in our {repository}! Feel free to commit suggestions and changes to the source .json API files!'}
	</Translate>
);
export const OpenSourceLabel = (url) => (
	<Translate
		id="api.open_source.description"
		values={{ github: <a href={GetOpenSourceURL(url)}>GitHub</a> }}>
		{'This library implementation is Open Sourced on {github}!'}
	</Translate>
);

// Titles shared by the admonitions and the header chips
const GetStaticClassTitle = () => translate({ id: 'api.static_class.title', message: 'Static Class' });
const GetBaseClassTitle = () => translate({ id: 'api.base_class.title', message: 'Base Class' });
const GetAuthorityTitle = () => translate({ id: 'api.authority.title', message: 'Authority' });
const GetNetworkDistributionTitle = () => translate({ id: 'api.network_distribution.title', message: 'Network Authority Distribution' });
const GetOpenSourceTitle = () => translate({ id: 'api.open_source.title', message: 'Open Source' });
const GetAPISourceTitle = () => translate({ id: 'api.api_source.title', message: 'API Source' });
const GetClassTypeSubtitle = () => translate({ id: 'api.chip.class_type', message: 'Class Type' });

// Chip labels
export const GetAuthorityChipLabels = () => ({
	client: translate({ id: 'api.authority.client_only.title', message: 'Client Only' }),
	server: translate({ id: 'api.authority.server_only.title', message: 'Server Only' }),
	both: translate({ id: 'api.chip.client_and_server', message: 'Client & Server' }),
});
export const GetNetworkAuthorityDistributionChipLabels = () => ({
	enabled: translate({ id: 'api.chip.auto_distributed', message: 'Auto-Distributed' }),
	disabled: translate({ id: 'api.chip.manual_distribution', message: 'Manual Distribution' }),
	none: translate({ id: 'api.chip.not_distributable', message: 'Not Distributable' }),
});

// Generic Header Chip
export const HeaderChip = ({ icon, label, title, subtitle, href, children }) => {
	const content = <><span className={"header-chip-icon"}>{ icon }</span>{ label }</>;
	return (
		<Tippy maxWidth={400} animation={"scale-subtle"} placement={"bottom"} interactive={true}
			content={<HeaderChipToolTip icon={icon} title={title} subtitle={subtitle}>{ children }</HeaderChipToolTip>}>
			{ href
				? <a className={"header-chip"} href={href}>{ content }</a>
				: <span className={"header-chip"} tabIndex={0}>{ content }</span> }
		</Tippy>
	);
};

// Static Class Chip
export const StaticClassChip = () => (
	<HeaderChip icon="🗿" label={ GetStaticClassTitle() } title={ GetStaticClassTitle() } subtitle={ GetClassTypeSubtitle() }>
		{ StaticClassLabel }
	</HeaderChip>
);

// Base Class Chip
export const BaseClassChip = () => (
	<HeaderChip icon="👪" label={ GetBaseClassTitle() } title={ GetBaseClassTitle() } subtitle={ GetClassTypeSubtitle() }>
		{ BaseClassLabel }
	</HeaderChip>
);

// Authority Chip
export const AuthorityChip = ({ authority, is_static }) => {
	const label = GetAuthorityChipLabels()[authority];
	return <HeaderChip icon={<img src={GetAuthorityImage(authority)} />} label={ label } title={ label } subtitle={ GetAuthorityTitle() }>
		{ is_static ? AuthorityLabelsStatic[authority] : AuthorityLabels[authority] }
	</HeaderChip>;
};

// Network Authority Distribution Chip
export const NetAuthorityDistributionChip = ({ network_distribution }) => {
	const label = GetNetworkAuthorityDistributionChipLabels()[network_distribution];
	return <HeaderChip icon="🔁" label={ label } title={ label } subtitle={ GetNetworkDistributionTitle() }>
		{ NetworkAuthorityDistributionLabels[network_distribution] }
	</HeaderChip>;
};

// Open Source Chip
export const OpenSourceChip = ({ url }) => {
	const subtitle = translate({ id: 'api.chip.lua_library', message: 'Lua Library' });
	return <HeaderChip icon="👐" label={ GetOpenSourceTitle() } title={ GetOpenSourceTitle() } subtitle={ subtitle } href={ GetOpenSourceURL(url) }>
		{ OpenSourceLabel(url) }
	</HeaderChip>;
};

// API Source Chip
export const APISourceURL = ({ type, class_name }) => {
	const subtitle = translate({ id: 'api.chip.auto_generated_page', message: 'Auto-generated Page' });
	return <HeaderChip icon="🧑‍💻" label={ GetAPISourceTitle() } title={ GetAPISourceTitle() } subtitle={ subtitle } href={ GetAPISourceURL(type, class_name) }>
		{ APISourceLabel(type, class_name) }
	</HeaderChip>;
};

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
	if (authority == "both-net-authority-first")
		return <AuthorityType.BothNetAuthorityFirst />;
	if (authority == "both")
		return <AuthorityType.Both />;
	return "";
};

// Gets Authority Image Source by string
export function GetAuthorityImage(authority) {
	if (authority == "server")
		return "/img/scripting/server-only.svg";
	if (authority == "client")
		return "/img/scripting/client-only.svg";
	if (authority == "authority")
		return "/img/scripting/authority-only.svg";
	if (authority == "network-authority")
		return "/img/scripting/network-authority.svg";
	if (authority == "both-net-authority-first")
		return "/img/scripting/both-net-auth-first.svg";
	if (authority == "both")
		return "/img/scripting/both.svg";
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

// Gets Efficiency Element
export function GetEfficiency(efficiency) {
	if (efficiency === "fast")
		return <EfficiencyType.Fast />;
	if (efficiency === "moderate")
		return <EfficiencyType.Moderate />;
	if (efficiency === "slow")
		return <EfficiencyType.Slow />;
	if (efficiency === "blocking")
		return <EfficiencyType.Blocking />;
	return null;
};

export function GetRelations(relations) {
	const functions = relations.functions ? Object.entries(relations.functions).map(([index, value]) => {
			return <Link key={ `${value.name}-${index}` } to={`#function-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const static_functions = relations.static_functions ? Object.entries(relations.static_functions).map(([index, value]) => {
			return <Link key={ `${value.name}-${index}` } to={`#static-function-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const events = relations.events ? Object.entries(relations.events).map(([index, value]) => {
			return <Link key={ `${value.name}-${index}` } to={`#event-${value.toLowerCase()}`}>{value}</Link>;
		}) : [];
	const etc = relations.etc ? Object.entries(relations.etc).map(([index, value]) => {
			return <Link key={ `${value.name}-${index}` } to={`${value.url}`}>{value.label}</Link>;
		}) : [];
	return [...functions, ...static_functions, ...events, ...etc].reduce((prev, next) => [prev, ", ", next]);
};

// Function Parameters Declaration
export const FunctionParametersDeclaration = ({ parameters, include_default = true }) => (
	<>
		{Array.isArray(parameters) && parameters.length > 0 ?
			<div className="table-wrapper">
				<h4><Translate id="api.parameters">Parameters</Translate></h4>
				<table>
					<thead>
						<tr>
							<th><Translate id="api.table.type">Type</Translate></th>
							<th><Translate id="api.table.parameter">Parameter</Translate></th>
							{ include_default ? <th><Translate id="api.table.default">Default</Translate></th> : null }
							<th><Translate id="api.table.description">Description</Translate></th>
						</tr>
					</thead>
					<tbody>
						{parameters.map(function(value, index) {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ SplitTypesByOr(value.type) }</td>
								<td><code>{ GetParameterName(value) }</code></td>
								{ include_default ?
									<td style={{ whiteSpace: "pre" }}>
										{ value.default != null ? value.default.split("\n").map((line) =>
											<><code>{line}</code><br/></>) :
											<span class="subtle-description"> <Translate id="api.required_parameter">Required parameter</Translate> </span>
										}
									</td> :
									null
								}
								<td class="table-description">{ GetParameterDescription(value) }</td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		: <></>}
	</>
);

// Function Returns Declaration
export const FunctionReturnsDeclaration = ({ returns }) => (
	<>
		{Array.isArray(returns) && returns.length > 0 ?
			<div className="table-wrapper">
				<h4><Translate id="api.returns">Returns</Translate></h4>
				<table>
					<thead>
						<tr>
							<th><Translate id="api.table.type">Type</Translate></th>
							<th><Translate id="api.table.description">Description</Translate></th>
						</tr>
					</thead>
					<tbody>
						{returns.map(function(value, index) {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ SplitTypesByOr(value.type) }</td>
								<td class="table-description">{ GetReturnDescription(value) }</td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		: <></>}
	</>
);

function GetDeclarationDescription(data, lean) {
	if (lean)
		return data.description;

	return [data.description, data.description_details].filter(Boolean).join("<br/><br/>");
}

// Heading of a member card: authority and nativity icons before the name, efficiency pushed to the right, each keeping its explanation tooltip
const MemberHeading = ({ id, data }) => (
	<Heading as="h3" id={id} className="custom-anchor api-member-heading">
		{ GetAuthorityType(data.authority) }
		{ GetNative(data.is_native) }
		<code>{ data.name }</code>
		{ data.efficiency ? <span className="api-member-efficiency">{ GetEfficiency(data.efficiency) }</span> : null }
	</Heading>
);

// Whether a parameter or return value is a table whose keys get their own list
const HasTableKeys = (value) => Array.isArray(value.table_properties) && value.table_properties.length > 0;

// Row right under a table parameter or return value listing its keys in the Description column, so it reads as part of that value
const MemberTableKeysRow = ({ value, columns }) => (
	<tr className="api-values-keys-row">
		{ Array.from({ length: columns - 1 }, (_, index) => <td key={ index }></td>) }
		<td>
			<MemberParametersList
				parameters={ value.table_properties }
				show_inline_keys
				title={ <Translate id="api.table_keys">Table keys</Translate> }
			/>
		</td>
	</tr>
);

// Compact list of a member's parameters (or event arguments), under its own section label, with the keys of each table parameter right under it
// A keys list itself passes show_inline_keys, so a table nested inside a key stays in the hover tooltip
const MemberParametersList = ({ parameters, title, show_inline_keys = false }) => {
	const parameter_list = Array.isArray(parameters) ? parameters : [];

	if (parameter_list.length == 0)
		return null;

	return <div className={ show_inline_keys ? "table-wrapper api-values api-values-keys" : "table-wrapper api-values" }>
		<h5 className="api-values-title">{ title }</h5>
		<table>
			<thead>
				<tr>
					<th><Translate id="api.table.name">Name</Translate></th>
					<th><Translate id="api.table.type">Type</Translate></th>
					<th><Translate id="api.table.description">Description</Translate></th>
				</tr>
			</thead>
			<tbody>
				{ parameter_list.map((value, index) =>
					<React.Fragment key={ `${value.name}-${index}` }>
						<tr>
							<td><code>{ GetParameterName(value) }</code></td>
							<td>{ SplitTypesByOr(value.type) }</td>
							<td class="table-description">
								{ GetParameterDescription(value, show_inline_keys) }
								{ value.default != null ? <span className="api-default"><span className="api-default-label"><Translate id="api.table.default">Default</Translate></span> <code>{ value.default }</code></span> : null }
							</td>
						</tr>
						{ !show_inline_keys && HasTableKeys(value) ? <MemberTableKeysRow value={ value } columns={ 3 } /> : null }
					</React.Fragment>
				) }
			</tbody>
		</table>
	</div>;
};

// Compact list of a member's return values, as a section of its own after the parameters
const MemberReturnsList = ({ returns }) => {
	const return_list = Array.isArray(returns) ? returns : [];

	if (return_list.length == 0)
		return null;

	return <div className="table-wrapper api-values">
		<h5 className="api-values-title"><Translate id="api.returns">Returns</Translate></h5>
		<table>
			<thead>
				<tr>
					<th><Translate id="api.table.type">Type</Translate></th>
					<th><Translate id="api.table.description">Description</Translate></th>
				</tr>
			</thead>
			<tbody>
				{ return_list.map((value, index) =>
					<React.Fragment key={ `return-${index}` }>
						<tr>
							<td>{ SplitTypesByOr(value.type) }</td>
							<td class="table-description">
								{ value.description && !value.table_properties && !value.table_properties_custom && !value.function_parameters ?
									<span dangerouslySetInnerHTML={{ __html: value.description }}></span>
									: GetReturnDescription(value, false) }
							</td>
						</tr>
						{ HasTableKeys(value) ? <MemberTableKeysRow value={ value } columns={ 2 } /> : null }
					</React.Fragment>
				) }
			</tbody>
		</table>
	</div>;
};

// Summary of the collapsible examples block of a member
const GetExamplesSummary = (count) => translate({ id: 'api.examples_summary', message: 'Examples ({count})' }, { count });

// "See also" line listing the related members
const RelationsSeeAlso = ({ relations }) => (
	<p className={"relations"}>
		<Translate id="api.see_also" values={{ relations: <>{ GetRelations(relations) }</> }}>
			{'See also {relations}.'}
		</Translate>
	</p>
);

// Function Block Declaration
export const FunctionDeclaration = ({ function_data, is_static, class_name, show_lean_declaration = false }) => {
	const id = `${is_static ? "static-function" : "function"}-${function_data.name.toLowerCase()}`;
	const has_examples = Array.isArray(function_data.examples) && function_data.examples.length > 0;
	return <div className={ show_lean_declaration ? "api-member-lean" : "api-member" }>
		<MemberHeading id={ id } data={ function_data } />
		<p className="api-member-description" dangerouslySetInnerHTML={{ __html: GetDeclarationDescription(function_data, show_lean_declaration) || GetNoDescriptionHTML() }}></p>
		{ !show_lean_declaration && function_data.last_compatibility_version && (
			<Admonition type="info" icon="🆕" title={ translate({ id: 'api.updated_function.title', message: 'Updated Function' }) }>
				<Translate
					id="api.updated_function.description"
					values={{
						version: <b>{ function_data.last_compatibility_version }</b>,
						compatibility_versions: (
							<Link to={`${getActiveVersionPath()}/core-concepts/packages/compatibility-versions#version-${ function_data.last_compatibility_version.replaceAll('.', '') }`}>
								<Translate id="api.updated_function.compatibility_versions">Compatibility Versions</Translate>
							</Link>
						),
					}}>
					{'This method was recently updated in ver. {version}. See the {compatibility_versions} page for more information.'}
				</Translate>
			</Admonition>
		)}
		<CodeBlock className="language-lua">
			{ is_static ? GetStaticFunctionSignature(class_name, function_data) : GetFunctionSignature(class_name, function_data) }
		</CodeBlock>
		{ !show_lean_declaration ?
			<>
				<MemberParametersList parameters={ function_data.parameters } title={ translate({ id: 'api.parameters', message: 'Parameters' }) } />
				<MemberReturnsList returns={ function_data.return } />
				{ has_examples ?
					<Details summary={ GetExamplesSummary(function_data.examples.length) }>
						{ function_data.examples.map((example) => GetGenericExample(example)) }
					</Details>
				: null }
				{ function_data.relations ? <RelationsSeeAlso relations={ function_data.relations } /> : null }
			</>
		: null }
	</div>;
};

// Event Block Declaration
export const EventDeclaration = ({ event_data, class_name, show_lean_declaration = false }) => {
	const id = `event-${event_data.name.toLowerCase()}`;
	const has_examples = Array.isArray(event_data.examples) && event_data.examples.length > 0;
	return <div className={ show_lean_declaration ? "api-member-lean" : "api-member" }>
		<MemberHeading id={ id } data={ event_data } />
		<p className="api-member-description" dangerouslySetInnerHTML={{ __html: GetDeclarationDescription(event_data, show_lean_declaration) || GetNoDescriptionHTML() }}></p>
		<CodeBlock className="language-lua">
			{ GetEventSignature(class_name, event_data) }
		</CodeBlock>
		{ !show_lean_declaration ?
			<>
				<MemberParametersList parameters={ event_data.arguments } title={ translate({ id: 'api.arguments', message: 'Arguments' }) } />
				<MemberReturnsList returns={ event_data.return } />
				{ has_examples ?
					<Details summary={ GetExamplesSummary(event_data.examples.length) }>
						{ event_data.examples.map((example) => GetEventExample(class_name, event_data, example)) }
					</Details>
				: null }
				{ event_data.relations ? <RelationsSeeAlso relations={ event_data.relations } /> : null }
			</>
		: null }
	</div>;
};

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
		<span className={"hover-link"}><WithThisFormatLabel /></span>
	</Tippy>
);

export const InlineTablePropertiesDeclaration = ({ table_properties, table_properties_custom }) => (
	<Tippy interactive={true} maxWidth={1200} animation={"scale-subtle"} content={<TablePropertiesToolTip table_properties={table_properties} table_properties_custom={table_properties_custom} />}>
		<span className={"hover-link"}><WithThisFormatLabel /></span>
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

// Key and anchor of the group holding functions without a category, kept in English so links stay the same in every locale
export const UncategorizedKey = "Other";

// Label of that group, shown only when the class has categories
export const GetUncategorizedLabel = () => translate({ id: 'api.category.uncategorized', message: 'Other' });

// Anchor ID of a category heading, unique per function kind
export function GetCategoryAnchor(category, is_static) {
	const slug = (category ?? UncategorizedKey).toLowerCase().trim().replace(/\s+/g, "-");
	return `${is_static ? "static-function" : "function"}-category-${slug}`;
}

// Groups functions by category (uncategorized last), keeping their order inside each group
export function GetFunctionGroups(functions) {
	const groups = new Map();

	for (const function_data of functions ? Object.values(functions) : []) {
		const category = function_data.category || null;

		if (!groups.has(category))
			groups.set(category, []);

		groups.get(category).push(function_data);
	}

	return [...groups.entries()]
		.map(([category, group_functions]) => ({ category, functions: group_functions }))
		.sort((a, b) => a.category == null ? 1 : (b.category == null ? -1 : a.category.localeCompare(b.category)));
}

// Whether any group of GetFunctionGroups has a category, so headings are worth showing
export function HasCategories(groups) {
	return groups.some((group) => group.category != null);
}

// Function List Declaration, grouped by category
const FunctionListTable = ({ class_name, functions_list, base_class, is_static }) => {
	const groups = GetFunctionGroups(functions_list);
	const show_categories = HasCategories(groups);
	const NameDeclaration = is_static ? StaticFunctionNameDeclaration : FunctionNameDeclaration;
	const base_path = base_class ? `${getActiveVersionPath()}/scripting-reference/classes/base-classes/${base_class.toLowerCase()}` : "";

	return <div className="table-wrapper api-values api-member-list">
		<table>
			<tbody>
				{ groups.map((group) => <React.Fragment key={ group.category ?? UncategorizedKey }>
					{ show_categories ?
						<tr className="api-category-row">
							<td colSpan={3}><Link to={`${base_path}#${GetCategoryAnchor(group.category, is_static)}`}>{ group.category ?? GetUncategorizedLabel() }</Link></td>
						</tr>
					: null }
					{ group.functions.map((value, index) =>
						<tr key={ `${value.name}-${index}` }>
							<td width="50px">{ GetAuthorityType(value.authority) }{ GetNative(value.is_native) }</td>
							<td className="api-member-name">
								<NameDeclaration class_name={ class_name } base_class={ base_class } function_data={ value } />
								{ value.return ? <span className="api-member-returns">: { GetReturnList(value.return) }</span> : null }
							</td>
							<td class="table-description" dangerouslySetInnerHTML={{ __html: value.description ? value.description : GetNoDescriptionHTML() }}></td>
						</tr>
					) }
				</React.Fragment>) }
			</tbody>
		</table>
	</div>;
};

// Static Function List Declaration
export const StaticFunctionListDeclaration = ({ class_name, functions_list, base_class }) => (
	<FunctionListTable class_name={ class_name } functions_list={ functions_list } base_class={ base_class } is_static={ true } />
);

// Function List Declaration
export const FunctionListDeclaration = ({ class_name, functions_list, base_class }) => (
	<FunctionListTable class_name={ class_name } functions_list={ functions_list } base_class={ base_class } is_static={ false } />
);

// Detailed Function Blocks, under a heading per category when the class has categories
const FunctionDeclarationGroups = ({ class_name, functions_list, is_static }) => {
	const groups = GetFunctionGroups(functions_list);
	const show_categories = HasCategories(groups);

	const kind_label = is_static
		? translate({ id: 'api.category.static_functions', message: 'static functions' })
		: translate({ id: 'api.category.functions', message: 'functions' });

	return groups.map((group) => <React.Fragment key={ group.category ?? UncategorizedKey }>
		{ show_categories ?
			<Heading as="h3" id={ GetCategoryAnchor(group.category, is_static) } className="custom-anchor api-category-heading">
				{ group.category ?? GetUncategorizedLabel() }
				<span className="api-category-kind">{ kind_label }</span>
			</Heading>
		: null }
		{ group.functions.map((value, index) =>
			<FunctionDeclaration key={ `${value.name}-${index}` } function_data={ value } is_static={ is_static } class_name={ class_name } />
		) }
	</React.Fragment>);
};

// Events List Declaration
export const EventListDeclaration = ({ type, name, inherited_class_name, base_class }) => {
	const class_data = GetClassData(type, name);
	return (
		<div className="table-wrapper api-values api-member-list">
			<table>
				<tbody>
					{Object.entries(class_data.events).map(([index, value]) => {
						return <tr key={ `${value.name}-${index}` }>
							<td width="50px">{ GetAuthorityType(value.authority) }{ GetNative(value.is_native) }</td>
							<td className="api-member-name"><EventNameDeclaration class_name={ inherited_class_name } base_class={ base_class } event_data={ value } /></td>
							<td class="table-description" dangerouslySetInnerHTML={{ __html: value.description ? value.description : GetNoDescriptionHTML() }}></td>
						</tr>;
					})}
				</tbody>
			</table>
		</div>
	);
};

// Note: this is generating the whole docs in runtime, isn't it bad for performance?
export const GetClassData = (type, name) => {
	const activeVersion = useActiveVersion();
	const is_bleeding_edge = activeVersion ? (activeVersion.name == "current") : true;

	const { i18n } = useDocusaurusContext();
	const currentLocale = i18n.currentLocale;

	// Gets or generate API Data
	const api_data = APIData();

	// If the current language doesn't have translations, fallback to english.
	const data_language = api_data[currentLocale] ? api_data[currentLocale] : api_data["en"];
	const data = data_language[is_bleeding_edge ? "BleedingEdge" : "Stable"][type];

	return name ? data[name] : data;
}

// Header Block Declaration
export const HeaderDeclaration = ({ type, name, image, open_source_url }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	const is_static = type === "StaticClass" || type === "UtilityClass";

	return (<>
		<p dangerouslySetInnerHTML={{ __html: class_data.description }}></p>
		{ image ? <p><img src={image} loading={"lazy"} /></p> : "" }
		<div className={"header-chips"}>
			{ class_data.is_base ? <BaseClassChip /> : "" }
			{ is_static ? <StaticClassChip /> : "" }
			{ class_data.authority ? <AuthorityChip authority={class_data.authority} is_static={is_static} /> : "" }
			{ class_data.network_distribution ? <NetAuthorityDistributionChip network_distribution={class_data.network_distribution} /> : "" }
			{ open_source_url ? <OpenSourceChip url={open_source_url} /> : "" }
			<APISourceURL type={type} class_name={ class_data.is_base ? "Base" + name : name} />
		</div>
		{ class_data.inheritance && !class_data.is_base ? <InheritanceAdmonition inheritance={class_data.inheritance} /> : "" }
		{ class_data.is_base ? <BaseClassAdmonition inherited={class_data.inheritance_children} /> : "" }
		<hr />
	</>);
};

// Block of Constructor
export const ConstructorDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load constructor '{name}' ({type}) data.</span>;

	return Object.entries(class_data.constructors).map(([index, constructor]) => {
		const id = `constructor-${constructor.name.toLowerCase().replaceAll(' ', '-')}`;
		return <div key={ id } className="api-member">
			<Heading as="h3" id={id} className="custom-anchor api-member-heading">
				{ constructor.name }
			</Heading>
			<p className="api-member-description">{ constructor.description || <span className="subtle-description">{ GetNoDescriptionLabel() }</span> }</p>
			<CodeBlock className="language-lua">
				{ GetConstructorExample(class_data, index) }
			</CodeBlock>
			{
				constructor.parameters.length == 0 ? <p class="subtle-description"><Translate id="api.empty.constructor_parameters">This constructor doesn't have parameters.</Translate></p> :
				<MemberParametersList parameters={ constructor.parameters } title={ translate({ id: 'api.parameters', message: 'Parameters' }) } />
			}
		</div>;
	});
};

// Base classes in the order their inherited members are listed, closest parent first
const InheritedBaseClasses = ["Pawn", "Vehicle", "Pickable", "Damageable", "Paintable", "Actor", "Entity"];

// Members inherited from one base class, one line of names per category
const InheritedBaseSection = ({ inherited_class_name, parent_class_name, kind }) => {
	const class_data = GetClassData("Class", parent_class_name);

	if (!class_data)
		return <span class="error">Failed to load inherited class '{parent_class_name}' ({inherited_class_name}) data.</span>;

	const is_event = kind == "events";
	const groups = is_event ? [{ category: null, functions: Object.values(class_data.events || {}) }] : GetFunctionGroups(class_data[kind]);
	const total = groups.reduce((sum, group) => sum + group.functions.length, 0);

	if (total == 0)
		return null;

	const show_categories = HasCategories(groups);
	const NameDeclaration = is_event ? EventNameDeclaration : (kind == "static_functions" ? StaticFunctionNameDeclaration : FunctionNameDeclaration);

	const count_label = is_event
		? translate({ id: 'api.inherited.events_count', message: '{count} events' }, { count: total })
		: translate({ id: 'api.inherited.functions_count', message: '{count} functions' }, { count: total });

	const all_label = is_event
		? translate({ id: 'api.inherited.all_events', message: 'All events' })
		: translate({ id: 'api.inherited.all_functions', message: 'All functions' });

	return <div className="api-inherited-base">
		<div className="api-inherited-header">
			<span>
				<Translate
					id="api.inherited.from"
					values={{
						class: (
							<Link to={`${getActiveVersionPath()}/scripting-reference/classes/base-classes/${parent_class_name.toLowerCase()}`}>
								{ parent_class_name }
							</Link>
						),
					}}>
					{'From {class}'}
				</Translate>
			</span>
			<span className="subtle-description">{ count_label }</span>
		</div>
		{ groups.map((group) =>
			<div key={ group.category ?? UncategorizedKey } className="api-inherited-row">
				<span className="api-inherited-category">{ show_categories ? (group.category ?? GetUncategorizedLabel()) : all_label }</span>
				<span className="api-inherited-names">
					{ group.functions.map((value, index) => <React.Fragment key={ `${value.name}-${index}` }>
						{ index > 0 ? ", " : null }
						{ is_event ?
							<NameDeclaration class_name={ inherited_class_name } base_class={ parent_class_name } event_data={ value } />
							: <NameDeclaration class_name={ inherited_class_name } base_class={ parent_class_name } function_data={ value } /> }
					</React.Fragment>) }
				</span>
			</div>
		) }
	</div>;
};

// Members a class inherits from its base classes, shown in one block after its own list
const InheritedMembers = ({ class_data, kind }) => {
	if (!class_data.inheritance || class_data.is_base)
		return null;

	const parents = InheritedBaseClasses.filter((parent) => class_data.inheritance.includes(parent) && (kind != "static_functions" || parent == "Entity"));

	if (parents.length == 0)
		return null;

	const title =
		kind == "events" ? translate({ id: 'api.inherited.events', message: 'Inherited events' }) :
		kind == "static_functions" ? translate({ id: 'api.inherited.static_functions', message: 'Inherited static functions' }) :
		translate({ id: 'api.inherited.functions', message: 'Inherited functions' });

	return <div className="api-inherited">
		<h4>{ title }</h4>
		{ parents.map((parent) => <InheritedBaseSection key={ parent } inherited_class_name={ class_data.name } parent_class_name={ parent } kind={ kind } />) }
	</div>;
};

// Block of Functions
export const FunctionsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	const has_functions = class_data.functions != null && Object.keys(class_data.functions).length > 0;

	return (<>
		{ has_functions ?
			<FunctionListDeclaration class_name={class_data.name} functions_list={class_data.functions} />
			: <p class="subtle-description"><Translate id="api.empty.functions">This class doesn't have own functions.</Translate></p> }
		<InheritedMembers class_data={class_data} kind="functions" />
		{ has_functions ?
			<FunctionDeclarationGroups class_name={class_data.name} functions_list={class_data.functions} is_static={false} />
		: null }
	</>);
};

// Block of Static Functions
export const StaticFunctionsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	const has_functions = class_data.static_functions != null && Object.keys(class_data.static_functions).length > 0;

	return (<>
		{ has_functions ?
			<StaticFunctionListDeclaration class_name={class_data.name} functions_list={class_data.static_functions} />
			: <p class="subtle-description"><Translate id="api.empty.static_functions">This class doesn't have own static functions.</Translate></p> }
		<InheritedMembers class_data={class_data} kind="static_functions" />
		{ has_functions ?
			<FunctionDeclarationGroups class_name={class_data.name} functions_list={class_data.static_functions} is_static={true} />
		: null }
	</>);
};

// Block of Examples
export const ExamplesDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	return <>
		{ class_data.static_functions && Object.entries(class_data.static_functions).map(([index, value]) =>
			value.examples && value.examples.map((example) => GetGenericExample(example, `${ name }.${ value.name }`))
		)}
		{ class_data.functions && Object.entries(class_data.functions).map(([index, value]) =>
			value.examples && value.examples.map((example) => GetGenericExample(example, `${ name }.${ value.name }`))
		)}
		{ class_data.events && Object.entries(class_data.events).map(([index, value]) =>
			value.examples && value.examples.map((example) => GetEventExample(name, value, example, `${ name } "${ value.name }" Event`))
		)}
	</>;
};

// Block of Events
export const EventsDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	const has_events = class_data.events != null && Object.keys(class_data.events).length > 0;

	return (<>
		{ has_events ?
			<EventListDeclaration type={type} name={class_data.name} inherited_class_name={class_data.name} />
			: <p class="subtle-description"><Translate id="api.empty.events">This class doesn't have own events.</Translate></p> }
		<InheritedMembers class_data={class_data} kind="events" />
		{ has_events ?
			Object.entries(class_data.events).map(([index, value]) => <EventDeclaration key={ `${value.name}-${index}` } event_data={value} class_name={class_data.name} />)
		: null }
	</>);
};

// Block of Properties
export const PropertiesDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	return (<>
		{
			class_data.properties == null || class_data.properties.length == 0 ? <p class="subtle-description"><Translate id="api.empty.properties">This class doesn't have properties.</Translate></p> :
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th><Translate id="api.table.type">Type</Translate></th>
							<th><Translate id="api.table.name">Name</Translate></th>
							<th><Translate id="api.table.description">Description</Translate></th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(class_data.properties).map(([index, value]) => {
							return <tr key={ `${value.name}-${index}` }>
								<td>{ GetElementByType(value.type) }</td>
								<td><b><code>{ value.name }</code></b></td>
								<td class="table-description" dangerouslySetInnerHTML={{ __html: value.description ? value.description : GetNoDescriptionHTML() }}></td>
							</tr>;
						})}
					</tbody>
				</table>
			</div>
		}
	</>);
};

// Block of Static Properties
export const StaticPropertiesDeclaration = ({ type, name }) => {
	const class_data = GetClassData(type, name);

	if (!class_data)
		return <span class="error">Failed to load class '{name}' ({type}) data.</span>;

	return (<>
		{
			class_data.static_properties == null || class_data.static_properties.length === 0 ? <p class="subtle-description"><Translate id="api.empty.static_properties">This class doesn't have static properties.</Translate></p> :
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th><Translate id="api.table.value">Value</Translate></th>
							<th><Translate id="api.table.name">Name</Translate></th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(class_data.static_properties).map(([index, property]) => (
							<tr key={`${property.name}-${index}`}>
								<td><code>{property.value}</code></td>
								<td>
									<b>
										<code>{name + "." + property.name}</code>
									</b>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		}
	</>);
};

// Getter for the documentation folder a reference type lives in
const getReferenceFolder = (type) => {
	switch (type) {
		case "StaticClass":
			return "static-classes";
		case "UtilityClass":
			return "utility-libraries";
		case "Struct":
			return "structs";
		default:
			return "classes";
	}
};

// Define Class Method component
export const MethodReference = ({ type, class_name, method_name = null, static_method_name = null, params, show_class_name = false }) => {
	const class_data = GetClassData(type, class_name);

	if (!class_data)
		return <span class="error">Failed to load method {method_name || static_method_name} ({class_name}) data.</span>;

	const is_base = class_data.is_base ? true : false;
	const is_static = type === "StaticClass" || type === "UtilityClass";
	const is_method_static = is_static || static_method_name !== null;
	const use_method_name = method_name || static_method_name;

	const function_data = Object.values(is_method_static ? class_data.static_functions : class_data.functions).find(({ name }) => name === use_method_name);

	if (!function_data)
		return "Failed to load function data.";

	return (
		<Tippy interactive={true} maxWidth={600} animation={"scale-subtle"} placement={"left"} content={
			<FunctionDeclaration class_name={class_name} function_data={function_data} is_static={is_static} show_lean_declaration={true} />
		}>
			<Link to={`${getActiveVersionPath()}/scripting-reference/${getReferenceFolder(type)}/${is_base ? "base-classes/" : ""}${class_name.toLowerCase()}#${is_method_static ? "static-function" : "function"}-${use_method_name.toLowerCase()}`} className={"hover-link"}><code>{show_class_name ? class_name : ""}{is_method_static ? "." : ":"}{use_method_name}({params})</code></Link>
		</Tippy>
	);
};

// Define Class Event component
export const EventReference = ({ type, class_name, event, show_class_name = false }) => {
	const class_data = GetClassData(type, class_name);

	if (!class_data)
		return <span class="error">Failed to load event '{event}' ({class_name}) data.</span>;

	const event_data = Object.values(class_data.events).find(({ name }) => name === event);

	if (!event_data)
		return <span class="error">Failed to load event '{event}' ({class_name}) data.</span>;

	const is_base = class_data.is_base ? true : false;

	return (
		<Tippy interactive={true} maxWidth={600} animation={"scale-subtle"} placement={"left"} content={
			<EventDeclaration class_name={class_name} event_data={event_data} show_lean_declaration={true} />
		}>
			<Link to={`${getActiveVersionPath()}/scripting-reference/${getReferenceFolder(type)}/${is_base ? "base-classes/" : ""}${class_name.toLowerCase()}#event-${event.toLowerCase()}`} className={"hover-link"}><code>{event}{show_class_name ? ` (${class_name})` : ""}</code></Link>
		</Tippy>
	);
};