import React from 'react'

export default function ThuocPage() {
	return (
		<div className="max-w-4xl w-full">
			<div className="bg-white/10 rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-4">Thuốc bảo vệ thực vật</h1>
				<p className="text-lg mb-6">
					Hướng dẫn sử dụng thuốc bảo vệ thực vật an toàn và hiệu quả.
				</p>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Loại thuốc</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Thuốc trừ sâu</li>
							<li>• Thuốc diệt nấm</li>
							<li>• Thuốc diệt cỏ</li>
							<li>• Thuốc kích thích sinh trưởng</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Cách sử dụng</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Đọc kỹ hướng dẫn</li>
							<li>• Pha đúng tỷ lệ</li>
							<li>• Chọn thời điểm phù hợp</li>
							<li>• Sử dụng đồ bảo hộ</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">An toàn</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Bảo quản đúng cách</li>
							<li>• Tránh xa trẻ em</li>
							<li>• Không ăn uống khi xịt</li>
							<li>• Vệ sinh sau sử dụng</li>
						</ul>
					</div>

					<div className="bg-white/5 rounded p-6">
						<h3 className="text-xl font-semibold mb-3">Thời gian cách ly</h3>
						<ul className="space-y-2 text-gray-300">
							<li>• Tuân thủ thời gian chờ</li>
							<li>• Kiểm tra dư lượng</li>
							<li>• Đảm bảo an toàn thực phẩm</li>
							<li>• Ghi chép sử dụng</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
