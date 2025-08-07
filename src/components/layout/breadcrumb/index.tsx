'use client'

import React from 'react'
import Link from 'next/link'
import {
	Breadcrumb as BreadcrumbRoot,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
import { BreadcrumbItemType } from './types'
import { getSegmentLabel, pathLabelMap } from './const'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
	const pathname = usePathname();

	// Split pathname into segments and filter out empty strings
	const pathSegments = pathname.split('/').filter(segment => segment !== '')

	// Generate breadcrumb items
	const breadcrumbItems: BreadcrumbItemType[] = []

	// Add home item
	breadcrumbItems.push({
		label: pathLabelMap[''],
		href: '/',
		isHome: true
	})

	// Add path segments
	let currentPath = ''
	pathSegments.forEach((segment, index) => {
		currentPath += `/${segment}`
		breadcrumbItems.push({
			label: getSegmentLabel(segment),
			href: currentPath,
			isLast: index === pathSegments.length - 1
		})
	})

	// Don't render breadcrumb if we're on the home page
	if (pathname === '/') {
		return null
	}

	return (
		<BreadcrumbRoot className="bg-black/20 text-white md:p-4 p-2">
			<BreadcrumbList>
				{breadcrumbItems.map((item, index) => (
					<React.Fragment key={item.href}>
						<BreadcrumbItem>
							{item.isLast ? (
								<BreadcrumbPage className="flex items-center gap-2 text-white font-semibold cursor-default">
									{item.isHome && <Home className="h-4 w-4" />}
									{item.label}
								</BreadcrumbPage>
							) : (
								<BreadcrumbLink asChild>
									<Link
										href={item.href}
										className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
									>
										{item.isHome && <Home className="h-4 w-4" />}
										{item.label}
									</Link>
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</BreadcrumbRoot>
	)
}
