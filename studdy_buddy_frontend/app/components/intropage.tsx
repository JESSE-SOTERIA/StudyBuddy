import Link from "next/link"






export default function Intro(){
   

    return(
        <div className="bg-black h-4/5 flex flex-col justify-center items-center bg-orange">

            <h1 className="text-customWhite text-7xl m-2">Study like never before!</h1>
            <h3 className="text-customWhite text-2xl m-1">enter the days of productive studying with structured, research-backed methods.</h3>
            <h6 className="text-customLightGreen m-1">powered by AI</h6>
            <section className = "flex">
                <button className="m-5 h-10 w-28 rounded-md bg-customWhite text-customBlack text-bold "><Link href="/authentication">get started</Link></button>
                <button className="m-5 h-10 w-28 rounded-md bg-customGreen text-customBlack text-bold"><Link href = "/infopage">learn more</Link></button>
            </section>
            <h4 className = "text-customWhite text-xl m-2">learn anything, fast, with the power of artificial intelligence at your fingertips</h4>



        </div>
    )
}