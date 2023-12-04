 'use client'
import { useState,useEffect } from "react";
import Login from "../components/loginform";
/**
 * Authenticate page component that handles user login and signup.
 * Renders either the Login or Signup component based on isNewUser state.
 * Allows toggling between login and signup modes.
 */
import Signup from "../components/signupform";

export default function Authenticate() {
  const [isNewUser, setIsNewUser] = useState(true);
  

  const renderAlternateForm = (isNew: boolean) => {
    setIsNewUser(isNew);

  };

  const activeForm = (form: HTMLButtonElement) => {
    if (isNewUser){
      form.classList.add("border-b-2", "border-customLightGreen");
    }
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-center">
        <button className={`p-5 ${isNewUser ?`border-b-3 border-black`:`border-b-3 border-customLightGreen`}`} onClick={() => renderAlternateForm(false)}>Login</button>
        <div></div>
        <button className={`p-5 ${isNewUser ?`border-b-3 border-customLightGreen`:`border-b-3 border-black`}`} onClick={() => renderAlternateForm(true)}>Signup</button>
      </div>
      {isNewUser ? <Signup /> : <Login />}
    </div>
  );
}
