'use client'
import {useState, ChangeEvent,useContext} from'react'
import axios, {AxiosResponse} from "axios";
import { routeModule } from 'next/dist/build/templates/app-page';
import React from 'react';
import authContext from './context';
import { useRouter } from 'next/';


interface SignupProps {
  renderAlternativeForm: (value: boolean)=> void;
  goToDashboard: ()=> void;
}



const  Signup: React.FC<SignupProps> = ({renderAlternativeForm, goToDashboard}) => {

const [userName, setuserName] = useState('');
const [password, setpassword] = useState('');
const [email, setemail] = useState('');
//const {isNewUser, setIsNewUser} = useContext(authContext);


function handleNameChange(event: ChangeEvent<HTMLInputElement>){
 const {name,value} = event.target;
  setuserName(value);
  console.log(userName)
}

function handlePasswordChange(event: ChangeEvent<HTMLInputElement>){
 const {name,value} = event.target;
 setpassword(value);
 console.log(password)
}

function handleEmailChange(event: ChangeEvent<HTMLInputElement>){
 const {name, value} = event.target;
  setemail(value);
  console.log(email)
}

function setIsNewUser(value: boolean){

    renderAlternativeForm(value)
}

function HandleSignup(){
  axios({
    method: 'post',
  url: 'http://localhost:4090/todos',
  data:{
    user:userName,
    password:password,
    email:email
  },
  headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  }
}).then(
  (response: AxiosResponse)=>{
    console.log(response.data)
    goToDashboard()
  }).catch(
    (error)=>{
      console.log(error.message)
    } 

  )
}


function showLoginForm(){
  renderAlternativeForm(false)
}


    return (
      <div className="bg-black h-80 w-80 rounded-lg p-4 flex flex-col justify-between ">
        <div className="text-center">
          <img src="#" alt="site Logo" />
          <h1 className="text-white text-xl py-2 rounded mt-2">StudyBuddy</h1>
        </div>
  
        <form action="" className="flex flex-col mt-4">
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="text" placeholder="Username" onChange={handleNameChange} />
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="email" placeholder="E-mail" onChange={handleEmailChange}/>
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="password" placeholder="Password" onChange={handlePasswordChange} />
        </form>
  
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 mr-1 text-indigo-600 transition duration-150 ease-in-out rounded-sm focus:ring-2 focus:ring-indigo-500"
            />
            <p>Keep me logged in</p>
          </div>
          <button onClick={()=> setIsNewUser(false)}>
          <a href="" className="text-cutomLightGreen"><p className="text-customLightGreen">Have an account?</p></a>
          </button>
          
        </div>
  
        <button className="bg-customLightGreen text-white py-2 rounded mt-4" type="submit" onClick={HandleSignup}>
        Signup
        </button>
      </div>
    );
  }
  


  export default Signup;