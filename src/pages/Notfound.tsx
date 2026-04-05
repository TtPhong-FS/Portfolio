import { ShootingStars, StarsBackground } from "@/components";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";

export const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	const router = useRouter();

	return (
		<div className="min-h-screen bg-black flex items-center justify-center px-6 py-24">
			<div className="text-center">
				{/* Phần số 404 với hiệu ứng Gradient và Floating */}
				<motion.h1
					animate={{ opacity: 1, y: 0 }}
					className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-2xl"
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					404
				</motion.h1>

				{/* Thông điệp chính */}
				<motion.div
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
						Có vẻ bạn đang bị lạc?
					</h2>
					<p className="mt-4 text-slate-400 max-w-md mx-auto leading-relaxed">
						Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển sang một
						"vũ trụ" khác. Đừng lo, hãy để chúng tôi dẫn đường cho bạn.
					</p>
				</motion.div>

				{/* Nút điều hướng */}
				<motion.div
					animate={{ opacity: 1, scale: 1 }}
					className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					transition={{ delay: 1, duration: 0.5 }}
				>
					<button
						className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-95"
						onClick={() =>
							navigate({
								to: "/",
							})
						}
						type="button"
					>
						Về Trang Chủ
					</button>

					<button
						className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-full border border-slate-700 transition-all duration-300 active:scale-95"
						onClick={() => router.history.back()}
						type="button"
					>
						Quay Lại
					</button>
				</motion.div>

				{/* Hiệu ứng trang trí nền (Glow Effect) */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>
			</div>
			<ShootingStars />
			<StarsBackground />
		</div>
	);
};
