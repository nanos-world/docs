import React from 'react';
import { Link } from "react-router-dom";
import { translate } from '@docusaurus/Translate';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';

import { AuthorityTooltip, AssetPathToolTip, ClassToolTip, FunctionToolTip, EnumToolTip } from '@site/src/components/Tooltips.jsx';
import { getActiveVersionPath } from '@site/src/components/Utils.jsx';
import { GetClassData, GetAuthorityImage } from '@site/src/components/ClassBuilder';


// Square Card Link
export const CardLink = ({ title, description, href, image_src, is_lean }) => (
	<a className={`card-link ${is_lean ? "card-link-lean" : ""}`} href={href.startsWith("http") ? href : `${getActiveVersionPath()}/${href}`} target="_blank">
		<img src={image_src ? image_src : '/img/docs/nanos-world-background.webp'} loading={"lazy"} />
		<h4>{title}</h4>
		<p>{description}</p>
	</a>
);


// Rectangular Reference Link
export const ReferenceLink = ({ children, href }) => (
	<a className="reference-link" href={href.includes(":") ? href : `${getActiveVersionPath()}/${href}`}>
		{children}
		<span>
			{ href.split('#')[0] }
		</span>
	</a>
);

// Generic Base Native component
export const BaseNative = (img, title, description) => {
	const subtitle = translate({ id: 'api.tooltip.nativity', message: 'Nativity' });

	return <Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AuthorityTooltip img={img} title={title} description={description} subtitle={subtitle} />}>
		<span className="native-type">
			<img src={img} title={title} loading={"lazy"} />
		</span>
	</Tippy>;
};

// Generic Base Efficiency component
export const BaseEfficiency = (img, title, description) => {
	const subtitle = translate({ id: 'api.tooltip.method_efficiency', message: 'Method Efficiency' });

	return <Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AuthorityTooltip img={img} title={title} description={description} subtitle={subtitle} />}>
		<span className="header-chip efficiency-chip">
			<span className="header-chip-icon">
				<img src={img} loading={"lazy"} />
			</span>
			{title}
		</span>
	</Tippy>;
};

// Generic Base Authority component
export const BaseAuthority = (img, title, description, placement = "left") => {
	const subtitle = translate({ id: 'api.tooltip.authority_side', message: 'Authority Side' });

	return <Tippy maxWidth={400} animation={"scale-subtle"} placement={placement} content={<AuthorityTooltip img={img} title={title} description={description} subtitle={subtitle} />}>
		<Link className="authority-availability" to={`${getActiveVersionPath()}/core-concepts/scripting/authority-concepts#methods-and-events-availability`}>
			<img src={img} title={title} loading={"lazy"} />
		</Link>
	</Tippy>;
};

// Generic Base Basic Type component
export const BaseBasicType = (label, description) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={
		<>
			<h3 className={"tooltip-header"}>
				<img src={"/img/scripting/lua.webp"} title={"Lua"} className={"tooltip-img"} loading={"lazy"} />
				<span className={"tooltip-span"}>
					<div>{label}</div>
					<div className={"tooltip-sub"}>{translate({ id: 'api.tooltip.basic_type', message: 'Basic Type' })}</div>
				</span>
			</h3>
			<span dangerouslySetInnerHTML={{ __html: description }}></span>
		</>
	}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/glossary/basic-types#${label.toLowerCase()}`}>
			{label}
		</Link>
	</Tippy>
);

