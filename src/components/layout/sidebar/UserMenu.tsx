"use client"

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { containerVariants, itemVariants } from './variants'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight, LogOut, User } from 'lucide-react'

const mockUser = {
	name: 'John Doe',
	email: 'john.doe@example.com',
	avatar: '/api/placeholder/40/40',
	isLoggedIn: true
}

export default function UserMenu() {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

	return (
		<motion.div
			className="p-4"
			variants={itemVariants}
		>
			{mockUser.isLoggedIn ? (
				<div className="space-y-3">
					{/* User Profile */}
					<motion.div
						className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 cursor-pointer"
						whileHover={{ backgroundColor: 'rgb(55, 65, 81)' }}
						onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
					>
						<Avatar className="h-8 w-8">
							<AvatarImage src={mockUser.avatar} alt={mockUser.name} />
							<AvatarFallback className="bg-blue-600 text-white text-sm">
								{mockUser.name.split(' ').map(n => n[0]).join('')}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-white truncate">
								{mockUser.name}
							</p>
							<p className="text-xs text-gray-400 truncate">
								{mockUser.email}
							</p>
						</div>
						<motion.div
							animate={{ rotate: isUserMenuOpen ? 90 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<ChevronRight size={16} className="text-gray-400" />
						</motion.div>
					</motion.div>

					{/* User Menu */}
					<AnimatePresence>
						{isUserMenuOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.2 }}
								className="space-y-1 overflow-hidden"
							>
								<Button
									variant="ghost"
									size="sm"
									className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
								>
									<User size={16} />
									Profile
								</Button>
								<Button
									variant="ghost"
									size="sm"
									className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
								>
									<LogOut size={16} />
									Sign Out
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			) : (
				/* Login/Signup Buttons */
				<motion.div
					className="space-y-2"
					variants={containerVariants}
				>
					<motion.div
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Button
							className="w-full bg-blue-600 hover:bg-blue-700 text-white"
						>
							Sign In
						</Button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Button
							variant="outline"
							className="w-full border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800"
						>
							Sign Up
						</Button>
					</motion.div>
				</motion.div>
			)}
		</motion.div>
	)
}
