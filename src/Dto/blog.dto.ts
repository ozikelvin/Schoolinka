import Joi from "joi";

export const BlogSchema = Joi.object({
    author: Joi.string().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    comment: Joi.string().required()
});

export const BlogId = Joi.object({
    id:Joi.string().required()
});

export const UpdateBlogSchema = Joi.object({
    id: Joi.string().required(),
    author: Joi.string().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    comment: Joi.string().required()
});

export const GetBlog = Joi.object({
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1).max(30),
});

export const QuerySearch = Joi.object({
    query:Joi.string().required(),
})