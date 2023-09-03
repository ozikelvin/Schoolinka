import { Post } from "../Entity/Post";
import { DataSource } from "typeorm";
import {
	PostI,
	PostPaginationI,
	UpdatePostI,
} from "../Interfaces/blog.interface";

export class PostService {
	dataSource: DataSource;

	constructor(appDataSource: DataSource) {
		this.dataSource = appDataSource;
	}

	createBlogPost = async (blogData: PostI) => {
		const blog = await this.dataSource.getRepository(Post).findOne({
			where: { title: blogData.title },
		});
		if (blog) throw "This Post Already Exist";
		return await this.dataSource.getRepository(Post).save(blogData);
	};

	getBlogPost = async (blogId: string) => {
		return await this.dataSource.getRepository(Post).findOne({
			where: {
				id: blogId,
			},
		});
	};
	getAllBlogPost = async (blogDataP: PostPaginationI) => {
		const skip = (blogDataP.page - 1) * blogDataP.limit;
		const queryBuilder = this.dataSource
			.getRepository(Post)
			.createQueryBuilder("post");
		const total = await queryBuilder.getCount();

		const metadata = {
			total,
			currentPage: blogDataP.page,
			perPage: blogDataP.limit,
			next: 0,
		};
		// Calculate the next page
		if (total > skip + blogDataP.limit) {
			metadata["next"] = blogDataP.page + 1;
		}

		const posts = await queryBuilder.skip(skip).take(blogDataP.limit).getMany();

		return {
			metadata,
			posts,
		};
	};

	updateBlog = async (blogData: UpdatePostI) => {
		const blog = await this.getBlogPost(blogData.id);
		if (!blog) throw "Invalid Blog id";
		return await this.dataSource
			.getRepository(Post)
			.update(blog.id, { ...blogData });
	};

	deleteBlog = async (blogId: string) => {
		const blog = await this.getBlogPost(blogId);
		if (!blog) throw "Invalid Blog id";
		const deleteABlog = await this.dataSource
			.getRepository(Post)
			.delete(blog.id);
	};

	searchBlog = async (query: string) => {
		const results = await this.dataSource
			.getRepository(Post)
			.createQueryBuilder("post")
			.where("post.title LIKE :keywords OR post.body LIKE :keywords", {
				keywords: `%${query}%`,
			})
			.getMany();
		return results;
	};
}
