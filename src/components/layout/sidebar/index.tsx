import React from 'react'
import MobileSidebar from './MobileSidebar'
import DesktopSidebar from './DesktopSidebar'

export default function Sidebar() {
	return (
		<div className="flex flex-col">
			<div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
				<MobileSidebar />
			</div>

			<div className="hidden md:block h-full">
				<DesktopSidebar />
			</div>
		</div>
	)
}
