"use client";

import { motion } from 'motion/react'
import React from 'react'
import { containerVariants, itemVariants } from './variants'
import { NavigationItem } from './types'
import { Home, Users, BarChart3, FileText, Settings, HelpCircle } from 'lucide-react'
import NavigationLink from './NavigationLink'

const navigationItems: NavigationItem[] = [
	{
		label: 'Cây Lúa',
		icon: <Home size={20} />,
		href: '/lua',
	},
	{
		label: 'Thuốc Bảo Vệ Thực Vật',
		icon: <Users size={20} />,
		href: '/thuoc'
	},
	{
		label: 'Đất Đai',
		icon: <BarChart3 size={20} />,
		href: '/dat'
	},
];

export default function Navigation() {
	return (
		<motion.nav
			className="flex-1 p-4"
			variants={itemVariants}
		>
			<motion.ul
				className="space-y-2"
				variants={containerVariants}
			>
				{navigationItems.map((item) => (
					<NavigationLink
						key={item.href}
						item={item}
					/>
				))}
			</motion.ul>
		</motion.nav>

	)
}
