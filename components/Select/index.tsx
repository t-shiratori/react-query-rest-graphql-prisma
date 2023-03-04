import { ChangeEvent } from 'react'

type TProps = {
	name?: string
	value?: string
	handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
	options: Array<number | string>
}

export const Select = ({ name, value, handleChange, options }: TProps) => {
	return (
		<select className="p-2 border-solid border-2 rounded-sm border-slate-600" name={name} onChange={handleChange}>
			<option value="undefined" selected={value == undefined}>
				-
			</option>
			{options.map((option) => (
				<option key={option} value={option} selected={value == option}>
					{option}
				</option>
			))}
		</select>
	)
}
