import React from 'react'
import Title from './Title'
import UserMenu from './UserMenu'
import Navigation from './Navigation'
import Wrapper from './Wrapper'

export default function DesktopSidebar() {
	return (
		<Wrapper>
			<Title />
			<Navigation />
			<UserMenu />
		</Wrapper>
	);
}
