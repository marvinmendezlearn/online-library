import { Link } from "react-router"
import { User2, X } from "lucide-react"
import "./../../styles/aside.css"
import { navItems } from "../../data/navItems"

function Aside({ asideIsActive, handleSetAsideIsActive }) {
    

    return (
        <aside className={`aside ${asideIsActive ? 'aside--active' : ''}`}>
            <div className="header_mobile">
                <Link className="header_mobile__logo" to="/">
                    LibOnline
                </Link>
                <button onClick={ handleSetAsideIsActive }>
                    <X />
                </button>
            </div>
            <nav className="nav">
                <ul>
                    {navItems.map(item => (
                        <li className="nav__item" key={ item.id }>
                            <Link className="nav__link" to="/">
                                <item.icon />
                                { item.label }
                            </Link>
                        </li>
                    ))} 
                </ul>
            </nav>
        </aside>
    )
}

export default Aside