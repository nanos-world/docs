import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Changelog = () => {
	const [changelogs, setChangelogs] = useState([])

	useEffect(() => {
		fetch("https://api.nanos.world/game/changelog")
		.then(response => {
			return response.json()
		})
		.then(data => {
			setChangelogs(data)
		})
	}, [])

	return (
		<Layout title="Changelog" description="nanos world Changelog">
			<div className={clsx('container', 'margin-vert--lg', styles.header)}>
				{changelogs.length > 0 ? (
					changelogs.map(changelog => (
						<div key={changelog.name} className={clsx("update", styles.update)}>
							<a id={changelog.name} href={`#${changelog.name}`}>
								<h1 className={clsx("version", styles.version)}>
									{changelog.name}
								</h1>
							</a>
							<span className={clsx("releasedat", styles.releasedat)}>
								{new Date(changelog.releasedAt).toLocaleString()}
							</span>
							<div className={clsx("description", styles.description)}>
								{changelog.description.replace(/\*|`/g, "")}
							</div>
						</div>
					))
				) : "Loading..."}
			</div>
		</Layout>
	);
}

export default Changelog;
