'use client'

import { NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import MainProvider from 'providers/MainProvider'

const HomePage: NextPage = () => {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}

export default HomePage
