import Layout from '@theme/Layout';
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Tippy from '@tippyjs/react';
import { VideoExternal, ImageExternal } from '@site/src/components/Utils';


const Category = ({ title, children, description }) => (
	<>
		<span className={clsx("category-title", styles["category-title"])}>
			<Tippy maxWidth={800} animation={"scale-subtle"} placement={"top"} content={ description }>
				<span>{ title }</span>
			</Tippy>
		</span>
		<div className={clsx("items", styles.items)}>
			{ children }
		</div>
	</>
);

const HorizontalDate = ({ title }) => (
	<>
		<span className={clsx("horizontal-date", styles["horizontal-date"])}>
			{ title }
		</span>
	</>
);

const Label = ({ title, emoji, tooltip = title, color = "#828c9b" }) => (
	<Tippy maxWidth={400} animation={"scale-subtle"} placement={"bottom"} content={ tooltip }>
		<span className={clsx("label", styles.label)} style={{ backgroundColor: `${color}33` }}>
			<span>{ emoji }</span>
			<span className={clsx("label-text", styles["label-text"])}>{ title }</span>
		</span>
	</Tippy>
);

const GetLabels = (labels) => (
	(labels || []).map(function(label, index) {
		switch (label) {
			case "released": return <Label emoji="✅" title="released" tooltip="released feature" color="#00b894" />
			case "community": return <Label emoji="👨‍👨‍👦‍👦" title="community request" tooltip="this request was made by the community" color="#9b59b6" />
			case "gameplay": return <Label emoji="🕹️" title="gameplay" tooltip="gameplay feature" color="#fdcb6e" />
			case "scripting": return <Label emoji="🧑‍💻" title="scripting" tooltip="scripting content" color="#6c5ce7" />
			case "modding": return <Label emoji="🚂" title="modding" tooltip="modding and assets content creation" color="#e17055" />
			case "hosting": return <Label emoji="💾" title="hosting" tooltip="server & hosting" color="#0984e3" />
			case "ui": return <Label emoji="📺" title="ui" tooltip="user interface" color="#e84393" />
			case "ux": return <Label emoji="🧑‍💻" title="ux" tooltip="user experience" color="#e84393" />
			case "integration": return <Label emoji="🖇️" title="integration" tooltip="integration with external services" color="#00cec9" />
			case "optimization": return <Label emoji="🚀" title="optimization" tooltip="optimization feature to improve performance" color="#6ec7fd" />
			default:
				return <Label title={ label } />
		}
	})
)

