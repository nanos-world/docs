import React from 'react';
import { Link } from "react-router-dom";

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';

import { AuthorityTooltip, AssetPathToolTip, ClassToolTip, FunctionToolTip, EnumToolTip } from '@site/src/components/Tooltips.jsx';
import { getActiveVersionPath } from '@site/src/components/Utils.jsx';

import APIData from '@site/src/components/APIData.jsx';


// Square Card Link
export const CardLink = ({ title, description, href, image_src, is_lean }) => (
	<Link className={`card-link ${is_lean ? "card-link-lean" : ""}`} to={href.startsWith("http") ? href : `${getActiveVersionPath()}/${href}`} >
		<img src={image_src ? image_src : '/img/docs/nanos-world-background.webp'} />
		<h4>{title}</h4>
		<p>{description}</p>
	</Link>
);


// Rectangular Reference Link
export const ReferenceLink = ({ children, href }) => (
	<Link className="reference-link" to={href.startsWith("http") ? href : `${getActiveVersionPath()}/${href}`}>
		{children}
		<span>
			{ href.split('#')[0] }
		</span>
	</Link>
);

// Generic Base Native component
export const BaseNative = (img, title, description) => (
	<Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AuthorityTooltip img={img} title={title} description={description} subtitle={"Nativity"} />}>
		<span className="native-type">
			<img src={img} title={title} />
		</span>
	</Tippy>
);

// Generic Base Authority component
export const BaseAuthority = (img, title, description) => (
	<Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AuthorityTooltip img={img} title={title} description={description} subtitle={"Authority Side"} />}>
		<Link className="authority-availability" to={`${getActiveVersionPath()}/core-concepts/scripting/authority-concepts#methods-and-events-availability`}>
			<img src={img} title={title} />
		</Link>
	</Tippy>
);

// Generic Base Basic Type component
export const BaseBasicType = (label, description) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={
		<>
			<h3 className={"tooltip-header"}>
				<img src={"/img/scripting/lua.webp"} title={"Lua"} className={"tooltip-img"} />
				<span className={"tooltip-span"}>
					<div>{label}</div>
					<div className={"tooltip-sub"}>Basic Type</div>
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
export const BaseStruct = (name, emoji, path) => (
	<Tippy maxWidth={300} animation={"scale-subtle"} placement={"left"} content={<ClassToolTip class_name={name} emoji={emoji} append_title="Struct" description={ APIData.BleedingEdge.Struct[name] ? APIData.BleedingEdge.Struct[name].description : "Struct not found. Soon™." } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/structs/${path ? path : name.toLowerCase()}`} className={"hover-link"}>{name}</Link>
	</Tippy>
);

// Generic Utility Class Type component
export const BaseUtilityClass = (name, path) => (
	<Tippy maxWidth={300} animation={"scale-subtle"} placement={"left"} content={<ClassToolTip class_name={name} emoji={"💡"} append_title="Utility Class" description={ APIData.BleedingEdge.UtilityClass[name] ? APIData.BleedingEdge.UtilityClass[name].description : "Utility Class not found. Soon™." } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/utility-libraries/${path ? path : name.toLowerCase()}`} className={"hover-link"}>
			<b>{ name }</b>
		</Link>
	</Tippy>
);

// Generic Class Type component
export const BaseClass = (name, emoji, label = name, path = null, is_base = false) => (
	<Tippy interactive={ is_base } maxWidth={400} animation={"scale-subtle"} placement={"left"}
		content={<ClassToolTip class_name={label} emoji={emoji} append_title= { is_base ? "Base Class" : "Class" } description={ APIData.BleedingEdge.Class[name] ? APIData.BleedingEdge.Class[name].description : "Class not found. Soon™." } inheritance_children={ APIData.BleedingEdge.Class[name] ? APIData.BleedingEdge.Class[name].inheritance_children : nil } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/classes/${path ? path : label.toLowerCase()}`} className={"hover-link"}>
			<b>{ label }</b>
		</Link>
	</Tippy>
);

// Generic StaticClass Type component
export const BaseStaticClass = (name, emoji, path) => (
	<Tippy maxWidth={400} animation={"scale-subtle"} placement={"left"}
		content={<ClassToolTip class_name={name} emoji={emoji} append_title="Static Class" description={ APIData.BleedingEdge.StaticClass[name] ? APIData.BleedingEdge.StaticClass[name].description : "Static Class not found. Soon™." } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/static-classes/${path ? path : name.toLowerCase()}`} className={"hover-link"}>
			<b>{ name }</b>
		</Link>
	</Tippy>
);

// Define Enum component
export const Enums = ({ children, short }) => (
	<Tippy interactive={true} maxWidth={600} animation={"scale-subtle"} placement={"left"} content={<EnumToolTip enum_name={ children } enum_data={ APIData.BleedingEdge.Enums[children] } />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/glossary/enums#${children.toLowerCase()}`} className={"hover-link"}>
			{short ? children.replace(/([A-Z])/g, ' $1').trim() : children}
		</Link>
	</Tippy>
);

// Define Asset Path component
export const BaseAssetPath = (type, label, description) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle="Asset Path Reference (string)" />}>
		<Link to={`${getActiveVersionPath()}/core-concepts/assets#referencing-assets-in-scripting`} className={"hover-link"}>{label}</Link>
	</Tippy>
);

