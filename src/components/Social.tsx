import { Icon, Tooltip } from "@ttpfs/ui-react";
import type React from "react";
import { ZaloIcon } from "./icons";

export const Social: React.FC = () => {
	return (
		<div className="items-center flex gap-3 md:gap-4 lg:gap-5">
			<Tooltip>
				<Tooltip.Trigger>
					<a
						className="inline-flex"
						href="https://www.facebook.com/torischto01.smr"
						rel="noreferrer"
						target="_blank"
					>
						<Icon name="facebook" size="xl" variant="color" />
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content>Follow Me on Facebook</Tooltip.Content>
			</Tooltip>
			<Tooltip>
				<Tooltip.Trigger>
					<a
						className="inline-flex"
						href="https://github.com/TtPhong-FS"
						rel="noreferrer"
						target="_blank"
					>
						<Icon
							className="dark:fill-white"
							name="github"
							size="xl"
							variant="outline"
						/>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content>Go to GitHub Profile</Tooltip.Content>
			</Tooltip>
			<Tooltip>
				<Tooltip.Trigger>
					<a
						className="inline-flex"
						href="https://zalo.me/+84393150468"
						rel="noreferrer"
						target="_blank"
					>
						<ZaloIcon className="size-7" />
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content>Contact me on zalo</Tooltip.Content>
			</Tooltip>
		</div>
	);
};
