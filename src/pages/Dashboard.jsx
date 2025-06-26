import { BookOpenIcon, Users2, FolderOpenIcon } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardCard from "../components/ui/DashboardCard";
import UpcomingDeliveries from "../components/UpcomingDeliveries.jsx";
import { users } from '../data/users';
import { books } from '../data/books';
import { rents } from "../data/rents.js";
import './../styles/dashboard.css';


function Dashboard() {
    const [usersData, setUsersData ] = useState([]);
    const [booksData, setBooksData ] = useState([]);
    const [rentsData, setRentsData ] = useState([]);

    useEffect(() => {
        setUsersData(users);
        setBooksData(books);
        setRentsData(rents);
    }, []);
    return (
        <>
            <section className="dashboard">
                <DashboardCard
                    legend="Cantidad de usuarios"
                    data={ usersData }
                    icon=<Users2 />
                />

                <DashboardCard
                    legend="Cantidad de libros"
                    data={ booksData }
                    icon=<BookOpenIcon />
                />

                <DashboardCard
                    legend="Cantidad de libros"
                    data={ rentsData }
                    icon=<FolderOpenIcon />
                />
            </section>

            <section className="upcomingDeliveries">
                <h2 className="upcomingDeliveries__title">Próximas entregas</h2>
                <div className="overScrollTables">
                    <UpcomingDeliveries
                        rents={ rentsData }
                    />
                </div>
            </section>
        </>
    )
}

export default Dashboard