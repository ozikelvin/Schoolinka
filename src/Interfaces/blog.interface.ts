export interface PostI {
	author: string;

	title: string;

	body: string;

	comment: string;
}

export interface PostPaginationI {
	page: number;

	limit: number;
}

export interface UpdatePostI extends PostI {
	id: string;
}
