import { Post } from "../Entity/Post";
import { AppDataSource } from "../Utils/db.config";
import { PostService } from "../Service/blog.service";
import { Request , Response } from "express";
import { validateData } from "../Utils/validation";
import { BlogSchema, BlogId, UpdateBlogSchema, GetBlog , QuerySearch } from "../Dto/blog.dto";

const postService = new PostService(AppDataSource);


const createBlog = async(req: Request , res: Response) => {
    try{
    const validate = await validateData(res , BlogSchema, req.body);
    if(validate?.statusCode === undefined){
        const blog = new Post();
        blog.title = req.body.title;
        blog.author = req.body.author;
        blog.body = req.body.body;
        blog.comment = req.body.comment;
        const createBlog = await postService.createBlogPost(blog);
        return res.status(200).json({
            message: "Successfully created blog",
            status: true,
            data:createBlog
        });
    }
    }catch(err){
        return res.status(400).json({
            message: err ?? "There was an error creating blog",
            status: false,
            error: err
        });
    }
}

const getBlog = async(req: Request , res: Response) => {
    try{
        const validate = await validateData(res , BlogId, req.body);
        if(validate?.statusCode === undefined){
            const blog = await postService.getBlogPost(req.body.id);
            return res.status(200).json({
                message: "Successfully gotten blog",
                status: true,
                data:blog
            });
        }
    }catch(err){
        return res.status(400).json({
            message: err ?? "There was an error getting blog",
            status: false,
            error: err
        });
    }
}

const updateBlog = async(req: Request , res: Response) => {
try{
    const validate = await validateData(res , UpdateBlogSchema, req.body);
    if(validate?.statusCode === undefined) {
        const updatedBlog = await postService.updateBlog(req.body);
        return res.status(200).json({
            message: "Successfully updated blog",
            status: true,
            data:updatedBlog
        });
    }
}catch(err){
    return res.status(400).json({
        message: err ?? "There was an error updating blog",
        status: false,
        error: err
    });
}
}

const getAllBlogs = async(req: Request , res: Response) =>{
    try{
        const validate = await validateData(res , GetBlog, req.body);
        if(validate?.statusCode === undefined) {
            const blogs = await postService.getAllBlogPost({
                page: req.body.page ?? 1,
                limit: req.body.limit ?? 5
            });
            return res.status(200).json({
                message: "Successfully gotten blogs",
                status: true,
                data:blogs
            });
        }
    }catch(err){
        return res.status(400).json({
            message: err ?? "There was an error getting blog",
            status: false,
            error: err
        });
    }
}

const deleteBlog =  async(req: Request , res: Response) => {
    try{
        const validate = await validateData(res , BlogId, req.body);
        if(validate?.statusCode === undefined) {
            const deleteABlog = await postService.deleteBlog(req.body.id);
            return res.status(200).json({
                message: "Successfully deleted blogs",
                status: true,
            });
        }
    }catch(err){
        return res.status(400).json({
            message: err ?? "There was an error delete blog",
            status: false,
            error: err
        });
    }
}

const searchBlog = async(req: Request , res: Response) => {
    try{
        const validate = await validateData(res , QuerySearch, req.body);
        if(validate?.statusCode === undefined) {
            const results = await postService.searchBlog(req.body.query);
            return res.status(200).json({
                message: "Search results",
                status: true,
                data: results
            });
        }
    }catch(err){
        return res.status(400).json({
            message: err ?? "There was an error searching blog",
            status: false,
            error: err
        });
    }
}

export {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog,
    searchBlog
}