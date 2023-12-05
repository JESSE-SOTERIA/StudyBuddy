import Sidebar from "../components/sidebar"
import DashboardSection2 from "../components/dashboardsection2"
import DashboardSection3 from "../components/dashboadsection3"


export default function Dashboard(){
    return(
       <div className="flex  bg-white">

        <Sidebar></Sidebar>
        <DashboardSection2></DashboardSection2>
        <DashboardSection3></DashboardSection3>
       

       </div>
       
       
       
       
    )
}