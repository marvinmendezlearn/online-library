import {Link} from "react-router";
import {PlusIcon} from "lucide-react";
import usePagination from "../../hooks/usePagination.js";
import {books as booksData} from "../../data/books.js";
import {useEffect, useState} from "react";
import "../../styles/books.css"
import Pagination from "../../components/Pagination.jsx";

export default  function Books(){
    const [books, setBooks] = useState([]);
    const [modal, setModal] = useState(false);
    const [id, setId] = useState(null);

    useEffect(()=>{
        setBooks(booksData)
    }, []);

    const {
        filterData,
        search,
        setSearch,
        perPage,
        setPerPage,
        page,
        pages,
        handleDecreasePage,
        handleIncreasePage,
        updateData,
    } = usePagination(books)

    return (
        <section className="books">
            <div className="books__title-nav">
                <div>
                    <h2 className="books__title">Lista de libros disponibles</h2>
                    <p className="books__legend">Agrega, edita y elimina libros...</p>
                </div>
                <Link className="books__link-navigate" to="/books/create">
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
                {filterData.length > 0 ? (
                    <>
                        <div className="grid-books">
                            {filterData.map(book => (
                                <div className="card-book" key={book.id}>
                                    <div className="card-book__header"
                                         style={{backgroundImage: `url(${book.coverImage})`}}></div>
                                    <div className="card-book__body">
                                        <h2 className="card-book__title">{book.title}</h2>
                                        <span className="card-book__categories">{book.category}</span>
                                        <p className="card-book__label">{book.language}</p>
                                    </div>
                                    <div className="card-book__footer">
                                        <button className="card-book__rent">Rentar</button>
                                        <div className="card-book__button">
                                            <button className="card-book__delete">Eliminar</button>
                                            <Link className="card-book__edit" to="#">Editar</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination
                            search={search}
                            page={page}
                            pages={pages}
                            data={books}
                            filterData={filterData}
                            handleIncreasePage={handleIncreasePage}
                            handleDecreasePage={handleDecreasePage}
                        />
                    </>
                ) : <p className="alert-message">No se encontraron coincidencias...</p>}
        </section>
    )
}