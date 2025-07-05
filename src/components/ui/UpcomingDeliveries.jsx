import { useContext, useMemo } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import { formatFullDate } from "../../lib/helpers.js";

function UpcomingDeliveries() {
    const { rents, books, users } = useContext(DataContext);

    const recentRents = useMemo(() => {
        return rents.slice().sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate)).slice(0, 5).map(rent => {
            const book = books.find(b => b.id === rent.bookId);
            const user = users.find(u => u.id === rent.userId);
            return {
                ...rent,
                book: book || { title: 'Desconocido' },
                user: user || { name: 'Desconocido', lastname: '' }
            };
        });
    }, [rents, books, users]);

    return (
        <>
            {recentRents.length > 0 ? (
                <table className="table">
                    <thead className="table__header">
                        <tr>
                            <th>Usuario</th>
                            <th>Libro</th>
                            <th>Fecha de Renta</th>
                            <th>Fecha de Entrega</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {recentRents.map(rent => (
                            <tr key={rent.id}>
                                <td>{rent.user.name} {rent.user.lastname}</td>
                                <td>{rent.book.title}</td>
                                <td>{formatFullDate(rent.rentDate)}</td>
                                <td>{formatFullDate(rent.deliveryDate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p>No hay entregas próximas</p>)}
        </>
    )
}

export default UpcomingDeliveries