// Generic Struct Type component
export const BaseStruct = (name, emoji, path) => {
	const struct_data = GetClassData("Struct", name);
	const append_title = translate({ id: 'api.tooltip.struct', message: 'Struct' });
	const description = struct_data ? struct_data.description : translate({ id: 'api.tooltip.struct_not_found', message: 'Struct not found. Soon™.' });

	return <Tippy maxWidth={300} animation={"scale-subtle"} placement={"left"} content={<ClassToolTip class_name={name} emoji={emoji} append_title={append_title} description={description} />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/structs/${path ? path : name.toLowerCase()}`} className={"hover-link"}>{name}</Link>
	</Tippy>
};

// Generic Utility Class Type component
export const BaseUtilityClass = (name, path) => {
	const class_data = GetClassData("UtilityClass", name);
	const append_title = translate({ id: 'api.tooltip.utility_class', message: 'Utility Class' });
	const description = class_data ? class_data.description : translate({ id: 'api.tooltip.utility_class_not_found', message: 'Utility Class not found. Soon™.' });

	return <Tippy maxWidth={300} animation={"scale-subtle"} placement={"left"} content={<ClassToolTip class_name={name} emoji={"💡"} append_title={append_title} description={description} />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/utility-libraries/${path ? path : name.toLowerCase()}`} className={"hover-link"}>
			<b>{ name }</b>
		</Link>
	</Tippy>
};

// Generic Class Type component
export const BaseClass = (name, emoji, label = name, path = null, is_base = false) => {
	const class_data = GetClassData("Class", name);
	const append_title = is_base ? translate({ id: 'api.tooltip.base_class', message: 'Base Class' }) : translate({ id: 'api.tooltip.class', message: 'Class' });
	const description = class_data ? class_data.description : translate({ id: 'api.tooltip.class_not_found', message: 'Class not found. Soon™.' });

	return <Tippy interactive={ is_base } maxWidth={400} animation={"scale-subtle"} placement={"left"}
		content={<ClassToolTip class_name={label} emoji={emoji} append_title={append_title} description={description} inheritance_children={ class_data ? class_data.inheritance_children : null } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/classes/${path ? path : label.toLowerCase()}`} className={"hover-link"}>
			<b>{ label }</b>
		</Link>
	</Tippy>
};

// Generic StaticClass Type component
export const BaseStaticClass = (name, emoji, path) => {
	const class_data = GetClassData("StaticClass", name);
	const append_title = translate({ id: 'api.tooltip.static_class', message: 'Static Class' });
	const description = class_data ? class_data.description : translate({ id: 'api.tooltip.static_class_not_found', message: 'Static Class not found. Soon™.' });

	return <Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"}
		content={<ClassToolTip class_name={name} emoji={emoji} append_title={append_title} description={description} />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/static-classes/${path ? path : name.toLowerCase()}`} className={"hover-link"}>
			<b>{ name }</b>
		</Link>
	</Tippy>
};

// Define Enum component
export const Enums = ({ children, short }) => {
	const enum_data = GetClassData("Enums", children);

	return <Tippy interactive={true} maxWidth={600} animation={"scale-subtle"} placement={"left"} content={<EnumToolTip enum_name={ children } enum_data={ enum_data } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/glossary/enums#${children.toLowerCase()}`} className={"hover-link"}>
			{short ? children.replace(/([A-Z])/g, ' $1').trim().split(' ').map(e => (
				<span style={{ wordBreak: 'normal', display: 'inline-block', textDecoration: 'inherit' }}>{e}</span>
			)) : children}
		</Link>
	</Tippy>
};

// Define Asset Path component
export const BaseAssetPath = (type, label, description) => {
	const subtitle = translate({ id: 'api.tooltip.asset_path_reference', message: 'Asset Path Reference (string)' });

	return <Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle={subtitle} />}>
		<Link to={`${getActiveVersionPath()}/core-concepts/assets#referencing-assets-in-scripting`} className={"hover-link"}>{label}</Link>
	</Tippy>;
};

// Subtitle of the tooltips of paths that also accept files and URLs
const GetFilePathSubtitle = () => translate({ id: 'api.tooltip.file_path_reference', message: 'File Path Reference (string)' });

// Define Special Path component
export const SpecialPath = (type, label, description) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle={GetFilePathSubtitle()} />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/glossary/basic-types#specialpath`} className={"hover-link"}>{label}</Link>
	</Tippy>
);

// Define Tippy Generic Link component
export const TippyLink = (type, label, description, url) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle={GetFilePathSubtitle()} />}>
		<Link to={`${getActiveVersionPath()}/${url}`} className={"hover-link"}>{label}</Link>
	</Tippy>
);


