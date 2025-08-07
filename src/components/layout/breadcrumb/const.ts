export const pathLabelMap: Record<string, string> = {
	'': 'Trang chủ',
	'lua': 'Lúa',
	'dat': 'Đất',
	'thuoc': 'Thuốc',
	'giai-doan-1': 'Giai đoạn 1',
	'giai-doan-2': 'Giai đoạn 2',
	'giai-doan-3': 'Giai đoạn 3',
	'giai-doan-4': 'Giai đoạn 4',
	'giai-doan-5': 'Giai đoạn 5',
}

export const getSegmentLabel = (segment: string): string => {
	return pathLabelMap[segment] || "unknown";
}

