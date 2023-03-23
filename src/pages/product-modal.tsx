import React from 'react';

export default function ProductModal() {
	return (
		<section className='flex items-center justify-center min-h-screen bg-slate-100'>
			<div className='flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'>
				<div>
					<img
						src='/assets/headphone.png'
						alt='headphones image'
						className='mx-auto duration-200 w-60 hover:scale-105'
					/>
				</div>
				<div className='flex flex-col space-y-6'>
					<div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
						<div>
							<div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
								Free Shipping
							</div>
						</div>
						<h2 className='max-w-sm text-2xl font-medium'>
							Razer Kraken Kitty Edt Gaming Headset Quartz
						</h2>
						<div className='flex flex-col mb-4 space-3-y-3 text-center md:text-left'>
							<span className='line-through'>$799</span>
							<span className='text-5xl font-bold'>$599</span>
							<span className='text-sm font-light text-gray-400'>
								This offer is valid until April 3rd or as ling as stock last!
							</span>
						</div>
						<div className='group'>
							<button className='w-full bg-blue-700 transition-all text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:shadow-lg duration-100'>
								<div className='px-8 py-4 bg-blue-500 rounded-lg  transition-all group-hover:bg-blue-700 duration-100'>
									Add to cart
								</div>
							</button>
						</div>
						<div className='flex items-center space-x-3 group'>
							<div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping' />
							<span className='text-sm'>50+ pcs. in stock</span>
						</div>
						<div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
							<button className='flex items-center justify-start py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-100'>
								<img src='assets/weight.png' alt='' className='w-8' />
								<span>Add to cart</span>
							</button>
							<button className='flex items-center justify-start py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-100'>
								<img src='assets/heart.png' alt='' className='w-8' />
								<span>Add to wishlist</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
