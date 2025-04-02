"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type loginType } from "../../validations/loginSchema";


export default function useLogin() {
    

 const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<loginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

const submitForm: SubmitHandler<loginType> = (data) => {
  console.log(data);
};



  return {
    submitForm,
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  }
}