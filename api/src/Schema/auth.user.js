import { z } from "zod"

// Z => se usa para validar

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    }).max(15, {
        message: "The password has a maximum of 15 characters"
    }),
    profile: z.string({
        required_error: "Profile is required"
    })
}) 


export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    }).max(15, {
        message: "The password has a maximum of 15 characters"
    })
}) 