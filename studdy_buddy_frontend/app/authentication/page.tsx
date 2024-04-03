 'use client'
import { useState,useEffect } from "react";
import Login from "../components/loginform";
import  {useRouter} from "next/navigation"
import authContext from '../components/context';

/**
 * Authenticate page component that handles user login and signup.
 * Renders either the Login or Signup component based on isNewUser state.
 * Allows toggling between login and signup modes.
 */
import Signup from "../components/signupform";


interface AuthProps{
  newUser: boolean[];
}





const Authenticate: React.FC<AuthProps> = ({newUser}) => {
  const [isNewUser, setIsNewUser] = useState(true);
  

  const renderAlternateForm = (isNew: boolean) => {
    setIsNewUser(isNew);

  };


  function goToDashboard(){
    const router = useRouter();
    router.push("/dashboard");
  }

  const activeForm = (form: HTMLButtonElement) => {
    if (isNewUser){
      form.classList.add("border-b-2", "border-customLightGreen");
    }
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center" >
      <section className="flex justify-center" >
        <button className={`p-5 ${isNewUser ?`border-b-3 border-black`:`border-b-3 border-customLightGreen`}`} onClick={() => renderAlternateForm(false)}>Login</button>
        <div></div>
        <button className={`p-5 ${isNewUser ?`border-b-3 border-customLightGreen`:`border-b-3 border-black`}`} onClick={() => renderAlternateForm(true)}>Signup</button>
      </section>
      {isNewUser ? <Signup goToDashboard = {goToDashboard} renderAlternativeForm={renderAlternateForm} /> : <Login />}
    </div>
  );
}


export default Authenticate;