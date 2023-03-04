import { ChangeEvent } from 'react'

type TProps = {
	name?: string
	value?: string
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = ({ name, value, handleChange }: TProps) => {
	return (
		<input
			className="mx-8 p-2 border-solid border-2 rounded border-slate-600"
			type="text"
			id={name}
			name={name}
			value={value}
			onChange={handleChange}
		/>
	)
}
