export default function DashboardSection2() {


    let parameter: string = 'you are my special'
    let stats: string = "this is where your stats will reside"
    let daily: string = "this is where your daily talks will reside pending to be accomplished"


    return (
    <section className="flex flex-col  h-screen grow  rounded-tr-lg rounded-br-lg border-l-2 border-slate-500 p-7 text-black bg-pink-500">



        <section className=" flex">
            <div className="grow ">
                <h1 className="text-lg">Hello, Soteria</h1>
                <p className="">sunday 2nd December, 2023</p>
            </div>
            <div className="flex items-center">
                <input type="text" placeholder="Search" className="rounded-full p-1 text-customDark focus:ring-0 focus:bg-slate-100 focus:outline-none" />
                <button className="bg-customDark p-1 rounded-md ml-1 text-white">Add New Project</button>
            </div>
        </section>

        <section className="  w-full flex p-3 justify-evenly">

               {parameter}
        </section>



        <section className=" grow flex">

            <section className="flex flex-col justify-around">
                <h1>Tasks for today</h1>
                    {daily}
            </section>

            <section className="flex flex-col">
                <h1>Statistics</h1>
                <div id= "statcardsSection" className="flex justify-around bg-lightblue">
                    {stats}
                </div>
                <div className=" bg-white h-28 2-28 rounded-lg">
                    Premium
                </div>
            </section>
        </section>


        </section>
    )
}