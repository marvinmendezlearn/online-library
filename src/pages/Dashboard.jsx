import { BookOpenIcon, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardCard from "../components/ui/DashboardCard";
import { users } from '../data/users';
import { books } from '../data/books';
import {rents} from "../data/rents.js";
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

            <DashboardCard
                legend="Cantidad de libros"
                data={ rentsData }
                icon=<BookOpenIcon />
            />
        </div>
    )
}

export default Dashboard