import {z} from "zod";

export const  RegistrationSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 Characters").max(30),
    email: z.email({error: () => "Invalid email"}),
    password: z.string().min(6,{message: "Password must be at least 6 characters long"}).max(100),
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})