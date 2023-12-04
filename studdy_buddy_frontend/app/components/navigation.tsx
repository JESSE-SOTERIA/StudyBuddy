import Link from "next/link"




export default function Nav(){
   
    return(
        <div className="flex flex-row justify-between items-center h-20 bg-customBlack">
            <Link href="/"><img src="#" alt="Site logo" /></Link>
            <button><Link href="" scroll = {false}>item1</Link></button>
            <button><Link href="" scroll = {false}>item2</Link></button>
            <button><Link href="" scroll = {false}>item3</Link></button>

        </div>
    )
}