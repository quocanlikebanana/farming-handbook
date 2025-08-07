import React from 'react'

export default function GiaiDoan1Page() {
	return (
		<div className="max-w-4xl w-full">
			<div className="bg-white/10 rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-4">Giai đoạn 1 - Gieo hạt</h1>
				<p className="text-lg mb-4">
					Đây là giai đoạn đầu tiên trong quá trình trồng lúa - giai đoạn gieo hạt.
				</p>
				<div className="grid gap-4">
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Thời gian:</h3>
						<p>0-7 ngày sau gieo</p>
					</div>
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Đặc điểm:</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>Hạt giống bắt đầu nảy mầm</li>
							<li>Rễ chính phát triển</li>
							<li>Lá mầm xuất hiện</li>
						</ul>
					</div>
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Chăm sóc:</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>Giữ ẩm độ đất phù hợp</li>
							<li>Tránh ngập úng</li>
							<li>Bảo vệ khỏi sâu bệnh</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
