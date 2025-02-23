import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { Link } from "react-router-dom";


// External Video from Github
export const VideoExternal = ({ path, noplay, controls = true }) => (
	<video controls={controls} allowFullScreen={true} autoPlay={!noplay} loop={!noplay} muted={!noplay}>
		<source src={`${ process.env.NODE_ENV === 'development' ? "/videos" : "https://github.com/nanos-world/docs/raw/master/external/videos"}${path}`} />
	</video>
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