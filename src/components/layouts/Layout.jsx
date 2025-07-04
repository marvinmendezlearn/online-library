import { Link, Outlet } from "react-router"
import Aside from "./Aside"
import { CircleUser, Menu } from "lucide-react"
import { useState } from "react"
import {ToastContainer} from "react-toastify";

function Layout() {
  const [ asideIsActive, setAsideIsActive ] = useState(false)

  const handleSetAsideIsActive = () => setAsideIsActive(!asideIsActive)

  return (
    <div className="main">
        <Aside
          asideIsActive={ asideIsActive }
          handleSetAsideIsActive={ handleSetAsideIsActive }
        />
        <div className="container_main">
          <div className="header_mobile">
            <Link className="header_mobile__logo header_mobile__logo--layout" to="/">
              LibOnline
            </Link>
            <button onClick={ handleSetAsideIsActive }>
              <Menu />
            </button>
          </div>

          <header className="header_desktop">
            <div className="container">
              <Link className="header_desktop__logo" to="/">
                LibOnline
              </Link>
              <div className="header_desktop__nav">
                <span>Nombre de usuario</span>
                <CircleUser />
              </div>
            </div>
          </header>
          <main className="container">
            <Outlet />
          </main>
          <ToastContainer />
        </div>
    </div>
  )
}

export default Layout