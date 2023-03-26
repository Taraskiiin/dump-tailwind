import Lottie from 'react-lottie-player';
import Link from 'next/link';

import donut from '../lottie/donut.json';

const linksList = [
	{
		id: '1',
		title: 'Product Card',
		link: '/product-modal',
	},
	{
		id: '2',
		title: 'Grid',
		link: '/grid',
	},
	{
		id: '3',
		title: 'Gallery',
		link: '/image-gallery',
	},
	{
		id: '4',
		title: 'Login Modal',
		link: '/login-modal',
	},
	{
		id: '5',
		title: 'Pricing Card',
		link: '/pricing-card',
	},
	{
		id: '6',
		title: 'Email Subscribe',
		link: '/email-subscribe',
	},
];

export default function Home() {
	return (
		<>
			<section className='flex flex-col md:flex-row items-center justify-center relative h-screen bg-slate-900'>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.3]'>
					<Lottie
						loop
						animationData={donut}
						play
						style={{ width: '800px', height: '800px' }}
					/>
				</div>
				<div className='flex flex-col gap-2 relative z-20'>
					{linksList.map((el) => (
						<Link key={el.id} href={el.link} className='home-link'>
							{el.title}
						</Link>
					))}
				</div>
			</section>
		</>
	);
}
