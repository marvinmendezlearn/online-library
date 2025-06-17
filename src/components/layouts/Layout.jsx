import { Link, Outlet } from "react-router"
import Aside from "./Aside"
import { Menu } from "lucide-react"
import { useState } from "react"

function Layout() {
  const [ asideIsActive, setAsideIsActive ] = useState(false)

  const handleSetAsideIsActive = () => setAsideIsActive(!asideIsActive)

  return (
    <div className="container">
        <Aside
          asideIsActive={ asideIsActive }
          handleSetAsideIsActive={ handleSetAsideIsActive }
        />
        <main>
          <div className="header_mobile">
            <Link className="header_mobile__logo header_mobile__logo--layout" to="/">
              LibOnline
            </Link>
            <button onClick={ handleSetAsideIsActive }>
              <Menu />
            </button>
          </div>
          <Outlet />
        </main>
    </div>
  )
}

export default Layout