
import Login from "../components/loginform";
import Signup from "../components/signupform";


export default function Authenticate(){
  let isLoggedIn = false;
  let isNewUser = true;
   
   
   
    return(
            isNewUser ? <Signup></Signup> : <Login></Login>
    )
}