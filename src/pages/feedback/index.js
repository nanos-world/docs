import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureOSInternal = () => {
	const { colorMode } = useColorMode();
	const src = `https://feedback.nanos-world.com/embed/home?no_header=true&theme=${colorMode}`;

	return (
		<iframe
			key={colorMode}
			style={{
				border: 0,
				width: '100%',
				height: '100%'
			}}
			src={src}
		/>
	);
};

const Feedback = () => {
	return (
		<Layout noFooter title="Feedback" description="nanos world Feedback & Bugs Page">
			<div className={clsx('container', 'margin-vert--lg')} style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)'}}>
				<div style={{ flexShrink: 0 }}>
					<h1>📢 feedback & bugs hub</h1>
					<p>
						Welcome to the official nanos world Feedback Hub!
						<br />
						You can also check out our standalone <a href="https://feedback.nanos-world.com" target="_blank" rel="noreferrer">Feedback & Bugs</a> page, with all ideas accepted into the game.
					</p>
				</div>

				<div style={{ flexGrow: 1, overflow: 'hidden', borderRadius: '8px' }}>
					<FeatureOSInternal />
				</div>
			</div>
		</Layout>
	);
}

export default Feedback;