// Defines Authority Types components
export const AuthorityType = {
	AuthorityOnly: () => BaseAuthority(
		GetAuthorityImage("authority"),
		translate({ id: 'api.authority.authority_only.title', message: 'Authority Only' }),
		translate({ id: 'api.authority.authority_only.description', message: 'This can be only called on the side it was spawned on!' }),
	),
	ServerOnly: () => BaseAuthority(
		GetAuthorityImage("server"),
		translate({ id: 'api.authority.server_only.title', message: 'Server Only' }),
		translate({ id: 'api.authority.server_only.description', message: 'This can be only called on <strong>Server</strong> side!' }),
	),
	ClientOnly: () => BaseAuthority(
		GetAuthorityImage("client"),
		translate({ id: 'api.authority.client_only.title', message: 'Client Only' }),
		translate({ id: 'api.authority.client_only.description', message: 'This can be only called on <strong>Client</strong> side!' }),
	),
	Both: () => BaseAuthority(
		GetAuthorityImage("both"),
		translate({ id: 'api.authority.both.title', message: 'Both Sides' }),
		translate({ id: 'api.authority.both.description', message: 'This can be called on any side (<strong>Server</strong> or <strong>Client</strong>)!' }),
	),
	BothNetAuthorityFirst: () => BaseAuthority(
		GetAuthorityImage("both-net-authority-first"),
		translate({ id: 'api.authority.both_net_authority_first.title', message: 'Both Sides (Net. Authority First)' }),
		translate({
			id: 'api.authority.both_net_authority_first.description',
			message: 'This can be called on any side (<strong>Server</strong> or <strong>Client</strong>)! But if this event comes from a client action, it will be called on the client side first if the Local Player has <strong>Network Authority</strong>!',
		}),
	),
	NetworkAuthority: () => BaseAuthority(
		GetAuthorityImage("network-authority"),
		translate({ id: 'api.authority.network_authority.title', message: 'Network Authority' }),
		translate({
			id: 'api.authority.network_authority.description',
			message: 'This can be called on <strong>Server</strong> and on <strong>Client\'s</strong> current Network Authority of this entity!<br/><br/><strong>TIP</strong>: You can validate if the current Local Player has Network Authority on this entity by calling <code>entity:HasNetworkAuthority()</code>.',
		}),
	),
};

// Defines ClassAuthority Types components
export const ClassAuthorityType = {
	ServerOnly: () => BaseAuthority(
		GetAuthorityImage("server"),
		translate({ id: 'api.authority.server_only.title', message: 'Server Only' }),
		translate({ id: 'api.class_authority.server_only.description', message: 'This class can be only spawned on <strong>Server</strong> side!' }),
		"top",
	),
	ClientOnly: () => BaseAuthority(
		GetAuthorityImage("client"),
		translate({ id: 'api.authority.client_only.title', message: 'Client Only' }),
		translate({ id: 'api.class_authority.client_only.description', message: 'This class can be only spawned on <strong>Client</strong> side!' }),
		"top",
	),
	Both: () => BaseAuthority(
		GetAuthorityImage("both"),
		translate({ id: 'api.authority.both.title', message: 'Both Sides' }),
		translate({
			id: 'api.class_authority.both.description',
			message: 'This class can be spawned on any side (<strong>Server</strong> or <strong>Client</strong>, if you spawn it on client, it won\'t be synchronized with other players)!',
		}),
		"top",
	),
};

// Defines Native Types components
export const NativeType = {
	Native: () => BaseNative(
		"/img/scripting/native.svg",
		translate({ id: 'api.native.native.title', message: 'Native Function' }),
		translate({ id: 'api.native.native.description', message: 'This is a native and built-in function from Lua.' }),
	),
	NotNative: () => BaseNative(
		"/img/scripting/not-native.svg",
		translate({ id: 'api.native.custom.title', message: 'Custom Function' }),
		translate({ id: 'api.native.custom.description', message: 'This is a custom function added to the native lua library!' }),
	),
};

