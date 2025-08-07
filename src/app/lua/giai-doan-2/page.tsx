import React from 'react'

export default function GiaiDoan2Page() {
	return (
		<div className="max-w-4xl w-full">
			<div className="bg-white/10 rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-4">Giai đoạn 2 - Mạ non</h1>
				<p className="text-lg mb-4">
					Giai đoạn mạ non, cây lúa bắt đầu phát triển mạnh mẽ.
				</p>
				<div className="grid gap-4">
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Thời gian:</h3>
						<p>7-21 ngày sau gieo</p>
					</div>
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Đặc điểm:</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>Lá thật đầu tiên xuất hiện</li>
							<li>Hệ rễ phát triển mạnh</li>
							<li>Cây cao khoảng 10-15cm</li>
						</ul>
					</div>
					<div className="bg-white/5 rounded p-4">
						<h3 className="font-semibold mb-2">Chăm sóc:</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>Tưới nước đều đặn</li>
							<li>Bón phân lót</li>
							<li>Làm cỏ, xới đất</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
