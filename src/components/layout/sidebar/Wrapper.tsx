"use client";

import React from 'react'
import { motion } from 'motion/react'
import { containerVariants } from './variants'

export default function Wrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<motion.div
			className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{children}
		</motion.div>
	)
}
