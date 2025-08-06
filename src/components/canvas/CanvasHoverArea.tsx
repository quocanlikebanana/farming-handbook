import React from 'react'
import HoverArea from './HoverArea';
import { HoverAreaProps } from './types';

export default function CanvasHoverArea({
	children,
	hoverAreas,
	className = '',
}: {
	children: React.ReactNode;
	hoverAreas: HoverAreaProps[];
	className?: string;
}) {
	return (
		<div className={`relative w-full ${className}`}>
			{children}
			{hoverAreas.map((area, index) => (
				<HoverArea
					hoverAreaProps={area}
					key={index}
				/>
			))}
		</div>
	)
}
