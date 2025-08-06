"use client";

import { motion } from 'motion/react'
import React from 'react'
import { containerVariants, itemVariants } from './variants'
import { NavigationItem } from './types'
import { Home, Users, BarChart3, FileText, Settings, HelpCircle } from 'lucide-react'
import NavigationLink from './NavigationLink'

const navigationItems: NavigationItem[] = [
	{ id: 'home', label: 'Dashboard', icon: <Home size={20} />, href: '/', isActive: true },
	{ id: 'users', label: 'Users', icon: <Users size={20} />, href: '/users' },
	{ id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} />, href: '/analytics' },
	{ id: 'documents', label: 'Documents', icon: <FileText size={20} />, href: '/documents' },
	{ id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
	{ id: 'help', label: 'Help Center', icon: <HelpCircle size={20} />, href: '/help' },
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
						key={item.id}
						item={item}
					/>
				))}
			</motion.ul>
		</motion.nav>

	)
}
