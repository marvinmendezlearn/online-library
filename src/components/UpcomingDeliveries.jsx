import { useEffect, useState } from "react";
import { getUpcomingDeliveries, formatDate } from "../lib/helpers.js";

function UpcomingDeliveries({ rents }) {
    const [upcomingDeliveries, setUpcomingDeliveries] = useState([]);

    useEffect(() => {
        const result = getUpcomingDeliveries(rents);
        setUpcomingDeliveries(result);
    }, [rents]);


    return (
        <>
            {upcomingDeliveries.length > 0 ? (
                <table className="table">
                    <thead className="table__header">
                        <tr>
                            <th>Usuario</th>
                            <th>Libro</th>
                            <th>Entrega</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {upcomingDeliveries.map(rent => (
                            <tr key={rent.id}>
                                <td>{rent.user.name} {rent.user.lastname}</td>
                                <td>{rent.book.title}</td>
                                <td>{formatDate(rent.due_date)}</td>
                                <td><span className={`badge badge__${rent.status}`}>{rent.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p>No hay entregas próximas</p>)}
        </>
    )
}

export default UpcomingDeliveries