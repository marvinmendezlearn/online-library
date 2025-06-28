export default function Pagination({filterData, data, search, page, pages, handleDecreasePage, handleIncreasePage}) {
    return (
        <div className="pagination">
            <div className="pagination__info">
                <p>Mostrando {filterData.length} de {data.length} resultados</p>
            </div>
            <div className="pagination__buttons">
                <button className={`pagination__button ${ page <= 1 || search.length ? 'pagination__button--inactive' : '' }`} onClick={ handleDecreasePage }>&laquo; Anterior</button>
                <button className={`pagination__button ${ page >= pages || search.length ? 'pagination__button--inactive' : '' }`} onClick={ handleIncreasePage }>Siguiente &raquo;</button>
            </div>
        </div>
    )
}