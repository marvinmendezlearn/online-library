import {useEffect, useMemo, useState} from "react";
import { Link } from "react-router";
import { users as userData } from "../data/users.js";
import './../styles/users.css';
import {formatDate} from "../lib/helpers.js";

function Users(){
    const [ users, setUsers] = useState([]);

    // Elementos necesarios para que funcione la paginacion
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);

    const filterUsers = useMemo(() => {
        return users.filter(user => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        })
    }, [search, users]);

    useEffect(()=>{
        setUsers(userData)
    }, [users]);

    return (
        <>
            <section className="users">
                <div className="users__title-nav">
                    <div>
                        <h2 className="users__title">Lista de usuarios registrados</h2>
                        <p className="users__legend">Agrega, edita y elimina usuarios...</p>
                    </div>
                    <Link className="users__link-create" to="/users/create">Agregar</Link>
                </div>

                <form className="searcher">
                    <div className="searcher__text">
                        <input className="searcher__input" type="search" placeholder="Buscar..." value={ search } onChange={ (e) => setSearch(e.target.value) } />
                    </div>
                    <div className="searcher__quantity">
                        <p>Mostrar</p>
                        <select className="searcher__select" value={perPage} onChange={(e)=>{ setPerPage(parseInt(e.target.value)) }}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        <p>resultados</p>
                    </div>
                </form>

                <div className="overScrollTables">
                    {filterUsers.length > 0 ? (
                        <table className="table">
                            <thead className="table__header">
                            <tr>
                                <th>Id</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo electrónico</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="table__body">
                                {filterUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telephone}</td>
                                        <td>{user.address}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (<p>No hay usuarios registrados...</p>)}
                </div>
            </section>
        </>
    )
}

export default Users