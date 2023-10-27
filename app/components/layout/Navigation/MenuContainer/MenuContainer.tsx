import { FC } from 'react'
import Menu from './Menu'
import { UserMenu, firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<Menu menu={UserMenu} />
		</div>
	)
}

export default MenuContainer
