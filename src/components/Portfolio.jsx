import React from 'react';
import astronaut from '../assets/portfolio/astronaut.jpg';
import launch from '../assets/portfolio/launch.jpg';
import satellite from '../assets/portfolio/satellite.jpg';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: astronaut,
		},
		{
			id: 2,
			src: launch,
		},
		{
			id: 3,
			src: satellite,
		},
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b  from-gray-800 to-black w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="text-2xl py-6">
						Check out some of my projects right here.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src }) => (
						<div key={id} className="shadow-md">
							<img
								className="rounded-md duration-200 hover:scale-105"
								src={src}
								alt=""
							/>
							<div className="shadow-md shadow-gray-600 rounded-lg flex items-center justify-center">
								<button className="w-1/2 px-6 py-3 m-4 bg-gray-800 rounded-md duration-200	hover:scale-105">
									Demo
								</button>
								<button className="w-1/2 px-6 py-3 m-4 bg-gray-800 rounded-md duration-200	hover:scale-105">
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
