import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Home() {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black
        to-gray-800 "
		>
			<div
				className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
            px-4 md:flex-row"
			>
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-7xl sm:text-7xlm font-bold text-white">
						I'm Paul Alex
					</h2>
					<p className="text-3xl text-gray-500 py-4 max-w-md mr-10">
						Software Developer & Space Nerd.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Portfolio
							<span>
								<FaAngleDoubleDown size={20} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
