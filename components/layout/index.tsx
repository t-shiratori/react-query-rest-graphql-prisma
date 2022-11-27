import Link from 'next/link'
import { ReactNode } from 'react'
import styles from '../../styles/Layout.module.css'

type Props = {
	children: ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<nav className={styles.nav}>
				<Link href={'/'}>Home</Link>
			</nav>
			<div>{children}</div>
		</>
	)
}
