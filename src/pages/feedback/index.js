import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';

const BoardToken = '1aaa5ced-939b-8115-81d5-129a3244a3f1';

const CannyInternal = () => {
	const { colorMode } = useColorMode();

	useEffect(() => {
		// Destroys if it already exists
		const canny_iframe = document.getElementById("canny-iframe");

		if (canny_iframe)
			canny_iframe.remove();

		(function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

		Canny('render', {
			boardToken: BoardToken,
			basePath: "/feedback",
			ssoToken: null,
			theme: colorMode
		});
	}, [colorMode]);

	return (
		<main
			className={clsx('container', 'margin-vert--lg', "canny-stuff")}
			data-canny
		/>
	);
};

const Feedback = () => {
	return (
		<Layout title="Feedback" description="nanos world Feedback Page">
			<div className={clsx('container', 'margin-vert--lg')}>
				<h1>
					📢 feedback hub
				</h1>
				<p>
					Welcome to the official nanos world Feedback Hub!
					<br />
					You can also check out our standalone <a href="https://feedback.nanos.world" target="_blank">Ideas</a> page, with all ideas accepted into the game.
				</p>
			</div>
			<CannyInternal />
		</Layout>
	);
}

export default Feedback;
