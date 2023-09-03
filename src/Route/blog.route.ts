import { Router} from 'express';
import { createBlog , getAllBlogs, getBlog, deleteBlog, updateBlog , searchBlog } from '../Controller/blog.controller';

const routes = Router();

// Create Blog Post
routes.post("/create-blog", createBlog);

// Get Blog by Id
routes.post("/get-blog", getBlog);

// Get All blogs
routes.post("/get-blogs", getAllBlogs);

// Update blog
routes.post("/update-blog", updateBlog);

// Delete blog
routes.post("/delete-blog" , deleteBlog);

// Search Blog
routes.post("/search-blog", searchBlog);

export default routes;