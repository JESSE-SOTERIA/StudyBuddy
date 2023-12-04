export default function DashboardSection2() {



    return (
        <section className="flex flex-col  h-screen grow  rounded-tr-lg rounded-br-lg border-l-2 border-slate-500 p-7">



        <section className=" flex">
            <div className="grow ">
                <h1 className="text-lg">Hello, Soteria</h1>
                <p className="">sunday 2nd December, 2023</p>
            </div>
            <div className="flex items-center">
                <input type="text" placeholder="Search" className="rounded-full p-1 text-customDark focus:ring-0 focus:bg-slate-100 focus:outline-none" />
                <button className="bg-customLightGreen p-1 rounded-md ml-1 text-customDark">Add New Project</button>
            </div>
        </section>

        <section className="  w-full flex p-3">
           
               
        </section>
        <section className=" grow"></section>


        </section>
    )
}