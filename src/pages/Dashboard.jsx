import { BookOpenIcon, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { users } from '../data/users';
import { books } from '../data/books';
import './../styles/dashboard.css';
import DashboardCard from "../components/ui/DashboardCard";

function Dashboard() {
    const [usersData, setUsersData ] = useState([]);
    const [booksData, setBooksData ] = useState([]);

    useEffect(() => {
        setUsersData(users);
        setBooksData(books);
    }, []);
    return (
        <div className="dashboard">
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
        </div>
    )
}

export default Dashboard