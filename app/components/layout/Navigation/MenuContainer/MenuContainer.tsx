import { FC } from 'react'
import Menu from './Menu'
import { userMenu, firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
