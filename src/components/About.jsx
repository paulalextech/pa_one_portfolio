import React from 'react';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-2xl mt-10 flex flex-col justify-center">
					Bilingual Software Developer & Space Nerd. I took a some what, scenic
					route to the arena of Software Development. I spent a good chunk of
					time in the project & operations management space. Then started coding
					whilst on crutches and the rest is history as they say, whoever they
					are.
				</p>

				<br />

				<p className="text-xl mt-5 italic">
					'Shoot for the stars, but if you happen to miss, shoot for the moon
					instead.'
					<p className="mt-3">NEIL ARMSTRONG</p>
				</p>
			</div>
		</div>
	);
};

export default About;
