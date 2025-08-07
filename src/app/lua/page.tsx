import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-4">Các giai đoạn phát triển của lúa</h1>
				<p className="text-lg text-gray-300 mb-6">
					Tìm hiểu về các giai đoạn phát triển của cây lúa từ gieo hạt đến thu hoạch.
				</p>
			</div>

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

			{/* Quick Links */}
			<div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
				<Link
					href="/lua/giai-doan-1"
					className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
				>
					<div className="font-semibold">Giai đoạn 1</div>
					<div className="text-sm text-gray-300">Gieo hạt</div>
				</Link>
				<Link
					href="/lua/giai-doan-2"
					className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
				>
					<div className="font-semibold">Giai đoạn 2</div>
					<div className="text-sm text-gray-300">Mạ non</div>
				</Link>
				<div className="bg-white/5 rounded-lg p-4 text-center opacity-50">
					<div className="font-semibold">Giai đoạn 3</div>
					<div className="text-sm text-gray-300">Sắp có</div>
				</div>
				<div className="bg-white/5 rounded-lg p-4 text-center opacity-50">
					<div className="font-semibold">Giai đoạn 4</div>
					<div className="text-sm text-gray-300">Sắp có</div>
				</div>
				<div className="bg-white/5 rounded-lg p-4 text-center opacity-50">
					<div className="font-semibold">Giai đoạn 5</div>
					<div className="text-sm text-gray-300">Sắp có</div>
				</div>
			</div>
		</div>
	)
}



