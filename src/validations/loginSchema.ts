import z from "zod";



const LoginSchema = z.object({
    email: z.string().email().min(8 , { message: "Email is required" }),
    password: z.string().min(8).min(8 , { message: "Password is required" }),
})

type loginType = z.infer<typeof LoginSchema>


export { type loginType , LoginSchema };
