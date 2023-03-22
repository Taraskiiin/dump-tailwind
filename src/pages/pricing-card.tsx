import React from 'react';
import Link from 'next/link';

const list = [
	{
		id: '1',
		tariffName: 'Basic',
		tariff: '100GB',
		price: '$1.99/Month',
		sweets: [
			'100 GB of storage',
			'Option to add members',
			'Extra member benefits',
		],
	},
	{
		id: '2',
		tariffName: 'Standard',
		tariff: '200GB',
		price: '$3.99/Month',
		sweets: [
			'200 GB of storage',
			'Option to add members',
			'Extra member benefits',
		],
	},
	{
		id: '3',
		tariffName: 'Premium',
		tariff: '2TB',
		price: '$8.99/Month',
		sweets: [
			'2 TB of storage',
			'Option to add members',
			'Extra member benefits',
		],
	},
];

export default function PricingCard() {
	return (
		<section className='flex items-center justify-center min-h-screen bg-slate-800 overflow-hidden'>
			<div className='flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0'>
				{list.map((item) => (
					<div key={item.id} className='bg-slate-700 rounded-xl text-white'>
						<div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
							<div className='text-center uppercase'>{item.tariffName}</div>
							<h2 className='mt-10 font-serif text-5xl text-center'>
								{item.tariff}
							</h2>
							<h3 className='mt-2 text-center'>{item.price}</h3>
							<div className='flex justify-center'>
								<Link
									href='#'
									className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-800 duration-300'
								>
									Purchase
								</Link>
							</div>
						</div>
						<div className='border-t border-slate-700' />
						<div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
							<div className='flex flex-col space-y-2'>
								{item.sweets.map((el) => (
									<div
										key={el}
										className='flex justify-start items-center gap-2'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-5 h-5'
											viewBox='0 0 24 24'
											stroke-width='2'
											stroke='currentColor'
											fill='none'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path stroke='none' d='M0 0h24v24H0z' fill='none' />
											<path d='M5 12l5 5l10 -10' />
										</svg>
										<span className='text-sm text-left'>{el}</span>
									</div>
								))}{' '}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
