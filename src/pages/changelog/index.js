import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import styles from './styles.module.css';
import Markdown from 'react-markdown'

const Changelog = () => {
	const [changelogs, setChangelogs] = useState([])

	useEffect(() => {
		fetch("https://api.nanos-world.com/game/changelog")
		.then(response => {
			return response.json();
		})
		.then(data => {
			setChangelogs(data.payload);
		})
	}, [])

	return (
		<Layout title="Changelog" description="nanos world Changelog">
			<div className={clsx('container', 'margin-vert--lg', styles.header)}>
				<h1>
					📃 changelog
				</h1>
				<p>
					You can find all updates and changes to the game here.
				</p>
			</div>
			<div className={clsx('container', 'margin-vert--lg', styles.header)}>
				{changelogs.length > 0 ? (
					changelogs.map(changelog => (
						<div key={changelog.name} className={clsx("update", styles.update)}>
							<Link id={changelog.name} to={`#${changelog.name}`}>
								<h1 className={clsx("version", styles.version)}>
									{changelog.name}
								</h1>
							</Link>
							<span className={clsx("releasedat", styles.releasedat)}>
								{new Date(changelog.releasedAt).toLocaleString()}
							</span>
							<div className={clsx("description", styles.description)}>
								<Markdown>{ changelog.description }</Markdown>
							</div>
						</div>
					))
				) : "Loading..."}
			</div>
		</Layout>
	);
}

export default Changelog;