// Defines Efficiency Types components
export const EfficiencyType = {
	Fast: () => BaseEfficiency(
		"/img/scripting/efficiency-fast.png",
		translate({ id: 'api.efficiency.fast.title', message: 'Optimal' }),
		translate({ id: 'api.efficiency.fast.description', message: 'Low-overhead method. Safe to call frequently without measurable impact on performance.' }),
	),
	Moderate: () => BaseEfficiency(
		"/img/scripting/efficiency-moderate.png",
		translate({ id: 'api.efficiency.moderate.title', message: 'Moderate' }),
		translate({ id: 'api.efficiency.moderate.description', message: 'Method with average execution time.' }),
	),
	Slow: () => BaseEfficiency(
		"/img/scripting/efficiency-slow.png",
		translate({ id: 'api.efficiency.slow.title', message: 'Slow' }),
		translate({ id: 'api.efficiency.slow.description', message: 'Method with significant resource and performance cost. Recommend caching results and not calling frequently.' }),
	),
	Blocking: () => BaseEfficiency(
		"/img/scripting/efficiency-block.png",
		translate({ id: 'api.efficiency.blocking.title', message: 'Blocking' }),
		translate({
			id: 'api.efficiency.blocking.description',
			message: 'Method with a blocking operation. This may freeze the game thread for a long period. Recommend only calling it on initialization or in extreme cases.',
		}),
	),
};

// Defines Basic Types components, the type names are Lua keywords so only the descriptions are translated
export const BasicType = {
	Number: () => BaseBasicType("number",
		translate({ id: 'api.basic_type.number', message: 'The number type represents real (double-precision floating-point) numbers.' })),
	Integer: () => BaseBasicType("integer",
		translate({ id: 'api.basic_type.integer', message: 'Whole numbers without any fractional parts.' })),
	Float: () => BaseBasicType("float",
		translate({ id: 'api.basic_type.float', message: 'Floating-point type with decimal points.' })),
	String: () => BaseBasicType("string",
		translate({ id: 'api.basic_type.string', message: 'Strings have the usual meaning: a sequence of characters.' })),
	Boolean: () => BaseBasicType("boolean",
		translate({ id: 'api.basic_type.boolean', message: 'The boolean type has two values, false and true, which represent the traditional boolean values.' })),
	Table: () => BaseBasicType("table",
		translate({ id: 'api.basic_type.table', message: 'The table type implements associative arrays.' })),
	Iterator: () => BaseBasicType("iterator",
		translate({ id: 'api.basic_type.iterator', message: 'Iterator allows you to traverse elements of a table with <code>for k, v in ipairs()</code>.' })),
	Any: () => BaseBasicType("any",
		translate({ id: 'api.basic_type.any', message: 'We use any here in the Docs to represent that any Type can be used.' })),
	Function: () => BaseBasicType("function",
		translate({ id: 'api.basic_type.function', message: 'Function type.' })),
	Nil: () => BaseBasicType("nil",
		translate({ id: 'api.basic_type.nil', message: 'Nil is a type with a single value, nil, whose main property is to be different from any other value.' })),
	VarArgs: () => BaseBasicType("varargs",
		translate({ id: 'api.basic_type.varargs', message: 'Variadic list of values.' })),
};

// Defines Struct Types components
export const Structs = {
	Vector: () => BaseStruct("Vector", "📐"),
	Rotator: () => BaseStruct("Rotator", "🧭"),
	Color: () => BaseStruct("Color", "🎨"),
	Quat: () => BaseStruct("Quat", "🔢"),
	Vector2D: () => BaseStruct("Vector2D", "📏"),
	Matrix: () => BaseStruct("Matrix", "🧮"),
};

// Defines Struct Types components
export const UtilityClasses = {
	JSON: () => BaseUtilityClass("JSON"),
	TOML: () => BaseUtilityClass("TOML"),
	NanosMath: () => BaseUtilityClass("NanosMath"),
	NanosTable: () => BaseUtilityClass("NanosTable"),
	NanosUtils: () => BaseUtilityClass("NanosUtils"),
};

