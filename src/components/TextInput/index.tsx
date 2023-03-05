import { ChangeEvent } from 'react'

type TProps = {
  className?: string
  name?: string
  value?: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = ({ className, name, value, handleChange }: TProps) => {
  return (
    <input
      className={`p-2 border-solid border-2 rounded border-slate-600 ${className}`}
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    />
  )
}
