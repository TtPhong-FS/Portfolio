import { about } from "@/data/aboutData";
import { Icon } from "@ttpfs/ui-react";

export const About = () => {
	return (
		<section
			className="px-4 py-10 md:py-20 md:px-8 bg-white dark:bg-black"
			id="about"
		>
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid mb-10">
					<span className="mb-2 block font-medium text-center text-lg">
						Introduce
					</span>
					<h4 className="text-3xl md:text-4xl text-center font-semibold">
						About <span className="text-purple">me</span>
					</h4>
				</div>
				<div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16">
					<div className="w-64 sm:w-80 rounded-3xl max-w-none">
						<img
							alt="TtPhong.dev"
							className="w-full rounded-3xl"
							src={"/me.jpg"}
						/>
					</div>
					<div className="flex flex-col">
						<div className="flex-1">
							<p className="text-sm md:text-base mb-10 max-w-2xl tracking-tighter text-neutral-800 dark:text-neutral-200">
								{about.description}
							</p>
							<ul className="grid min-[378px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-4xl">
								{about.skills.map((item) => {
									return (
										<li
											className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-2 duration-300 hover:bg-slate-300/10 dark:hover:bg-slate-700/30 hover:shadow-slate-700 hover:shadow-xl "
											key={item.key}
										>
											<Icon
												className="fill-neutral-800 dark:fill-neutral-200"
												name={item.icon}
												size="xl"
											/>
											<h3 className="py-3 font-semibold text-gray-700 dark:text-neutral-200">
												{item.title}
											</h3>
											<p className="text-sm text-gray-500 dark:text-neutral-400">
												{item.description}
											</p>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="flex flex-col md:flex-row justify-start items-start gap-4 mt-8 md:gap-8">
							{about.toolsAndTechnicals.map(({ id, icons, title, section }) => (
								<section id={section} key={id}>
									<p className="text-sm md:text-base mb-3 tracking-tighter text-gray-700 dark:text-neutral-200 text-start">
										{title}
									</p>
									<ul className="flex gap-2 md:gap-3">
										{icons.map((item, index) => {
											return (
												<li
													className="border inline-flex border-gray-400 rounded-xl p-4 cursor-pointer hover:-translate-y-2 duration-300 hover:bg-slate-300/10 dark:hover:bg-slate-700/30 hover:shadow-slate-700 hover:shadow-xl "
													key={index}
												>
													<Icon name={item} size="lg" variant="color" />
												</li>
											);
										})}
									</ul>
								</section>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
