
import Actionbar from "../components/actionbar"
//use Flip plugin where user can adjust the layout of the page according to their needs.
//there should be a main section and 2nd section and the rest
//Flip plugin takes care of the animation of different componentsas they change hierarchy
//there should be a max no of components in this page
//the user should be able to umount components

export default function Action(){
    return(
        <section>
            <Actionbar></Actionbar>
            <section className="">
                
            </section>
        </section>        
    )
}