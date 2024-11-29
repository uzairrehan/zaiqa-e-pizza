import { Outlet } from 'react-router-dom'

function LayoutPage() {
  return (
    <>
    <header>
        Header
    </header>
    <main>
    <Outlet/>
    </main>    
    </>

  )
}

export default LayoutPage