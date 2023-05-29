import features from "../data/features.json";

export default function Footer() {
	return (
		<footer className="pt-10 md:pt-0">
			<ul className="md:flex gap-10 flex-wrap justify-center text-white">
				{features.map((feature) => {
					return (
						<li key={feature.text} className="flex flex-col items-center mb-9">
							<img className="w-10" src={feature.img} alt={feature.text} />
							<p className="text-center mt-2">{feature.text}</p>
						</li>
					);
				})}
			</ul>
		</footer>
	);
}
