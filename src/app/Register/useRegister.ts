"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  registerSchema,
  type registerType,
} from "../../validations/registerSchema";
import useEmailCheckAvailability from "@/hooks/useEmailCheckAvailability";

export default function useRegister() {
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const {
    emailAvailablitiyStatus, 
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useEmailCheckAvailability(); 


   const submitForm: SubmitHandler<registerType> = (data) => {
     console.log(data);
   };


  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email"); // Triggers validation check on blur
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      // If email is changed and valid, check availability
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && enteredEmail) resetCheckEmailAvailability();
  };

  return {
    register,
    handleSubmit,
    submitForm,
    formState: { errors },
    emailOnBlurHandler,
    emailAvailabilityStatus: emailAvailablitiyStatus, 
  };
}
