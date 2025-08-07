"use client";

import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import Title from './Title'
import Navigation from './Navigation'
import UserMenu from './UserMenu'

export default function MobileSidebar() {
	const [isOpen, setIsOpen] = useState(false)

	// Function to close the sheet when navigation occurs
	const handleNavigationClose = () => {
		setIsOpen(false)
	}

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="text-white hover:bg-gray-800"
				>
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-64 p-0 bg-gray-900 border-gray-800"
			>
				<SheetTitle className="text-white bg-gray-800 px-4 py-3 border-b border-gray-800 ">
					<Title />
				</SheetTitle>
				<div className="flex flex-col h-full" onClick={handleNavigationClose}>
					<Navigation />
					<UserMenu />
				</div>
			</SheetContent>
		</Sheet>
	)
}
