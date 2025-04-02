import zod from "zod";


 const registerSchema = zod
   .object({
     firstName: zod
       .string()
       .min(8, { message: "First name must be at least 8 characters long" })
       .max(20),
     lastName: zod
       .string()
       .min(8, { message: "Last name must be at least 8 characters long" })
       .max(20),
     email: zod
       .string()
       .min(8, { message: "Email must be at least 8 characters long" })
       .email(),
     password: zod
       .string()
       .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
         message: "Password must have a special character",
       })
       .min(8, { message: "Password must be at least 8 characters long" }),
     confirmPassword: zod.string().min(8),
   })
   .refine((input) => input.password === input.confirmPassword, {
     message: "Passwords do not match",
     path: ["confirmPassword"],
   });

type registerType = zod.infer<typeof registerSchema>;


export { type registerType, registerSchema }; 