import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-4xl w-full">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">Sổ tay nông nghiệp</h1>
				<p className="text-xl text-gray-300 mb-8">
					Hướng dẫn toàn diện về trồng trọt và chăm sóc cây trồng
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Link
						href="/lua"
						className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors group"
					>
						<div className="text-2xl mb-4">🌾</div>
						<h3 className="text-xl font-semibold mb-2">Lúa</h3>
						<p className="text-gray-300">Tìm hiểu về các giai đoạn phát triển của cây lúa</p>
					</Link>

					<Link
						href="/dat"
						className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors group"
					>
						<div className="text-2xl mb-4">🌱</div>
						<h3 className="text-xl font-semibold mb-2">Đất</h3>
						<p className="text-gray-300">Quản lý và cải tạo đất nông nghiệp</p>
					</Link>

					<Link
						href="/thuoc"
						className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors group"
					>
						<div className="text-2xl mb-4">🧪</div>
						<h3 className="text-xl font-semibold mb-2">Thuốc</h3>
						<p className="text-gray-300">Hướng dẫn sử dụng thuốc bảo vệ thực vật</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
