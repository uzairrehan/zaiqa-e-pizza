import { Outlet } from 'react-router-dom'

function LayoutPage() {
  return (
    <>
    <header>
        this is HEader
    </header>
    <main>
    <Outlet/>
    </main>    
    </>

  )
}

export default LayoutPage