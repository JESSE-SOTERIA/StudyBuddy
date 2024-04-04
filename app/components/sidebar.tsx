'use client'

export default function Sidebar(){
    return(
      <section className="w-1/6 h-screen flex flex-col p-6">


        <section className="flex  basis-1/12 justify-between items-center">
          <div className="flex">
              <div className="h-3 w-2 bg-orange-400 ml-1 self-end"></div>
              <div className="h-5 w-2 bg-green-500 ml-1 self-end"></div>
              <div className="h-7 w-2 bg-red-500 ml-1 self-end"></div>
              <h2 className=" self-end justify-items-end ml-3 text-lg text-customDark">StudyBuddy</h2>
          </div>
        </section>

        <section className="flex flex-col p-4 relative items-center h-1/4  basis-2/5">
              <img src="" alt="ProfilePicture" className="h-24 w-24 rounded-full  bg-customDark" />
              <div className="h-5 w-16 rounded-full bg-white justify-center align-center flex absolute top-24   text-black shadow-sm ">details</div>
              <h3 className="text-lg pt-7">soteria</h3>
              <p className=" text-gray-400 pt-3">soterialawrence009@gmail.com</p>
        </section>

        <section className="flex flex-col p-4 grow justify-around items-center text-black">
              <button className="w-full h-10 focus:bg-red-500 rounded-md">feature</button>
              <button className="w-full h-10 focus:bg-red-500 rounded-md">feature</button>
              <button className="w-full h-10 focus:bg-red-500 rounded-md">feature</button>
              <button className="w-full h-10 focus:bg-red-500 rounded-md">feature</button>
              <button className="w-full h-10 focus:bg-red-500 rounded-md">feature</button>
        </section> 

      </section>
    )
}