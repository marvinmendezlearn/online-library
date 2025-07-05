import { useContext, useMemo, useState } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import usePagination from "../../hooks/usePagination.js";
import Pagination from "../../components/Pagination.jsx";
import { formatFullDate } from "../../lib/helpers.js";
import "../../styles/books.css"; // Reusing some styles
import { EditIcon, TrashIcon, CheckCircle } from "lucide-react";
import { DeleteModal } from "../../lib/alert/DeleteModal.jsx";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Rents() {
    const { rents, books, users, deleteRent, markRentAsReturned } = useContext(DataContext);
    const [modal, setModal] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const rentsWithDetails = useMemo(() => {
        return rents.map(rent => {
            const book = books.find(b => b.id === rent.bookId);
            const user = users.find(u => u.id === rent.userId);
            return {
                ...rent,
                bookTitle: book ? book.title : 'Libro Desconocido',
                userName: user ? `${user.name} ${user.lastname}` : 'Usuario Desconocido'
            };
        });
    }, [rents, books, users]);

    const {
        filterData: filterRents,
        search,
        setSearch,
        perPage,
        setPerPage,
        page,
        pages,
        handleDecreasePage,
        handleIncreasePage,
    } = usePagination(rentsWithDetails);

    const handleModalStatus = (id) => {
        setModal(true);
        setIdToDelete(id);
    }

    const handleModalAction = () => {
        deleteRent(idToDelete);
        setModal(false);
    }

    const handleMarkAsReturned = (id) => {
        markRentAsReturned(id);
        toast.success("Alquiler marcado como devuelto.");
    }

    return (
        <section className="books">
            <div className="books__title-nav">
                <div>
                    <h2 className="books__title">Lista de Alquileres</h2>
                    <p className="books__legend">Gestiona los libros alquilados...</p>
                </div>
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

            {filterRents.length > 0 ? (
                <>
                    <div className="overScrollTables">
                        <table className="table">
                            <thead className="table__header">
                                <tr>
                                    <th>ID Renta</th>
                                    <th>Libro</th>
                                    <th>Usuario</th>
                                    <th>Fecha de Renta</th>
                                    <th>Fecha de Entrega</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table__body">
                                {filterRents.map(rent => (
                                    <tr key={rent.id}>
                                        <td>{rent.id}</td>
                                        <td>{rent.bookTitle}</td>
                                        <td>{rent.userName}</td>
                                        <td>{formatFullDate(rent.rentDate)}</td>
                                        <td>{formatFullDate(rent.deliveryDate)}</td>
                                        <td><span className={`badge badge__${rent.status}`}>{rent.status}</span></td>
                                        <td>
                                            <div className="table__actions">
                                                {rent.status !== "returned" && (
                                                    <button onClick={ () => handleMarkAsReturned(rent.id) }>
                                                        <CheckCircle className="success-icon" />
                                                    </button>
                                                )}
                                                <button onClick={ () => handleModalStatus(rent.id) }>
                                                    <TrashIcon className="delete-icon" />
                                                </button>
                                                <Link to={`/rents/${rent.id}/edit`}>
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
                        data={rentsWithDetails}
                        filterData={filterRents}
                        handleIncreasePage={handleIncreasePage}
                        handleDecreasePage={handleDecreasePage}
                    />
                </>
            ) : (<p className="alert-message">No se encontraron alquileres.</p>)}
            <DeleteModal
                modal={ modal }
                setModal={ setModal }
                handleModalAction={ handleModalAction }
            />
        </section>
    );
}

export default Rents;