const Roadmap = () => {
	const [item, setItem] = useState([]);

	const Item = ({ title, image, video, description, labels, external_link, external_link_title }) => (
		<button key={title} className={clsx("item", styles.item)} onClick={function() {
				document.getElementById("popup").classList.add(styles["popup-container-visible"]);
				setItem({ title, image, video, description, labels, external_link, external_link_title });
			}}>
			{ image ? <ImageExternal path={image} /> : null }
			{ video ? <VideoExternal controls={false} path={video} noplay={false} /> : null }
			<div className={clsx("item-content", styles["item-content"])}>
				<span className={clsx("item-title", styles["item-title"])}>{ title }</span>
				<div className={clsx("item-labels", styles["item-labels"])}>
					{ GetLabels(labels) }
				</div>
			</div>
		</button>
	);

	return (
		<>
			<div id="popup" className={clsx("popup-container", styles["popup-container"])}>
				<button className={clsx("popup-background", styles["popup-background"])} onClick={ function() {
					document.getElementById("popup").classList.remove(styles["popup-container-visible"]);
				} }></button>
				<div className={clsx("popup-content", styles["popup-content"])}>
					{ item.image ? <ImageExternal className={clsx("popup-image", styles["popup-image"])} path={item.image} /> : null }
					{ item.video ? <VideoExternal controls={false} path={item.video} noplay={false} className={clsx("popup-image", styles["popup-image"])} /> : null }
					<span className={clsx("popup-image-label", styles["popup-image-label"])}>this { item.video ? "video" : "image" } for illustration purposes only</span>
					<span id="popup-title" className={clsx("popup-title", styles["popup-title"])}>{ item.title }</span>
					<span id="popup-description" className={clsx("popup-description", styles["popup-description"])}>
						{ item.description || <i>No description available</i> }
						{ item.external_link ? <><br/><br/>See the <a href={ item.external_link } target="_blank">{ item.external_link_title }</a> page for more information!</> : null }
					</span>
					<span id="popup-labels" className={clsx("popup-labels", styles["popup-labels"])}>{ GetLabels(item.labels) }</span>
				</div>
				<button className={clsx("popup-close", styles["popup-close"])} onClick={ function() {
					document.getElementById("popup").classList.remove(styles["popup-container-visible"]);
				} }>x</button>
			</div>
			<Layout title="Roadmap" description="nanos world Roadmap">
				<div className={clsx('container', 'margin-vert--lg', styles.header)}>
					<h1>
						🛣️ features & roadmap
					</h1>
					<span>
						This board is constantly growing, stay tuned for updates! This will give a general overview of MAJOR features which are going to be developed in all short, medium and long term. It may change any time due to new business decisions or player suggestions.
						<br/><br/>
						<i style={{ opacity: "0.5", fontSize: "0.8em" }}>
							Note: most of the images and videos shown are for illustration purposes only and may not be an exact representation of the planned feature.
							<br/>
							Also note that the timeline may not be accurate and features could have been developed in a different order.
						</i>
					</span>
				</div>
				<div className={clsx('container', 'margin-vert--lg', styles.container)}>
					<Category title="🎯 planned must-have features" description="non-negotiable features required for the game's release">
						<Item
							title="🏃 Improved Character Gameplay"
							image="/roadmap/gasp.webp"
							description={<>
								Our current character is still based on the old UE4 Mannequin, and it definitely shows its age. The animations are outdated, the native meshes aren't great, and the overall quality doesn't set a good standard. There are also a lot of missing or unfinished mechanics, like proning, and some existing animations just don't feel right. Movement needs a serious rework too as it's not as fluid or satisfying as it should be.
								<br/><br/>
								With the upgrade to Unreal Engine 5.5, we're looking into integrating the new Game Animation Sample Project (GASP) from Unreal. It brings a more modern and polished animation setup that could help us improve overall gameplay feel. We'll be studying how we can make use of it while refining our character's mechanics to ensure everything is smooth, responsive, and up to the level we want.
							</>}
							labels={ ["gameplay"] }
						/>
						<Item
							title="🗺️ Built-in Map"
							video="/roadmap/map.webm"
							description={<>
								We are aiming towards an open-world map that's not just there for show but actually fun to play in. The idea is to create a space that serves as the foundation for multiple game-modes, making it a versatile and also engaging.
								<br/><br/>
								It'll also act as our main testing ground, allowing us to fine-tune all the game's features in a real gameplay setting. Our goal is to make a world that feels dynamic, adaptable, and packed with opportunities for different kinds of experiences.
							</>}
							labels={ ["gameplay"] }
						/>
						<Item
							title="✈️ Airplanes"
							image="/roadmap/airplane.webp"
							description={<>
								We've already got a boat entity in place, and now it's time to take things to the skies with an airplane. This means developing proper aircraft mechanics and making sure they can be fully customizable through scripting.
								<br/><br/>
								Since it's all based on physics simulation, we won't need any external integrations to make it work. The focus will be on designing the entity itself, fine-tuning its mechanics, and exposing the necessary systems so that it can be customized and expanded by the community. Modders will be able to bring in their own custom meshes and assets, making it as flexible and moddable as possible.
							</>}
							labels={ ["gameplay", "modding"] }
						/>
						<Item
							title="🚁 Helicopters"
							image="/roadmap/helicopter.webp"
							description={<>
								As well with the Airplane entity, another important gameplay feature is bringing helicopters into the game. While similar in concept, helicopters come with their own unique mechanics, requiring specialized flight physics and controls. Just like with airplanes, we'll make sure everything is fully scriptable and customizable, allowing modders to create their own helicopter models, tweak flight behavior, and add custom assets.
							</>}
							labels={ ["gameplay", "modding"] }
						/>
						<Item
							title="🌎 Community Ecosystem"
							image="/roadmap/ecosystem.webp"
							description={<>
								We're aiming to create a richer and more integrated ecosystem for nanos world, starting with a revamped account system fully integrated with Steam that will include detailed player profiles, stats tracking, and dedicated webpages to showcase your content and creations, as well as those of other players.
								<br/><br/>
								We're also planning new dedicated pages for sharing content like code snippets, tutorials, and other helpful resources. Our goal is to promote a more collaborative and connected community where players can easily share, learn, and discover new content.
							</>}
							labels={ ["ui", "ux", "integration"] }
						/>
						<Item
							title="🎮 Ready to go Game-Modes"
							image="/roadmap/deathmatch.webp"
							description={<>
								Game-modes are the core of the game. Without them, there's nothing for players to really dive into. That's why we're making sure we have solid, long-term game modes ready before launch. These will be the key to attracting real players and keeping the community engaged.
								<br/><br/>
								Until then, we'll keep working with modders and scripters to create content and expand what's possible. We want to give the community the tools to experiment and help shape the game first.
								<br/><br/>
								Once we have game-modes and content that are polished and fun, we'll start building hype and bringing in streamers and players to showcase the experience. The goal is to launch with exciting and replayable modes that keep players coming back for more.
							</>}
							labels={ ["gameplay"] }
						/>
						<Item
							title="🏪 Better Vault"
							image="/roadmap/vault.webp"
							description={<>
								The Vault is our in-game system for managing and sharing community-created content. We're planning significant improvements to make it easier to use, more reliable, and offer better organization and discovery of assets.
								<br/><br/>
								Although we already have a functional in-game Vault system that allows players to share and download custom content, we recognize its current implementation has limitations, particularly when it comes to backend implementation and integration.
								<br/><br/>
								Our goal with this rework is to significantly improve the Vault's backend services and associated web pages. Making the process of uploading new content, managing versions and details much easier for creators to share their work with the community.
							</>}
							labels={ ["ui", "ux", "integration", "optimization"] }
						/>
					</Category>
					<Category title="👍 planned should-have features" description="important additions that will improve the game but are not critical for launch">
						<Item
							title="🌐 CDN Server Content"
							image="/roadmap/cdn.webp"
							description={<>
								This is a community request to improve the asset distribution. We would allow server creators to specify a CDN (Content Delivery Network) server URL for assets to be downloaded (for Asset Packs not already in the Vault).
								<br/><br/>
								Clients will then automatically use this URL to download asset files, bypassing direct downloads from the game server itself. This would not only reduce server load and improve overall server performance, but also increase download speeds for players (especially those geographically distant from the server).
								<br/><br/>
								This is particularly beneficial for servers hosting large amounts of custom content that don't want them uploaded to Vault.
							</>}
							labels={ ["hosting", "community"] }
						/>
						<Item
							title="🛤️ Spline Entity"
							image="/roadmap/spline.webp"
							description="The Spline entity will give scripters the ability to create and manipulate splines dynamically within the game world. Splines can be used to define paths for AI, create roads and other curved surfaces, and much more."
							labels={ ["scripting", "community"] }
						/>
						<Item
							title="🛠️ Robust Assets Development Kit"
							image="/roadmap/adk.webp"
							description={<>
								Our current ADK solution is a bit limited, it is simply an Unreal Project with the same settings and definitions from our base game that allows you to cook your assets and use them in-game.
								<br/><br/>
								We're planning to improve this system by providing a more robust and user-friendly tool that will allow you to create, cook, copy and even upload your assets directly from the Unreal Editor. This will make the process of creating and sharing custom content much easier and more accessible to everyone.
							</>}
							labels={ ["modding", "ux", "integration"] }
						/>
						<Item
							title="🎭 Parties and Lobbies"
							image="/roadmap/lobbies.webp"
							description={<>
								Parties and Lobbies are all about making it easier to play with friends. The idea is to integrate Steam's SDK to allow players to create lobbies, invite their friends, and join servers together. Instead of everyone having to find and join a server separately, you'll be able to squad up and jump in as a group.
								<br/><br/>
								This feature would improve the social aspect of the game, making multiplayer sessions more fun and accessible. We'll be looking into how best to implement it while ensuring it works smoothly with our existing systems.
							</>}
							labels={ ["ui", "integration"] }
						/>
						<Item
							title="🔊 New Runtime Audio Formats"
							image="/roadmap/audios.webp"
							description="Currently we only support loading .ogg sounds in runtime (not cooked assets), but we're planning to expand this to support more audio formats, such as .wav, .mp3, and more."
							labels={ ["scripting"] }
						/>
						<Item
							title="🚗 Vehicle AI"
							image="/roadmap/vehicle-ai.webp"
							description="Our initial focus for Vehicle AI will be to provide scripters with a simplified yet powerful system to direct vehicle movement. This initial implementation will allow scripters to programmatically give target locations to a vehicle, enabling it to autonomously locomote to specified locations."
							labels={ ["scripting"] }
						/>
						<Item
							title="💥 Breakable Entities with Chaos Destruction"
							video="/roadmap/chaos-destruction.webm"
							description={<>
								We're planning to introduce breakable entities using Unreal Engine's Chaos Destruction system. We already had some experiments with it in the past, but we're looking to expand it further and make it a core feature of the game.
								<br/><br/>
								A challenge we will face is achieving reliable network replication of destruction events in multiplayer. Synchronizing dynamic destruction across all clients is complex and requires careful consideration. We need to ensure that all players experience the same destruction events simultaneously, and also synchronized after players reconnecting to the server.
								<br/><br/>
								Another challenge is to seamlessly incorporate this system with our existing entities, making sure they are cohesive with other existing entities such as Props.
							</>}
							labels={ ["gameplay", "modding"] }
						/>
						<Item
							title="🌊 Drowning System"
							image="/roadmap/drowning.webp"
							description={<>
								Right now, characters can stay underwater forever without any issues, which isn't exactly realistic. We're planning to introduce a drowning system where characters will need to come up for air. If they stay submerged too long, they'll start losing health and eventually die.
								<br/><br/>
								Of course, we want this to be flexible, so scripters will have full control over it—whether to enable or disable it, adjust timers, or even modify how it works. This will add more depth (literally) to water-based gameplay and open up new possibilities for custom game modes.
							</>}
							labels={ ["gameplay", "scripting"] }
						/>
						<Item
							title="📦 Built-in Asset Packs"
							image="/roadmap/props.webp"
							description={<>
								We're planning to have a set of built-in asset packs that will come with the game by default. These packs will include a variety of  Props, Particles, Weapons, Sounds, Vehicles, Materials, Characters and even Animal meshes, and other assets that can be used to create custom content.
								<br/><br/>
								Currently we already have some of these assets in the game, but we're planning to expand, improve and standardize them.
								<br/><br/>
								The idea is to have a small and optimized set of meshes that will serve as a starting point for modders and scripters to start blocking out and creating content before needing to import custom assets.
							</>}
							labels={ ["gameplay", "scripting"] }
						/>
						<Item
							title="🔣 FSR Integration"
							image="/roadmap/fsr.webp"
							description="We're planning to integrate AMD's FidelityFX Super Resolution (FSR) technology into the game, allowing AMD GPU players to use this feature."
							labels={ ["integration", "optimization"] }
						/>
						<Item
							title="❔ More to come..."
							image="/roadmap/question.webp"
							description={<>
								We have much more plans and features to be implemented! We are constantly updating this board and refreshing our roadmap, stay tuned for more updates!
								<br />
								<br />
								Also, if you have ideas or suggestions for new features, feel free to share them with us on our <a href="/feedback" target="_blank">Feedback Hub</a>!
							</>}
							labels={ [] }
						/>
					</Category>
					<Category title="💭 under analysis features" description="desirable features in review and not guaranteed to be worked on">
						<Item
							title="🎭 Metahuman Support"
							image="/roadmap/metahuman.webp"
							description={<>
								Unreal's Metahuman is a tool that lets developers create highly realistic human characters for games and other projects. It's pretty cool because it offers detailed customization options, making characters look and move in a lifelike way.
								<br/><br/>
								We're excited about the idea of integrating Metahuman into nanos world. However, we know that supporting different skeletons can be tricky. Right now, we plan to rework our current character to be compatible with Unreal Engine 5's skeleton and new animations. As we do this, we'll study how we might bring Metahuman into the mix. It's a possibility we're keen on, but we want to make sure it fits well with our existing setup.
							</>}
							labels={ ["modding", "integration", "community"] }
							external_link={"https://www.unrealengine.com/en-US/metahuman"}
							external_link_title={"Unreal Metahuman"}
						/>
						<Item
							title="🔧 Steam Workshop Support"
							image="/roadmap/workshop.webp"
							description={<>
								Steam Workshop is a platform that lets players create, share, and download user-generated content like mods, maps, and skins for their favorite games.
								<br/><br/>
								However, we're focusing on enhancing our own custom solution, the Vault, which is already in place and undergoing significant improvements.
								<br/><br/>
								While Steam Workshop offers a centralized hub for user-generated content, we believe that our tailored approach with the Vault will better serve our community's specific needs.
								<br/><br/>
								That said, we're open to exploring ways to integrate Steam Workshop in the future, but for now, our priority is to refine and expand the Vault's capabilities.
							</>}
							labels={ ["modding", "integration", "community"] }
						/>
						<Item
							title="👩‍💻 Asynchronous Scripting"
							image="/roadmap/async.webp"
							description={<>
								Asynchronous scripting is indeed a topic frequently discussed and requested by the community. Currently our scripting system is synchronous, meaning that scripts run one after the other in a single thread. This could potentially lead to performance issues if scripts take too long to execute.
								<br/><br/>
								Although we didn't see any major problems so far, we understand that asynchronous scripting could be beneficial for certain use cases. and in an ideal world, we'd love to have it, but it's a complex feature that requires careful planning and execution.
								<br/><br/>
								Currently our focus is on improving the core game experience and adding new features that will benefit the majority of players. Asynchronous scripting is a more advanced feature that would primarily benefit scripters and hosting performance. We're keeping it in mind for the future, but it's not a priority at the moment.
							</>}
							labels={ ["scripting", "optimization", "community"] }
						/>
						<Item
							title="⏩ WebUI Hardware Acceleration"
							image="/roadmap/accelerated.webp"
							description={<>
								Currently our CEF (Chromium Embedded Framework) implementation doesn't support Hardware Acceleration (or Composition), which can lead to performance issues, especially when rendering complex UIs with CSS animations.
								<br/><br/>
								Implementing it will require a significant amount of effort, as it involves integrating the underlying graphics API (DirectX) to existing Unreal Engine Textures.
								<br/><br/>
								We're planning to investigate this feature further and see if it's feasible to implement it in the future, as it would greatly improve the performance of WebUIs in the game and reduce CPU usage.
							</>}
							labels={ ["ui", "ux", "optimization"] }
						/>
					</Category>
					<Category title="✅ all released features" description="completed features that are already available in the game">
						<Item
							title="🕹️ Enhanced Input System"
							image="/roadmap/eis.webp"
							description="We managed to migrate from the old deprecated Unreal's input system to this new modern and flexible system."
							labels={ ["released", "integration"] }
						/>
						<Item
							title="🧪 Profiling: Network Stats"
							image="/roadmap/entities-network-stats.webp"
							description="We've added a new feature to the Profiling tool that allows you to see detailed network stats for each entity in the game. This is very useful for debugging and optimizing the core entities and see how much bandwidth each entity is using."
							labels={ ["released", "optimization"] }
						/>
						{/* <HorizontalDate title="2025" /> */}
						<Item
							title="🔣 Static Lighting Support"
							image="/roadmap/static-light.webp"
							description="We added support for static lighting in the game, allowing you to bake lighting into your maps for better performance and visual quality."
							labels={ ["released", "modding"] }
						/>
						<Item
							title="🔣 DLSS Integration"
							image="/roadmap/dlss.webp"
							description="We've integrated NVIDIA's Deep Learning Super Sampling (DLSS) technology into the game, allowing players to use this features in the game for better performance and visual quality."
							labels={ ["released", "integration", "optimization"] }
						/>
						<HorizontalDate title="2024" />
						<Item
							title="🧩 Native Gizmo Tool"
							video="/roadmap/gizmo.webm"
							description="We integrated a native Gizmo tool that allows scripters to create and manipulate 3D objects in the game world. This tool is perfect for creating custom editor tools, building systems, and more."
							external_link="/docs/next/scripting-reference/static-classes/gizmo"
							external_link_title="Gizmo"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="⚙️ Escape Menu Customization"
							image="/roadmap/escape-menu.webp"
							description="Scripters can now add basic custom elements to the escape menu, such as text, titles, and highlighted useful information. This allows a simple customization of the in-game menu."
							external_link="/blog/march-2023#escape-menu-information"
							external_link_title="March 2023 Blog"
							labels={ ["released", "gameplay", "ui"] }
						/>
						<Item
							title="🚤 Water Vehicle Entity"
							video="/roadmap/boat.webm"
							description="We've added a new Water Vehicle entity that allows scripters to create boats and other water-based vehicles. This entity comes with built-in physics and buoyancy, making it easy to create realistic water vehicles."
							external_link="/docs/next/scripting-reference/classes/vehicle-water"
							external_link_title="Vehicle Water"
							labels={ ["released", "scripting", "modding", "ui"] }
						/>
						<Item
							title="💥 Vehicle Health"
							video="/roadmap/vehicle-explosion.webm"
							description="Vehicles now have a health attribute, and they will explode when their health reaches zero. This adds a damage and destruction mechanic to vehicles."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="🧩 3D Widget"
							image="/roadmap/widget3d.webp"
							description="The Widget3D entity allows scripters to create 3D Widgets that can be placed in the game world. This is perfect for creating interactive 3D interfaces, HUDs, and more."
							external_link="/docs/next/scripting-reference/classes/widget-3d"
							external_link_title="Widget3D"
							labels={ ["released", "scripting", "modding", "ui"] }
						/>
						<Item
							title="📦 Package Creation Flow"
							video="/blog/2023-may/new-map-package.webm"
							description="We added an in-game package creation flow that allows you to easily create custom Packages and Asset Packs from the main menu UI. Also it allows you uploading new patches directly from the game."
							labels={ ["released", "ux", "ui"] }
						/>
						<Item
							title="🔔 Main Menu Notifications"
							image="/roadmap/notifications.webp"
							description="We've added a new notification system to the main menu that displays messages and alerts that happened in the game."
							labels={ ["released", "ui"] }
						/>
						<HorizontalDate title="2023" />
						<Item
							title="🌚 Single Lua VM"
							image="/roadmap/lua-vm-rule.webp"
							description="For a long time, we've been using multiple Lua VMs to run scripts in the game. This has caused some issues with performance, memory usage and package intercommunication, so we decided to switch to a single Lua VM. This change improves the performance and make it easier to manage scripts as a whole."
							labels={ ["released", "optimization", "scripting"] }
							external_link="/blog/december-2022#one-lua-virtual-machine"
							external_link_title="December 2022 News Blog"
						/>
						<Item
							title="⚙️ Game Mode Settings"
							image="/roadmap/new-game-settings.webp"
							description="We've added a new Game Mode Settings system that allows scripters to create custom settings for their game modes, those settings can be chosen from the main menu when starting a new game, or when starting a server from the command-line."
							labels={ ["released", "ui", "ux", "hosting"] }
							external_link="/blog/december-2022#gamemode-settings"
							external_link_title="December 2022 News Blog"
						/>
						<Item
							title="🧩 Widget Blueprint"
							image="/roadmap/widget.webp"
							description="The widget entity allows spawning custom UserWidget entities, providing a way to create native user interfaces within the game."
							external_link="/docs/next/scripting-reference/static-classes/widget"
							external_link_title="Widget"
							labels={ ["released", "scripting", "modding", "ui"] }
						/>
						<Item
							title="⌨️ Console Commands"
							image="/roadmap/console-commands.webp"
							description="This feature allows scripters to create custom console commands that can be executed by players or administrators within the game's or server's console."
							external_link="/docs/next/scripting-reference/static-classes/console"
							external_link_title="Console"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🌅 Ultra Dynamic Sky Integration"
							image="/roadmap/uds.webp"
							description="We natively integrated Ultra Dynamic Sky, one of best Unreal Marketplace Asset Packs, now we provide a dynamic sky and weather solution for your game-modes!"
							labels={ ["released", "integration", "scripting", "modding"] }
							external_link="/docs/scripting-reference/static-classes/sky"
							external_link_title="Sky Static Class"
						/>
						<Item
							title="🌌 Dimensions"
							image="/roadmap/dimensions.webp"
							description="We've introduced the Dimension system, allowing scripters to create and manage multiple isolated game spaces within the same server. Players and entities in different dimensions won't be able to interact with each other. This is perfect for instancing, private areas, or parallel worlds."
							labels={ ["released", "scripting", "community"] }
							external_link={"https://docs.nanos.world/docs/core-concepts/scripting/dimensions"}
							external_link_title={"Dimensions"}
						/>
						<Item
							title="🖥️ 3D WebUI"
							video="/blog/2022-july/cinema.webm"
							description="With the new methods added to the WebUI entity, you can take the WebUI material and apply it to any 3D 'paintable' entity in the game! This means you can create interactive TVs, cinemas, in-game screens, or even complex 3D user interfaces."
							labels={ ["released", "scripting"] }
							external_link={"/docs/next/scripting-reference/classes/webui#using-a-webui-as-mesh-material"}
							external_link_title="WebUI SetMaterialFromWebUI"
						/>
						<Item
							title="🌐 WebUI CEF Based"
							image="/roadmap/webui.webp"
							description="We've integrated the Chromium Embedded Framework (CEF), enabling scripters to create custom user interfaces using web technologies like HTML, CSS, and JavaScript."
							external_link="/docs/next/scripting-reference/classes/webui"
							external_link_title="WebUI"
							labels={ ["released", "scripting", "ui"] }
						/>
						<Item
							title="🌍 Menu Rework & Rebrand"
							image="/roadmap/menu.webp"
							description="We've completely reworked the game's menus and UI as part of a full rebrand. Every interface has been redesigned to be more modern, intuitive, and visually appealing. This update improves navigation, enhances the overall user experience, and aligns with our vision for the game. The new UI has set a fresh foundation for future updates and features."
							labels={ ["released", "ui"] }
							external_link={"https://docs.nanos.world/blog/june-2022"}
							external_link_title={"June 2022 News Blog"}
						/>
						<Item
							title="🫂 P2P Servers"
							image="/roadmap/p2p.webp"
							description="We've integrated Steam's P2P (Peer-to-Peer) servers, allowing players to host their own servers without the need for a dedicated server or to open ports in the router."
							external_link={"https://docs.nanos.world/blog/may-2022#p2p-servers"}
							external_link_title={"May 2022 News Blog"}
							labels={ ["released", "hosting"] }
						/>
						<Item
							title="💾 Database Built-in Integration"
							image="/roadmap/db.webp"
							description="We've successfully integrated database support for scripting, allowing scripters to connect to databases and use them however they need. This gives more flexibility for storing player data, leaderboards, inventories, and any other persistent information. It's a powerful tool that opens up countless possibilities for custom game-modes and systems."
							external_link="/docs/next/scripting-reference/classes/database"
							external_link_title="Database"
							labels={ ["released", "scripting", "integration"] }
						/>
						<Item
							title="🔣 Blueprint Entity"
							image="/roadmap/bp-entity.webp"
							description="The Blueprint Entity is a new entity that allows you to create custom entities using Blueprints! This will allow you to create custom entities with custom logic and behavior, and share them with the community!"
							external_link="/docs/next/scripting-reference/classes/blueprint"
							external_link_title="Blueprint"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="5️⃣ Port to Unreal Engine 5"
							image="/roadmap/ue5.webp"
							description="We've successfully upgraded the game to Unreal Engine 5, bringing improved performance, better visuals, and access to the latest engine features."
							labels={ ["released", "community"] }
						/>
						<Item
							title="🎥 Scene Capture Entity"
							video="/blog/january/scene-capture.webm"
							description="The SceneCapture is a camera that captures what it sees and renders it onto a material. You can use this material anywhere: apply it to any 'paintable' entity or even UI elements. Perfect for security cameras, mirrors, picture-in-picture effects, or anything else you can come up with."
							external_link="/docs/next/scripting-reference/classes/scene-capture"
							external_link_title="Scene Capture"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="👶 Character Simple Class"
							image="/roadmap/character-simple.webp"
							description="The Character Simple class is a simplified version of the Character class, designed for scripters who want to create custom characters without the complexity of the full Character class. It's perfect for creating NPCs, animals, or other simple characters."
							labels={ ["released", "scripting", "modding", "community"] }
							external_link="/docs/scripting-reference/classes/character-simple"
							external_link_title="Character Simple"
						/>
						<Item
							title="📺 In-game Console"
							image="/roadmap/console.webp"
							description="We've added an in-game console that allows players and administrators to execute commands, scripts and read the logs directly in the game."
							labels={ ["released", "ui"] }
						/>
						<HorizontalDate title="2022" />
						<Item
							title="📷 Native Top-Down ViewMode"
							video="/blog/november/top-down.webm"
							description="We've added a new Top-Down view mode, allowing players to control their characters from a top 2D perspective. This opens up possibilities for different gameplay styles."
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🧱 Decal Entity"
							image="/roadmap/decals.webp"
							description="We've added the Decal entity, letting scripters spawn and control decals dynamically at runtime. This means you can place blood splatters, bullet holes, custom markings, or any other visual effects on surfaces in real-time."
							external_link="/docs/next/scripting-reference/classes/decal"
							external_link_title="Decal"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="💬 Billboard Entity"
							image="/roadmap/billboard.webp"
							description="The Billboard entity is here! This is a simple but powerful feature that lets you display 2D textures that always face the camera. You can attach them to anything: characters, props, or even place them freely in the world."
							external_link="/docs/next/scripting-reference/classes/billboard"
							external_link_title="Billboard"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🌐 HTTP Requests"
							image="/roadmap/http-request.webp"
							description="The HTTP class allows scripters to make HTTP requests within their scripts. This allows for integration with external web services and data sources."
							external_link="/docs/next/scripting-reference/static-classes/http"
							external_link_title="HTTP"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="💨 Sandbox Game Mode"
							image="/roadmap/sandbox.webp"
							description="TODO"
							external_link="https://github.com/nanos-world/nanos-world-sandbox"
							external_link_title="Sandbox GitHub Page"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🗡️ Melee Weapons"
							video="/blog/november/melee.webm"
							description="Melee weapons are fully implemented, allowing scripters and modders to import custom weapon meshes and animations. This system brings more variety to the existing combat. While it's already functional, we still plan to improve it further, refining animations, hit detection, and overall gameplay feel."
							external_link="/docs/next/scripting-reference/classes/melee"
							external_link_title="Melee"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🌐 New Web Page"
							image="/roadmap/webpage.webp"
							description="We've launched a new website for nanos world, featuring a fresh design, improved navigation, and updated content marketing the game."
							external_link="https://nanos.world"
							external_link_title="nanos world"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🏪 In-game Vault"
							image="/roadmap/vault.webp"
							description="With the In-game Vault, players and scripters can browse, download, update, and even upload their Asset Packs and Packages straight from inside the game. You can check out descriptions, screenshots and even rate creations to help highlight the best ones."
							labels={ ["released", "ui", "ux"] }
						/>
						<Item
							title="🧪 Profiling: Performance Stats"
							image="/roadmap/profiling.webp"
							description="We've added a new feature to the Profiling tool that allows you to see detailed performance stats for each operation executed in the game. This is very useful for debugging and optimizing both your scripts and the game itself."
							labels={ ["released", "optimization", "integration"] }
						/>
						<Item
							title="🔗 Cable Entity"
							image="/roadmap/cables.webp"
							description="This feature introduces a new entity type specifically designed for creating and manipulating cables within the game world."
							external_link="/docs/next/scripting-reference/classes/cable"
							external_link_title="Cable"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🎨 Customizable Materials/Textures for Entities"
							image="/roadmap/materials.webp"
							description="We added new methods to allow scripting to dynamically modify the materials and textures applied to entities during runtime."
							external_link="/docs/next/scripting-reference/classes/base-classes/paintable"
							external_link_title="Paintable Base Class"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🔍 Traces / RayCasting"
							image="/roadmap/traces.webp"
							description="This feature enables scripters to perform world traces (raycasting) to gather information about the game world. This is useful for hit detection, object detection, and other interactions."
							external_link="/docs/next/scripting-reference/static-classes/trace"
							external_link_title="Trace"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="✨ Particle Entity"
							image="/roadmap/particle.webp"
							description="This entity type gives scripters the capability to spawn and control particle systems within the game world."
							external_link="/docs/next/scripting-reference/classes/particle"
							external_link_title="Particle"
							labels={ ["released", "scripting", "modding"] }
						/>
						<Item
							title="🌊 Water Physics"
							video="/blog/2022-april/water-buoyancy.webm"
							description="We've integrated Unreal Engine's Water system, enabling entities to realistically interact with water physics. This integration allows for buoyancy, wave interaction, and other water-related effects."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="🪆 Ragdoll Sync"
							image="/roadmap/ragdoll-sync.webp"
							description="Ragdoll Sync ensures that the main position of a character's ragdoll stays the same for all players, preventing weird desync issues where characters end up in completely different spots. However, it's important to note that individual bones aren't synced, only the overall location—so minor differences in how the ragdoll settles might still occur."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="🖼️ Custom Loading Screen"
							image="/roadmap/loading-screen.webp"
							description="Server creators now have the ability to personalize the loading screen displayed to players as they join their servers. This allows for branding and custom information during the loading process."
							external_link="/docs/next/core-concepts/packages/loading-screen"
							external_link_title="Loading Screen"
							labels={ ["released", "ui"] }
						/>
						<HorizontalDate title="2021" />
						<Item
							title="🛜 Network Debugging"
							image="/roadmap/debug-visualizer.webp"
							description="We've added a new Network Debugging tool that allows you to visualize the network traffic between the server and clients on each entity."
							external_link="/docs/next/core-concepts/scripting/authority-concepts#debugging-network--network-authority"
							external_link_title="Network Authority Page"
							labels={ ["released", "optimization", "gameplay"] }
						/>
						<Item
							title="💬 Built-in Chat"
							image="/roadmap/chat.webp"
							description="This feature adds a native text chat system to the game, allowing players to communicate with each other through text messages."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="📦 Static Mesh Entity"
							image="/roadmap/static-mesh.webp"
							description="This simple entity allows spawning and manipulating Static Meshes in the world."
							external_link="/docs/next/scripting-reference/classes/static-mesh"
							external_link_title="Static Mesh"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="⭐ Steam Achievements"
							image="/roadmap/achievements.webp"
							description="We integrated Steam's Achievements into the game, allowing players to unlock achievements and accumulate stats by doing game actions."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="🔤 3D Text Entity"
							image="/roadmap/3dtext.webp"
							description="This entity allows for the creation of 3D text rendered within the game world."
							external_link="/docs/next/scripting-reference/classes/text-render"
							external_link_title="TextRender"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="🎮 Discord Integration"
							image="/roadmap/discord-integration.webp"
							description="This integration allows scripters to modify the Rich Presence status of the game within Discord. This allows for dynamic updates to player status and activity displayed on Discord."
							external_link="/docs/next/core-concepts/scripting/discord-integration"
							external_link_title="Discord Integration"
							labels={ ["released", "scripting", "integration"] }
						/>
						<Item
							title="🔊 Sound Entity"
							image="/roadmap/sounds.webp"
							description="This entity allows for the spawning and playback of sounds within the game world."
							external_link="/docs/next/scripting-reference/classes/sound"
							external_link_title="Sound"
							labels={ ["released", "scripting"] }
						/>
						<Item
							title="💨 Steam Page"
							image="/roadmap/steam.webp"
							description="We've launched the game on Steam as a coming soon™ page, allowing all testers to easily be able to download it and keep the game update, also allowing us to reach a broader audience and start accumulating wishlists."
							external_link="https://store.steampowered.com/app/1841660/nanos_world/"
							external_link_title="nanos world™ on Steam"
							labels={ ["released"] }
						/>
						<Item
							title="📄 Reworked Docs"
							image="/roadmap/new-docs.webp"
							description="We've completely reworked our documentation using Docusaurus, now it's more user-friendly, visually appealing, and easier to navigate. Also it provides multi-languages and even automated API definitions, a news blog and a lot of useful information."
							external_link="/blog/new-docs"
							external_link_title="New Docs Blog Post"
							labels={ ["released"] }
						/>
						<HorizontalDate title="2020" />
						<Item
							title="🛠️ Assets Development Kit"
							image="/roadmap/adk.webp"
							description="This Assets Development Kit (ADK) Unreal Engine project provides modders a base project to create custom content such as maps and meshes"
							external_link="/docs/next/assets-modding/creating-assets/adk-assets-development-kit"
							external_link_title="Assets Development Kit"
							labels={ ["released", "modding"] }
						/>
						<Item
							title="🗣️ VOIP System"
							image="/roadmap/voip.webp"
							description="This system introduces voice over IP (VOIP) communication, enabling players to engage in real-time voice chat with one another within the game."
							labels={ ["released", "gameplay", "scripting"] }
						/>
						<Item
							title="🙌 Prop Grabbing"
							image="/roadmap/prop-grabbing.webp"
							description="This gameplay feature allows characters to pick up and move props within the game world."
							labels={ ["released", "gameplay"] }
						/>
						<Item
							title="🔫 Weapon Entity"
							video="/blog/weapons-improvements/m1911.webm"
							external_link="/docs/next/scripting-reference/classes/weapon"
							external_link_title="Weapon"
							labels={ ["released", "scripting", "gameplay", "modding"] }
						/>
						<Item
							title="🚗 Vehicle Entity"
							video="/blog/2022-march/tire-skid.webm"
							external_link="/docs/next/scripting-reference/classes/vehicle-wheeled"
							external_link_title="Vehicle Wheeled"
							labels={ ["released", "scripting", "gameplay", "modding"] }
						/>
						<Item
							title="📦 Prop Entity"
							image="/roadmap/prop-entity.webp"
							external_link="/docs/next/scripting-reference/classes/prop"
							external_link_title="Prop"
							labels={ ["released", "scripting", "gameplay", "modding"] }
						/>
						<Item
							title="💣 Grenade Entity"
							image="/roadmap/grenade.webp"
							external_link="/docs/next/scripting-reference/classes/grenade"
							external_link_title="Grenade"
							labels={ ["released", "scripting", "gameplay", "modding"] }
						/>
						<HorizontalDate title="2019" />
					</Category>
				</div>
			</Layout>
		</>
	);
}

export default Roadmap;
