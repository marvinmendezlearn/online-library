import {Link} from "react-router";
import {PlusIcon} from "lucide-react";
import usePagination from "../../hooks/usePagination.js";
import {books as booksData} from "../../data/books.js";
import {useEffect, useState} from "react";

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
        </section>
    )
}