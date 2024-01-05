import { z } from "zod";

export const taskSchema = z.object({
        title: z.string({
            required_error: "Title is required"
        }).min(3, {
            message: "title must be at least 3 characters"
        }),
        description: z.string({
            required_error: "Description is required"
        }).min(1, {
            message: "description is required"
        }),
        date: z.string().datetime().optional()
    });
