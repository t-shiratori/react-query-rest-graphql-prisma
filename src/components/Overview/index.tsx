import { ReactNode } from 'react'

type TProps = {
  className?: string
  children?: ReactNode
}

export const Overview = ({ className, children }: TProps) => {
  return <div className={`p-2 border-solid border rounded border-slate-600 mb-8 ${className}`}>{children}</div>
}