// Defines Classes components
export const Classes = {
	Entity: () => BaseClass("Entity", "🧩", "Base Entity", "base-classes/entity", true),
	Actor: () => BaseClass("Actor", "🎭", "Base Actor", "base-classes/actor", true),
	Paintable: () => BaseClass("Paintable", "🎨", "Base Paintable", "base-classes/paintable", true),
	Damageable: () => BaseClass("Damageable", "🩼", "Base Damageable", "base-classes/damageable", true),
	Pickable: () => BaseClass("Pickable", "⚔️", "Base Pickable", "base-classes/pickable", true),
	Vehicle: () => BaseClass("Vehicle", "🛞", "Base Vehicle", "base-classes/vehicle", true),
	Pawn: () => BaseClass("Pawn", "♟️", "Base Pawn", "base-classes/pawn", true),
	Billboard: () => BaseClass("Billboard", "🪧"),
	Blueprint: () => BaseClass("Blueprint", "🔣"),
	Cable: () => BaseClass("Cable", "⛓️"),
	Canvas: () => BaseClass("Canvas", "🖼️"),
	Character: () => BaseClass("Character", "🧑"),
	CharacterSimple: () => BaseClass("CharacterSimple", "🧑‍🦲"),
	Database: () => BaseClass("Database", "💾"),
	Decal: () => BaseClass("Decal", "🖌️"),
	File: () => BaseClass("File", "📁"),
	Gizmo: () => BaseClass("Gizmo", "🧭"),
	Grenade: () => BaseClass("Grenade", "💣"),
	InstancedStaticMesh: () => BaseClass("InstancedStaticMesh", "🏘️"),
	Light: () => BaseClass("Light", "💡"),
	Melee: () => BaseClass("Melee", "🔪"),
	Particle: () => BaseClass("Particle", "✨"),
	Player: () => BaseClass("Player", "👩‍💻"),
	Prop: () => BaseClass("Prop", "📦"),
	SceneCapture: () => BaseClass("SceneCapture", "📽️"),
	Sound: () => BaseClass("Sound", "🔊"),
	StaticMesh: () => BaseClass("StaticMesh", "🏠"),
	Text3D: () => BaseClass("Text3D", "🆒"),
	TextRender: () => BaseClass("TextRender", "🆒"),
	Trigger: () => BaseClass("Trigger", "🪤"),
	VehicleWheeled: () => BaseClass("VehicleWheeled", "🚙"),
	VehicleWater: () => BaseClass("VehicleWater", "🛥️"),
	Weapon: () => BaseClass("Weapon", "🔫"),
	WebUI: () => BaseClass("WebUI", "🖥️"),
	Widget: () => BaseClass("Widget", "🪟"),
	Widget3D: () => BaseClass("Widget3D", "🪟"),
};

// Defines StaticClasses components
export const StaticClasses = {
	Assets: () => BaseStaticClass("Assets", "🍀"),
	Chat: () => BaseStaticClass("Chat", "💬"),
	Client: () => BaseStaticClass("Client", "⌨️"),
	Console: () => BaseStaticClass("Console", "🔤"),
	Debug: () => BaseStaticClass("Debug", "🐛"),
	Discord: () => BaseStaticClass("Discord", "☎️"),
	Events: () => BaseStaticClass("Events", "🚩"),
	HTTP: () => BaseStaticClass("HTTP", "🌐"),
	Input: () => BaseStaticClass("Input", "🕹️"),
	Level: () => BaseStaticClass("Level", "🏝️"),
	Navigation: () => BaseStaticClass("Navigation", "🚢"),
	Package: () => BaseStaticClass("Package", "📦"),
	PostProcess: () => BaseStaticClass("PostProcess", "🖼️"),
	Server: () => BaseStaticClass("Server", "💻"),
	Sky: () => BaseStaticClass("Sky", "🌅"),
	Steam: () => BaseStaticClass("Steam", "🎮"),
	Tebex: () => BaseStaticClass("Tebex", "🪙"),
	Timer: () => BaseStaticClass("Timer", "⏱️"),
	Trace: () => BaseStaticClass("Trace", "🔍"),
	Viewport: () => BaseStaticClass("Viewport", "📺"),
};

