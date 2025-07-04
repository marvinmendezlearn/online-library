import {useEffect, useState} from "react";
import { Link } from "react-router";
import { users as userData } from "../../data/users.js";
import usePagination from "../../hooks/usePagination.js";
import Pagination from "../../components/Pagination.jsx";
import {EditIcon, PlusIcon, TrashIcon} from "lucide-react";
import {DeleteModal} from "../../lib/alert/DeleteModal.jsx";

function Users(){
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [id, setId] = useState(null);

    useEffect(()=>{
        setUsers(userData)
    }, []);

    const {
        filterData: filterUsers,
        search,
        setSearch,
        perPage,
        setPerPage,
        page,
        pages,
        handleDecreasePage,
        handleIncreasePage,
        updateData,
    } = usePagination(users)

    const handleModalStatus = (id) => {
        setModal(true);
        setId(id);
    }

    const handleModalAction = () => {
        const userFilter = users.filter(filterUser => filterUser.id !== id);
        updateData(userFilter);
        setModal(false);
    }

    return (
        <>
            <section className="users">
                <div className="users__title-nav">
                    <div>
                        <h2 className="users__title">Lista de usuarios registrados</h2>
                        <p className="users__legend">Agrega, edita y elimina usuarios...</p>
                    </div>
                    <Link className="users__link-navigate" to="/users/create">
                        <PlusIcon />
                        Agregar
                    </Link>
                </div>
                <form className="searcher">
                    <div className="searcher__text">
                        <input className="searcher__input" type="search" placeholder="Buscar..." value={ search } onChange={ (e) => setSearch(e.target.value) } />
                    </div>
                    <div className="searcher__quantity">
                        <p>Mostrar</p>
                        <select className="searcher__select" value={ perPage } onChange={ e => setPerPage(parseInt(e.target.value)) }>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        <p>resultados</p>
                    </div>
                </form>

                {filterUsers.length > 0 ? (
                    <>
                        <div className="overScrollTables">
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
                                            <td>
                                                <div className="table__actions">
                                                    <button onClick={ () => handleModalStatus(user.id) }>
                                                        <TrashIcon className="delete-icon" />
                                                    </button>
                                                    <Link to={`/users/${user.id}/edit`}>
                                                        <EditIcon className="edit-icon" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            search={search}
                            page={page}
                            pages={pages}
                            data={users}
                            filterData={filterUsers}
                            handleIncreasePage={handleIncreasePage}
                            handleDecreasePage={handleDecreasePage}
                        />
                    </>
                ) : (<p className="alert-message">No se encontraron coincidencias...</p>)}
                <DeleteModal
                    modal={ modal }
                    setModal={ setModal }
                    handleModalAction={ handleModalAction }
                />
            </section>
        </>
    )
}

export default Users