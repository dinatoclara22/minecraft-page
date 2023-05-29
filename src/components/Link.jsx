// eslint-disable-next-line react/prop-types
export default function Anchor({ text, className }) {
	return (
		<a
			className={`${className} font-kufa font-medium hover:bg-zinc-900/20 hover:backdrop-blur-lg px-6 py-2 rounded-xl text-white hover:text-light-green transition-colors`}
		>
			{text}
		</a>
	);
}
