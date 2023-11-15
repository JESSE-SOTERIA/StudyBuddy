import Link from "next/link"

export default function Signup(){
    return(
        <div>
            <img src="#" alt="site Logo" />
            <h1>StudyBuddy</h1>
            <div>
                <Link href="">Log in</Link>
                <div></div>
                <Link href="">Sign up</Link>
            </div>

            <form action="" className="flex">
                <input type="text" placeholder="username" />
                <input type="e-mail" placeholder="e-mail" />
                <input type="password" placeholder="password" />
            </form>
            <div className="flex">
                <div className="flex">
                    <input type="checkbox" />
                    <p>keep me logged in</p>
                </div>

                <p>forgot password</p>
            </div>
            <button type="submit">sign up</button>




        </div>
    )
}