// Define Special Path component
export const SpecialPath = (type, label, description) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle="File Path Reference (string)" />}>
		<Link to={`${getActiveVersionPath()}/scripting-reference/glossary/basic-types#specialpath`} className={"hover-link"}>{label}</Link>
	</Tippy>
);

// Define Tippy Generic Link component
export const TippyLink = (type, label, description, url) => (
	<Tippy interactive={true} maxWidth={400} animation={"scale-subtle"} placement={"left"} content={<AssetPathToolTip label={label} description={description} subtitle="File Path Reference (string)" />}>
		<Link to={`${getActiveVersionPath()}/${url}`} className={"hover-link"}>{label}</Link>
	</Tippy>
);


// Defines Authority Types components
export const AuthorityType = {
	AuthorityOnly: () => BaseAuthority("/img/scripting/authority-only.svg", "Authority Only", "This can be only called on the side it was spawned on!"),
	ServerOnly: () => BaseAuthority("/img/scripting/server-only.svg", "Server Only", "This can be only called on <strong>Server</strong> side!"),
	ClientOnly: () => BaseAuthority("/img/scripting/client-only.svg", "Client Only", "This can be only called on <strong>Client</strong> side!"),
	Both: () => BaseAuthority("/img/scripting/both.svg", "Both Sides", "This can be called on any side (<strong>Server</strong> or <strong>Client</strong>)!"),
	BothNetAuthorityFirst: () => BaseAuthority("/img/scripting/both-net-auth-first.svg", "Both Sides (Net. Authority First)", "This can be called on any side (<strong>Server</strong> or <strong>Client</strong>)! But if this event comes from a client action, it will be called on the client side first if the Local Player has <strong>Network Authority</strong>!"),
	NetworkAuthority: () => BaseAuthority("/img/scripting/network-authority.svg", "Network Authority", "This can be called on <strong>Server</strong> and on <strong>Client's</strong> current Network Authority of this entity!<br/><br/><strong>TIP</strong>: You can validate if the current Local Player has Network Authority on this entity by calling <code>entity:HasNetworkAuthority()</code>."),
};

// Defines Native Types components
export const NativeType = {
	Native: () => BaseNative("/img/scripting/native.svg", "Native Function", "This is a native and built-in function from Lua."),
	NotNative: () => BaseNative("/img/scripting/not-native.svg", "Custom Function", "This is a custom function added to the native lua library!"),
};

// Defines Basic Types components
export const BasicType = {
	Number: () => BaseBasicType("number", "The number type represents real (double-precision floating-point) numbers."),
	Integer: () => BaseBasicType("integer", "Whole numbers without any fractional parts."),
	Float: () => BaseBasicType("float", "Floating-point type with decimal points."),
	String: () => BaseBasicType("string", "Strings have the usual meaning: a sequence of characters."),
	Boolean: () => BaseBasicType("boolean", "The boolean type has two values, false and true, which represent the traditional boolean values."),
	Table: () => BaseBasicType("table", "The table type implements associative arrays."),
	Iterator: () => BaseBasicType("iterator", "Iterator allows you to traverse elements of a table with <code>for k, v in ipairs()</code>."),
	Any: () => BaseBasicType("any", "We use any here in the Docs to represent that any Type can be used."),
	Function: () => BaseBasicType("function", "Function type."),
	Nil: () => BaseBasicType("nil", "Nil is a type with a single value, nil, whose main property is to be different from any other value."),
	VarArgs: () => BaseBasicType("varargs", "Variadic list of values."),
};

