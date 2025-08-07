"use client";

import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationItem } from './types'
import { cn } from '@/lib/utils'
import { itemVariants } from './variants'

export default function NavigationLink({
	item,
}: {
	item: NavigationItem;
	isCollapsed?: boolean;
}) {
	const pathname = usePathname();
	const isActive = pathname === item.href;

	return (
		<motion.li
			variants={itemVariants}
			whileHover={{ x: 4 }}
			whileTap={{ scale: 0.98 }}
		>
			<Link
				href={item.href}
				className={cn(
					"flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
					isActive
						? "bg-blue-600 text-white shadow-lg"
						: "text-gray-300 hover:text-white hover:bg-gray-800"
				)}
			>
				<span className={cn(
					"transition-colors",
					isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
				)}>
					{item.icon}
				</span>
				<span className="font-medium">{item.label}</span>
				{isActive && (
					<motion.div
						layoutId="activeIndicator"
						className="ml-auto"
					>
						<ChevronRight size={16} />
					</motion.div>
				)}
			</Link>
		</motion.li>
	)
}
