import {Link, useLocation} from "react-router"
import {LogInIcon, User2, X} from "lucide-react"
import "./../../styles/aside.css"
import { navItems } from "../../data/navItems"
import {useEffect} from "react";

function Aside({ asideIsActive, handleSetAsideIsActive }) {
    const location = useLocation()

    useEffect(() => {
        if (asideIsActive) {
            handleSetAsideIsActive()
        }
    }, [location.pathname]);

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
                        <li className="nav__item" key={item.id}>
                            <Link className={`nav__link ${item.path === location.pathname ? 'nav__link--active' : ''}`} to={ item.path }>
                                <item.icon />
                                { item.label }
                            </Link>
                        </li>
                    ))} 
                </ul>
            </nav>

            <div className="aside__footer">
                <button className="aside__footer__button">
                    <LogInIcon />
                    Cerrar sesión
                </button>
            </div>
        </aside>
    )
}

export default Aside