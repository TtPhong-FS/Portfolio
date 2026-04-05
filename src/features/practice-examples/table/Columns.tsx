import { createColumnHelper } from "@ttpfs/table-react";
import { Chip } from "@ttpfs/ui-react";
import { type User } from "./types";

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
	Active: "success",
	Inactive: "danger",
	"On Leave": "warning",
};

// --- TanStack Column Definitions ------------------------------------------
const columnHelper = createColumnHelper<User>();
export const columns = [
	columnHelper.accessor("name", { header: "Name", meta: { label: "Tên" } }),
	columnHelper.accessor("role", { header: "Role", meta: { label: "Vai trò" } }),
	columnHelper.accessor("status", {
		cell: (info) => (
			<Chip color={statusColorMap[info.getValue()]} size="sm" variant="soft">
				{info.getValue()}
			</Chip>
		),
		header: "Status",
		meta: { label: "Trạng thái" },
	}),
	columnHelper.accessor("email", { header: "Email", meta: { label: "Email" } }),
];
