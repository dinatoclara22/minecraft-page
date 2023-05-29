// eslint-disable-next-line react/prop-types
export default function Input({ text, id, ...props }) {
	return (
		<>
			<label className="text-white" htmlFor={id}>
				{text}
			</label>
			<input
				placeholder={text}	
				id={id}
				className="bg-neutral-800 bg-opacity-50 border-2 border-neutral-500 rounded-lg px-4 py-2 placeholder-opacity-50 placeholder-gray-400 text-slate-300"
				{...props}
			/>
		</>
	);
}
