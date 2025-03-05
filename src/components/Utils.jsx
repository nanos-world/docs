import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { Link } from "react-router-dom";


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