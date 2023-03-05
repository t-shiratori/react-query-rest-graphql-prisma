import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <Link href={'/'}>Home</Link>
      </nav>
      <div>{children}</div>
    </div>
  )
}
