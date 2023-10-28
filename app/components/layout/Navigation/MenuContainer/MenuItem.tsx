'use client'

import { useRouter, usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Menu.module.scss'
import cn from 'classnames'
import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<li
			className={cn({
				[styles.active]: pathname === item.link,
			})}
		>
			<button type="button" onClick={() => router.push(item.link)}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</button>
		</li>
	)
}

export default MenuItem
