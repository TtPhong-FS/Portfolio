import {
	DataTable,
	type PaginationState,
	type SortingState,
} from "@ttpfs/table-react";
import { type Selection } from "@ttpfs/ui-react";
import type React from "react";
import { useState } from "react";
import { columns } from "./Columns";
import { generateUsers } from "./types";

interface Props {}

const users = generateUsers(100);

export const UserListDataTable: React.FC<Props> = (props) => {
	const {} = props;

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

	const [sorting, setSorting] = useState<SortingState>([]);

	return (
		<DataTable
			columns={columns}
			data={users}
			onPaginationChange={setPagination}
			onSelectionChange={setSelectedKeys}
			onSortingChange={setSorting}
			pagination={pagination}
			selectedKeys={selectedKeys}
			sorting={sorting}
			tableId="users"
			totalElements={users.length}
		/>
	);
};
