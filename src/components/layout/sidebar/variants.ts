import { Variants } from "motion/react";

export const itemVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0 },
}

export const containerVariants: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			staggerChildren: 0.1
		}
	}
}

