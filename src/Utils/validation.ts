
import { Response } from "express";
import { Schema } from "joi";


export const validateData = async (res: Response, schema: Schema, data: { [key: string]: any }) => {
    try {
        const { error } = schema.validate(data);
        if (error) {
            return res.status(422).json({message:error.details[0].message})
        }
    } catch (err) {
        console.log(err);
        return res.status(422).json({
            message: "Something went wrong processing this request",
            status: false,
            error:err
        })
    }
}