import React from 'react';
import Link from 'next/link';

const navList = ['Vector', 'Illustrations', 'Images', 'Icons'];
const imageList = [
	{
		id: '1',
		image: 'assets/image1.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
	{
		id: '2',
		image: 'assets/image2.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
	{
		id: '3',
		image: 'assets/image3.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
	{
		id: '4',
		image: 'assets/image4.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
	{
		id: '5',
		image: 'assets/image5.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
	{
		id: '6',
		image: 'assets/image6.jpeg',
		name: 'Abstract Painting',
		data: '245 likes - 35 Shares',
	},
];

export default function ImageGallery() {
	return (
		<section className='flex items-center justify-center min-h-screen bg-cyan-50'>
			<div className='bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
				<div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					{navList.map((el) => (
						<div className='group'>
							<Link href='#'>{el}</Link>
							<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
						</div>
					))}
				</div>
				<div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
					<div className='flex justify-between border-b'>
						<input
							type='text'
							className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
							placeholder='Search'
						/>
						<button>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 text-gray-300 duration-200 hover:scale-110'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<circle cx='10' cy='10' r='7' />
								<line x1='21' y1='21' x2='15' y2='15' />
							</svg>
						</button>
					</div>
					<button className='py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black'>
						Upload
					</button>
				</div>
				<div className='grid gap-4 md:grid-cols-3'>
					{imageList.map((el) => (
						<div className='relative group' key={el.id}>
							<img src={el.image} alt={el.name} className='w-72' />
							<div className='absolute bottom-0 left-0 right-0 p-2 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
								<div className='flex justify-between w-full'>
									<div className='font-normal'>
										<p className='text-sm'>{el.name}</p>
										<p className='text-xs'>{el.data}</p>
									</div>
									<div className='flex items-center'>
										<img src='/assets/bookmark.svg' alt='bookmark' />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
