// eslint-disable-next-line react/prop-types
export default function Link({ href, text }) {
	return (
		<button className="font-kufa font-medium hover:bg-shadow-grey hover:backdrop-blur-sm px-6 py-2 rounded-xl text-white hover:text-light-green transition-colors">
			<a href={href}>{text}</a>
		</button>
	);
}
