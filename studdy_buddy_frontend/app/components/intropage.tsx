import Link from "next/link"





export default function Intro(){
   

    return(
        <div className="bg-black h-4/5">

            <h1 className="text-customWhi">Study like never before!</h1>
            <h3 className="text-customWhite">enter the days of productive studying with structured, research-backed methods.</h3>
            <h6 className="text-customLightGreen">powered by AI</h6>
            <section className = "flex">
                <button className="m-5 h-10 w-28 rounded-md bg-customWhite text-customBlack text-bold "><Link href="/authentication">get started</Link></button>
                <button className="m-5 h-10 w-28 rounded-md bg-customGreen text-customBlack text-bold">learn more</button>
            </section>
            <h4 className = "text-customWhite">learn anything, fast, with the power of artificial intelligence at your fingertips</h4>



        </div>
    )
}