// Defines Struct Types components
export const Structs = {
	Vector: () => BaseStruct("Vector", "📐"),
	Rotator: () => BaseStruct("Rotator", "🧭"),
	Color: () => BaseStruct("Color", "🎨"),
	Quat: () => BaseStruct("Quat", "🔢"),
	Vector2D: () => BaseStruct("Vector2D", "📏"),
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
	CharacterSimple: () => BaseClass("CharacterSimple", "🧑‍🦲", "CharacterSimple", "character-simple"),
	Database: () => BaseClass("Database", "💾"),
	Decal: () => BaseClass("Decal", "🖌️"),
	File: () => BaseClass("File", "📁"),
	Gizmo: () => BaseClass("Gizmo", "🧭"),
	Grenade: () => BaseClass("Grenade", "💣"),
	Light: () => BaseClass("Light", "💡"),
	Melee: () => BaseClass("Melee", "🔪"),
	Particle: () => BaseClass("Particle", "✨"),
	Player: () => BaseClass("Player", "👩‍💻"),
	Prop: () => BaseClass("Prop", "📦"),
	SceneCapture: () => BaseClass("SceneCapture", "📽️", "SceneCapture", "scene-capture"),
	Sound: () => BaseClass("Sound", "🔊"),
	StaticMesh: () => BaseClass("StaticMesh", "🏠", "StaticMesh", "static-mesh"),
	TextRender: () => BaseClass("TextRender", "🆒", "TextRender", "text-render"),
	Trigger: () => BaseClass("Trigger", "🪤"),
	VehicleWheeled: () => BaseClass("VehicleWheeled", "🚙", "VehicleWheeled", "vehicle-wheeled"),
	VehicleWater: () => BaseClass("VehicleWater", "🛥️", "VehicleWater", "vehicle-water"),
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
	Timer: () => BaseStaticClass("Timer", "⏱️"),
	Trace: () => BaseStaticClass("Trace", "🔍"),
	Viewport: () => BaseStaticClass("Viewport", "📺"),
};

// Defines Assets Path
export const AssetPath = {
	StaticMesh: () => BaseAssetPath("StaticMesh", "StaticMesh Reference", "StaticMesh Asset Reference in the format:<br/><code class='path-center'>asset-pack::SM_MyStaticMesh</code>"),
	SkeletalMesh: () => BaseAssetPath("SkeletalMesh", "SkeletalMesh Reference", "SkeletalMesh Asset Reference in the format:<br/><code class='path-center'>asset-pack::SK_MySkeletalMesh</code>"),
	Animation: () => BaseAssetPath("Animation", "Animation Reference", "Animation Asset Reference in the format:<br/><code class='path-center'>asset-pack::A_MyAnimation</code>"),
	Particle: () => BaseAssetPath("Particle", "Particle Reference", "Particle Asset Reference in the format:<br/><code class='path-center'>asset-pack::P_MyParticle</code>"),
	Material: () => BaseAssetPath("Material", "Material Reference", "Material Asset Reference in the format:<br/><code class='path-center'>asset-pack::M_MyMaterial</code>"),
	Map: () => BaseAssetPath("Map", "Map Reference", "Map Asset Reference in the format:<br/><code class='path-center'>asset-pack::MyMap</code>"),
	Blueprint: () => BaseAssetPath("Blueprint", "Blueprint Reference", "Blueprint Asset Reference in the format:<br/><code class='path-center'>asset-pack::BP_MyBlueprint</code>"),
	Sound: () => SpecialPath("Sound", "Sound Reference", "Sound Asset Reference in the format:<br/><code class='path-center'>asset-pack::A_MySound</code><br/>Or as Special Path:<br/><code class='path-center'>package://my-package/Client/sound.ogg</code>"),
	Image: () => SpecialPath("Image", "Image Path", "Image Path as Special Path:<br/><code class='path-center'>package://my-package/Client/sound.ogg</code>"),
	Font: () => SpecialPath("Font", "Font TTF Path", "TTF Font Path as Special Path:<br/><code class='path-center'>package://my-package/Client/Roboto.ttf</code>"),
	HTML: () => TippyLink("HTML", "HTML Path", "Web URL or HTML File Path:<br/><code class='path-center'>file://UI/index.html</code>", "scripting-reference/classes/web-ui#html-path-searchers"),
};