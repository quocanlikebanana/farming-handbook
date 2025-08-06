import React from 'react'
import Image from 'next/image'
import CanvasHoverArea from '@/components/canvas/CanvasHoverArea';

const hoverAreas = [
	{
		meta: '/lua/giai-doan-1',
		left: 0,
		top: 15,
		width: 15,
		height: 25
	},
	{
		meta: '/lua/giai-doan-2',
		left: 25,
		top: 20,
		width: 15,
		height: 30
	},
	{
		meta: '/lua/giai-doan-3',
		left: 40,
		top: 18,
		width: 15,
		height: 32
	},
	{
		meta: '/lua/giai-doan-4',
		left: 55,
		top: 16,
		width: 15,
		height: 35
	},
	{
		meta: '/lua/giai-doan-5',
		left: 70,
		top: 12,
		width: 20,
		height: 40
	},
];

export default function page() {
	return (
		<div className="max-w-4xl w-full">
			{/* Main Image */}
			<CanvasHoverArea
				hoverAreas={hoverAreas}
			>
				<Image
					src="/lua/giai-doan.png"
					alt="Plant Growth Stages"
					width={800}
					height={400}
					className="w-full h-auto rounded-lg shadow-lg"
					priority
				/>
			</CanvasHoverArea>
		</div>
	)
}