// Defines Assets Path
export const AssetPath = {
	StaticMesh: () => BaseAssetPath(
		"StaticMesh",
		translate({ id: 'api.asset_path.static_mesh.title', message: 'StaticMesh Reference' }),
		translate({ id: 'api.asset_path.static_mesh.description', message: 'StaticMesh Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::SM_MyStaticMesh</code>' }),
	),
	SkeletalMesh: () => BaseAssetPath(
		"SkeletalMesh",
		translate({ id: 'api.asset_path.skeletal_mesh.title', message: 'SkeletalMesh Reference' }),
		translate({ id: 'api.asset_path.skeletal_mesh.description', message: 'SkeletalMesh Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::SK_MySkeletalMesh</code>' }),
	),
	Animation: () => BaseAssetPath(
		"Animation",
		translate({ id: 'api.asset_path.animation.title', message: 'Animation Reference' }),
		translate({ id: 'api.asset_path.animation.description', message: 'Animation Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::A_MyAnimation</code>' }),
	),
	Particle: () => BaseAssetPath(
		"Particle",
		translate({ id: 'api.asset_path.particle.title', message: 'Particle Reference' }),
		translate({ id: 'api.asset_path.particle.description', message: 'Particle Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::P_MyParticle</code>' }),
	),
	Material: () => BaseAssetPath(
		"Material",
		translate({ id: 'api.asset_path.material.title', message: 'Material Reference' }),
		translate({ id: 'api.asset_path.material.description', message: 'Material Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::M_MyMaterial</code>' }),
	),
	Map: () => BaseAssetPath(
		"Map",
		translate({ id: 'api.asset_path.map.title', message: 'Map Reference' }),
		translate({ id: 'api.asset_path.map.description', message: 'Map Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::MyMap</code>' }),
	),
	Blueprint: () => BaseAssetPath(
		"Blueprint",
		translate({ id: 'api.asset_path.blueprint.title', message: 'Blueprint Reference' }),
		translate({ id: 'api.asset_path.blueprint.description', message: 'Blueprint Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::BP_MyBlueprint</code>' }),
	),
	Other: () => BaseAssetPath(
		"Other",
		translate({ id: 'api.asset_path.other.title', message: 'Other Asset Reference' }),
		translate({ id: 'api.asset_path.other.description', message: 'Other Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::A_MySomething</code>' }),
	),
	Sound: () => SpecialPath(
		"Sound",
		translate({ id: 'api.asset_path.sound.title', message: 'Sound Reference' }),
		translate({
			id: 'api.asset_path.sound.description',
			message: 'Sound Asset Reference in the format:<br/><code class=\'path-center\'>asset-pack::A_MySound</code><br/>Or as Special Path:<br/><code class=\'path-center\'>package://my-package/Client/sound.ogg</code>',
		}),
	),
	Image: () => SpecialPath(
		"Image",
		translate({ id: 'api.asset_path.image.title', message: 'Image Path' }),
		translate({
			id: 'api.asset_path.image.description',
			message: 'Image Path as Special Path:<br/><code class=\'path-center\'>package://my-package/Client/image.jpg</code><br/>Or Web URL:<br/><code class=\'path-center\'>https://my-website.com/image.jpg</code><br/>Or Base64:<br/><code class=\'path-center\'>data:image/jpeg;base64,iVBORw0KGgoAAA...</code>',
		}),
	),
	Font: () => SpecialPath(
		"Font",
		translate({ id: 'api.asset_path.font.title', message: 'Font TTF Path' }),
		translate({ id: 'api.asset_path.font.description', message: 'TTF Font Path as Special Path:<br/><code class=\'path-center\'>package://my-package/Client/Roboto.ttf</code>' }),
	),
	HTML: () => TippyLink(
		"HTML",
		translate({ id: 'api.asset_path.html.title', message: 'HTML Path' }),
		translate({ id: 'api.asset_path.html.description', message: 'Web URL or HTML File Path:<br/><code class=\'path-center\'>file://UI/index.html</code>' }),
		"scripting-reference/classes/webui#html-path-searchers",
	),
};