import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SilderData';
import Instagram from '../components/Instagram';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Yoga | Masajes | Yami</title>
				<meta
					name="description"
					content="Clases de yoga y los mejores masajes"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero
				heading="YOGA & MASAJES"
				message="Disfruta de estar bien con vos mism@"
			/>
			<Slider slides={SliderData} />
			<Instagram />
		</div>
	);
}
