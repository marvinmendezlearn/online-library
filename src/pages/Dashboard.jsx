import { BookOpenIcon, Users2, FolderOpenIcon, LibraryBig, AlertTriangle } from "lucide-react";
import { useContext, useMemo } from "react";
import DashboardCard from "../components/ui/DashboardCard";
import UpcomingDeliveries from "../components/ui/UpcomingDeliveries.jsx";
import { DataContext } from "../context/DataContext.jsx";
import './../styles/dashboard.css';


function Dashboard() {
    const { users, books, rents } = useContext(DataContext);

    const overdueRents = useMemo(() => {
        return rents.filter(rent => rent.status === "overdue").length;
    }, [rents]);

    return (
        <>
            <section className="dashboard">
                <DashboardCard
                    legend="Usuarios Registrados"
                    data={ users }
                    icon=<Users2 />
                />

                <DashboardCard
                    legend="Libros Disponibles"
                    data={ books }
                    icon=<BookOpenIcon />
                />

                <DashboardCard
                    legend="Libros Alquilados"
                    data={ rents }
                    icon=<LibraryBig />
                />

                <DashboardCard
                    legend="Alquileres Vencidos"
                    data={ [{id: 1, count: overdueRents}] }
                    icon=<AlertTriangle />
                />
            </section>

            <section className="upcomingDeliveries">
                <h2 className="upcomingDeliveries__title">Próximas entregas</h2>
                <div className="overScrollTables">
                    <UpcomingDeliveries
                        rents={ rents }
                    />
                </div>
            </section>
        </>
    )
}

export default Dashboard