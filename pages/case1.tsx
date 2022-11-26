import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useHogeApi } from '../hooks/useFetch'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data } = useHogeApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return <div className={styles.container}>case1</div>
}

export default Home
