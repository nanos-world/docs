import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { Link } from "react-router-dom";
import ThemedImage from '@theme/ThemedImage'
import { useRef, useEffect, useState } from 'react';

export const GetExternalPath = () => {
	return process.env.NODE_ENV === 'development' ? "" : "https://github.com/nanos-world/docs/raw/master/external";
}

// External Video from Github (with lazy load)
export const VideoExternal = ({ path, noplay, controls = true, className, style }) => {
	const videoRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const src = `${ GetExternalPath() }/videos${ path }`;

	useEffect(() => {
		// Create an Intersection Observer
		const observer = new IntersectionObserver(
			([entry]) => {
				// If the video is intersecting with the viewport
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Stop observing once visible
				}
			},
			{
				root: null, // observe against the viewport
				rootMargin: '0px',
				threshold: 0.1, // trigger when 10% of the video is visible
			}
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		// Cleanup function
		return () => {
			if (videoRef.current && observer) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (isVisible && videoRef.current) {
			// Set the source and load the video
			videoRef.current.src = src;
			videoRef.current.play();
		}
	}, [isVisible, src]);

	return (
		<video
			ref={videoRef}
			loop={!noplay}
			autoPlay={!noplay}
			muted={!noplay}
			className={className}
			style={style}
			controls={controls}
			allowFullScreen={true}
			playsInline
		>
			Your browser does not support the video tag.
		</video>
	);
};

// External Image from Github
export const ImageExternal = ({ path, className }) => (
	<img src={`${ GetExternalPath() }/images${ path }`} className={className} decoding="async" loading="lazy" />
)

// Image that changes based on the dark/light theme
// Note: image-zoom doesn't work
export const ImageDarkLight = ({ dark_img, light_img, legend }) => (
	<>
		<p>
			<ThemedImage
				sources={{
					light: light_img,
					dark: dark_img,
				}}
			/>
		</p>
		<MediaLegend>{ legend }</MediaLegend>
	</>
);

// Getter to get the current version path - for links
export const getActiveVersionPath = () => {
	const activeVersion = useActiveVersion();
	return activeVersion ? activeVersion.path : "/docs/next";
};

// Function to convert PascalCase string to kebab-case
export const getKebabFromPascal = (str) => {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

// Getter to get the current version path - for links
export const LinkActiveVersion = (props) => (
	<Link { ...props } to={`${getActiveVersionPath()}/${props.to}`} />
);

// Media Legend
export const MediaLegend = ({ children }) => (
	<p className="media-legend">
		{ children }
	</p>
)

// Media Gallery
export const MediaGallery = ({ children }) => (
	<p className="media-gallery">
		{ children }
	</p>
)

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

export const KofiButton = ({ username = "I2I3537D1" }) => (
	<div style={{ textAlign: "center" }}>
		<a href={`https://ko-fi.com/${username}`} target="_blank" style={{ display: "inline-block" }}>
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