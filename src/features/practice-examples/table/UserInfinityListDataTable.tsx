import { InfinityDataTable, type SortingState } from "@ttpfs/table-react";
import { type Selection } from "@ttpfs/ui-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";
import { columns } from "./Columns";
import { generateUsers, type User } from "./types";

const ITEMS_PER_PAGE = 6;

const allUsers = generateUsers(80);

export const UserInfinityListDataTable: React.FC = () => {
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

	const [sorting, setSorting] = useState<SortingState>([]);

	const [items, setItems] = useState<User[]>(() =>
		allUsers.slice(0, ITEMS_PER_PAGE),
	);
	const [isLoading, setIsLoading] = useState(false);
	const isLoadingRef = useRef(false);
	const hasMore = items.length < allUsers.length;

	const loadMore = useCallback(() => {
		if (!hasMore || isLoadingRef.current) return;
		isLoadingRef.current = true;
		setIsLoading(true);
		setTimeout(() => {
			setItems((prev) => allUsers.slice(0, prev.length + ITEMS_PER_PAGE));
			setIsLoading(false);
			requestAnimationFrame(() => {
				isLoadingRef.current = false;
			});
		}, 300);
	}, [hasMore]);

	return (
		<InfinityDataTable
			columns={columns}
			data={items}
			enableSelection
			isFetching={isLoading}
			onLoadMore={loadMore}
			onSelectionChange={setSelectedKeys}
			onSortingChange={setSorting}
			selectedKeys={selectedKeys}
			sorting={sorting}
			tableId="infinity-users"
			totalElements={allUsers.length}
		/>
	);
};
