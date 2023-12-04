import Link from "next/link"






// export default function Login(){
//     return(
      
//           <div className="bg-yellow-500 h-80 w-80 rounded-lg p-4">
//             <img src="#" alt="site Logo" />
//             <h1 className="bg-red-500 items-center">StudyBuddy</h1>
           
//             <form action="" className="flex flex-col   ">
//                 <input className ="rounded-md p-1 m-1" type="text" placeholder="username" />
//                 <input className="rounded-md p-1 m-1" type="e-mail" placeholder="e-mail" />
//                 <input className="rounded-md p-1 m-1" type="password" placeholder="password" />
//             </form>
//             <div className="flex">
//                 <div className="flex">
//                     <input type="checkbox" className="h-6 w-6 text-indigo-600 transition duration-150 ease-in-out rounded-sm focus:ring-2 focus:ring-indigo-500" />
//                     <p>keep me logged in</p>
//                 </div>

//                 <p>forgot password</p>
//             </div>
//             <button type="submit">log in</button>




//         </div>

        
//     )
// }


export default function Login() {
    return (
      <div className="bg-black h-80 w-80 rounded-lg p-4 flex flex-col justify-between">
        <div className="text-center">
          <img src="#" alt="site Logo" />
          <h1 className=" text-white text-xl py-2 rounded mt-2">StudyBuddy</h1>
        </div>
  
        <form action="" className="flex flex-col mt-4">
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="text" placeholder="Username" />
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="password" placeholder="Password" />
        </form>
  
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 mr-1 text-indigo-600 transition duration-150 ease-in-out rounded-sm focus:ring-2 focus:ring-indigo-500"
            />
            <p>Keep me logged in</p>
          </div>
          <a href="" className="text-cutomLightGreen"><p className="text-customLightGreen">Forgot password</p></a>
        </div>
  
        <button className="bg-customLightGreen text-white py-2 rounded mt-4" type="submit">
          Log in
        </button>
      </div>
    );
  }
  


//   export default function Login() {
//     return (
//       <div className="bg-yellow-500 h-96 w-96 rounded-lg p-6 flex flex-col justify-between">
//         <div className="text-center">
//           <img src="#" alt="site Logo" className="w-24 h-24 mx-auto" />
//           <h1 className="bg-red-500 text-white text-3xl py-3 rounded mt-4">StudyBuddy</h1>
//         </div>
  
//         <form action="" className="flex flex-col mt-6">
//           <input className="rounded-md p-2 m-2 text-lg" type="text" placeholder="Username" />
//           <input className="rounded-md p-2 m-2 text-lg" type="email" placeholder="E-mail" />
//           <input className="rounded-md p-2 m-2 text-lg" type="password" placeholder="Password" />
//         </form>
  
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="h-5 w-5 mr-2 text-indigo-600 transition duration-150 ease-in-out rounded-sm focus:ring-2 focus:ring-indigo-500"
//             />
//             <p className="text-lg">Keep me logged in</p>
//           </div>
//           <p className="text-lg">Forgot password</p>
//         </div>
  
//         <button className="bg-blue-500 text-white py-3 rounded mt-6 text-xl" type="submit">
//           Log in
//         </button>
//       </div>
//     );
//   }
  