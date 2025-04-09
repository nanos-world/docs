import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { Link } from "react-router-dom";
import { MediaLegend } from '@site/src/components/_nanos';
import ThemedImage from '@theme/ThemedImage'

export const GetExternalPath = () => {
	return process.env.NODE_ENV === 'development' ? "" : "https://github.com/nanos-world/docs/raw/master/external";
}

// External Video from Github
export const VideoExternal = ({ path, noplay, controls = true, className, style }) => (
	<video key={path} controls={controls} allowFullScreen={true} preload={"none"} autoPlay={!noplay} loop={!noplay} muted={!noplay} className={className} style={style}>
		<source src={`${ GetExternalPath() }/videos${ path }`} />
	</video>
)

// External Image from Github
export const ImageExternal = ({ path, className }) => (
	<img src={`${ GetExternalPath() }/images${ path }`} className={className} decoding="async" loading="lazy" />
)

// Getter to get the current version path - for links
export const getActiveVersionPath = () => {
	const activeVersion = useActiveVersion();
	return activeVersion ? activeVersion.path : "/docs/next";
};

// Getter to get the current version path - for links
export const LinkActiveVersion = (props) => (
	<Link { ...props } to={`${getActiveVersionPath()}/${props.to}`} />
);

export const ComparisonSlider = ({ img_left, label_left, img_right, label_right, legend, max_width = "100%", enable_zoom = true, zoom_direction = "top left", caption_on_bottom = true }) => (
	<>
		<img-comparison-slider class={ enable_zoom ? "img-comparison-slider-zoomable" : "" } style = {{ maxWidth: max_width }} >
			<figure slot="first" class="before">
				<img width="100%" src={ img_left } style={{ transformOrigin: zoom_direction }} />
				<figcaption style={caption_on_bottom ? { bottom: "10px" } : { top: "10px" }}>
					{ label_left }
				</figcaption>
			</figure>
			<figure slot="second" class="after">
				<img width="100%" src={ img_right } style={{ transformOrigin: zoom_direction }} />
				<figcaption style={caption_on_bottom ? { bottom: "10px" } : { top: "10px" }}>
					{ label_right }
				</figcaption>
			</figure>
		</img-comparison-slider>
		<MediaLegend>{ legend }</MediaLegend>
	</>
);

export const KofiButton = () => (
	<div style={{ textAlign: "center" }}>
		<a href="https://ko-fi.com/I2I3537D1" target="_blank" style={{ display: "inline-block" }}>
			<ThemedImage
				alt="Ko-fi"
				sources={{
					light: '/img/docs/kofi-dark.webp',
					dark: '/img/docs/kofi-beige.webp',
				}}
				style={{ maxWidth: "300px" }}
			/>
		</a>
	</div>
);