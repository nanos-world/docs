import Layout from '@theme/Layout';
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Tippy from '@tippyjs/react';
import { VideoExternal, ImageExternal } from '@site/src/components/Utils';
import roadmapData from './roadmap-data.json';


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

	// Helper function to render description (handles both string and JSX)
	const renderDescription = (description) => {
		if (typeof description === 'string') {
			// Convert \n\n to line breaks for string descriptions
			return description.split('\n\n').map((paragraph, index) => (
				<React.Fragment key={index}>
					{paragraph}
					{index < description.split('\n\n').length - 1 && <><br/><br/></>}
				</React.Fragment>
			));
		}
		return description;
	};

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
						{ item.description ? renderDescription(item.description) : <i>No description available</i> }
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
					{roadmapData.categories.map((category, categoryIndex) => (
						<Category key={categoryIndex} title={category.title} description={category.description}>
							{category.items.map((itemData, itemIndex) => {
								// Check if this is a date separator
								if (itemData.type === "date") {
									return <HorizontalDate key={`date-${categoryIndex}-${itemIndex}`} title={itemData.title} />;
								}

								// Regular item
								return (
									<Item
										key={`item-${categoryIndex}-${itemIndex}`}
										title={itemData.title}
										image={itemData.image}
										video={itemData.video}
										description={itemData.description}
										labels={itemData.labels || []}
										external_link={itemData.external_link}
										external_link_title={itemData.external_link_title}
									/>
								);
							})}
						</Category>
					))}
				</div>
			</Layout>
		</>
	);
}

export default Roadmap;
