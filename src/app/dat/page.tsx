import React from 'react'

export default function DatPage() {
	return (
		<div className="max-w-4xl w-full">
			<div className="bg-white/10 rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-4">Quản lý đất nông nghiệp</h1>
				<p className="text-lg mb-6">
					Tìm hiểu về các phương pháp quản lý và cải tạo đất để tăng năng suất cây trồng.
				</p>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Phân tích đất</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Đo pH đất</li>
							<li>• Kiểm tra độ dinh dưỡng</li>
							<li>• Phân tích cấu trúc đất</li>
							<li>• Đánh giá độ thoát nước</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Cải tạo đất</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Bón phân hữu cơ</li>
							<li>• Điều chỉnh độ pH</li>
							<li>• Cải thiện cấu trúc đất</li>
							<li>• Tăng khả năng giữ nước</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Bảo vệ đất</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Chống xói mòn</li>
							<li>• Luân canh cây trồng</li>
							<li>• Che phủ đất</li>
							<li>• Quản lý nước tưới</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Theo dõi</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Kiểm tra định kỳ</li>
							<li>• Ghi chép số liệu</li>
							<li>• Đánh giá hiệu quả</li>
							<li>• Điều chỉnh phương pháp</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
