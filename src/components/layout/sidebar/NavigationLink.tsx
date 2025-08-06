"use client";

import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import React, { useState } from 'react'
import { NavigationItem } from './types'
import { cn } from '@/lib/utils'
import { itemVariants } from './variants'

export default function NavigationLink({
	item
}: {
	item: NavigationItem;
}) {
	const [activeItem, setActiveItem] = useState('home');

	return (
		<motion.li
			variants={itemVariants}
			whileHover={{ x: 4 }}
			whileTap={{ scale: 0.98 }}
		>
			<a
				href={item.href}
				onClick={() => setActiveItem(item.id)}
				className={cn(
					"flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
					activeItem === item.id
						? "bg-blue-600 text-white shadow-lg"
						: "text-gray-300 hover:text-white hover:bg-gray-800"
				)}
			>
				<span className={cn(
					"transition-colors",
					activeItem === item.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
				)}>
					{item.icon}
				</span>
				<span className="font-medium">{item.label}</span>
				{activeItem === item.id && (
					<motion.div
						layoutId="activeIndicator"
						className="ml-auto"
					>
						<ChevronRight size={16} />
					</motion.div>
				)}
			</a>
		</motion.li>
	)
}
