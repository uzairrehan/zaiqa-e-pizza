import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

function LayoutPage() {
  return (
    <>
    <Navbar/>
    <main>
    <Outlet/>
    </main>    
    </>

  )
}

export default LayoutPage