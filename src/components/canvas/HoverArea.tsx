"use client";

import { cn } from '@/lib/utils';
import React from 'react'
import { HoverAreaProps } from './types';
import { useRouter } from 'next/navigation';

export default function HoverArea({
	hoverAreaProps,
	showDefaultRectangle = true,
	className = '',
}: {
	hoverAreaProps: HoverAreaProps;
	showDefaultRectangle?: boolean;
	className?: string;
}) {
	const { left, top, width, height } = hoverAreaProps;
	const router = useRouter();

	return (
		<div
			className={cn("absolute border-2 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer group",
				showDefaultRectangle ? 'border-gray-300' : 'border-transparent',
				className
			)}
			onClick={() => {
				if (hoverAreaProps.nav) {
					router.push(hoverAreaProps.nav);
				}
			}}
			style={{
				left: `${left}%`,
				top: `${top}%`,
				width: `${width}%`,
				height: `${height}%`,
			}}
		>
			<div className="w-full h-full bg-transparent group-hover:bg-yellow-400/10 rounded transition-all duration-300" />
		</div>
	)
}