"use client";

import axios from "axios";
import { useState } from "react";


type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed"

const useEmailCheckAvailability = () => {
    const [emailAvailablitiyStatus, setTmailAvailablitiyStatus] = useState<TStatus>("idle");
    const [enteredEmail, setEnteredEmail] = useState<string | null> (null)

    const checkEmailAvailability = async (email: string) => {
      setTmailAvailablitiyStatus("checking");
      setEnteredEmail(email);

      try {
const response = await axios.get(`http://localhost:5005/users?email=${email}`);
        console.log(response.data);
        if (response.data.length === 0) {
          setTmailAvailablitiyStatus("available");
        } else {
          setTmailAvailablitiyStatus("notAvailable");
        }
      } catch (error) {
        console.log(error);
        setTmailAvailablitiyStatus("failed");
      }

      
      
    };
    const resetCheckEmailAvailability = () => {
      setTmailAvailablitiyStatus("idle");
      setEnteredEmail(null);
    };

    return {
      emailAvailablitiyStatus,
      enteredEmail,
      checkEmailAvailability,
      resetCheckEmailAvailability,
    };
}
export default useEmailCheckAvailability