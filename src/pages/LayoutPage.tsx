import { Outlet } from 'react-router-dom'
import Header from './Header'

function LayoutPage() {
  return (
    <>
    <Header/>
    <main>
    <Outlet/>
    </main>    
    </>

  )
}

export default LayoutPage