type TProps = {
	label?: string
	handleClick: () => void
}

export const Button = ({ label = 'button', handleClick }: TProps) => {
	return (
		<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
			{label}
		</button>
	)
}
