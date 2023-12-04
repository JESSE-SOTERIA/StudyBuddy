import Link from "next/link"

export default function Login() {
    return (
      <div className="bg-black h-80 w-80 rounded-lg p-4 flex flex-col justify-between ">
        <div className="text-center">
          <img src="#" alt="site Logo" />
          <h1 className="text-white text-xl py-2 rounded mt-2">StudyBuddy</h1>
        </div>
  
        <form action="" className="flex flex-col mt-4">
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="text" placeholder="Username" />
          <input className="rounded-md p-1 m-1 text-black focus:outline-none focus:ring-2 focus:ring-customLightGreen" type="email" placeholder="E-mail" />
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
          <a href="" className="text-cutomLightGreen"><p className="text-customLightGreen">Have an account?</p></a>
        </div>
  
        <button className="bg-customLightGreen text-white py-2 rounded mt-4" type="submit">
         <Link href="/dashboard">Sign up</Link>
        </button>
      </div>
    );
  }
  