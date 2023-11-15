import Image from 'next/image'
import Link from 'next/link'
import Intro from './components/intropage'
import Nav from './components/navigation'

export default function Home() {
  return (
    <div className=''>
       <Nav></Nav>
       <Intro></Intro>
    </div>
   
  )
}
