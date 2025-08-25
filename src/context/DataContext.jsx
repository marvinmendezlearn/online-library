import {createContext, useState, useEffect} from "react";
import {users as usersData} from "../data/users.js";
import {rents as rentsData} from "../data/rents.js";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [rents, setRents] = useState([]);

    const getBooksFormURL = async () => {
        const response = await fetch('https://operador-service-production.up.railway.app/books');
        const data = await response.json();
        setBooks(data);
    }

    useEffect(() => {

        getBooksFormURL();
        setUsers(usersData);
        setRents(rentsData);
    }, []);

    const updateBook = (updatedBook) => {
        setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    
    const addBook = (newBook) => {
        setBooks([...books, {...newBook, id: books.length + 1}]);
    }

    const updateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
    
    const addUser = (newUser) => {
        setUsers([...users, {...newUser, id: users.length + 1}]);
    }
    
    const addRent = (rent) => {
        const newRent = {
            ...rent,
            id: rents.length + 1,
            rentDate: new Date().toISOString().split('T')[0],
            deliveryDate: rent.deliveryDate,
            status: "rented"
        }
        setRents([...rents, newRent]);
    }

    const deleteRent = (id) => {
        setRents(rents.filter(rent => rent.id !== id));
    }

    const updateRent = (updatedRent) => {
        setRents(rents.map(rent => rent.id === updatedRent.id ? updatedRent : rent));
    }

    const markRentAsReturned = (id) => {
        setRents(rents.map(rent => rent.id === id ? { ...rent, status: "returned" } : rent));
    }

    return (
        <DataContext.Provider value={{
            books,
            users,
            rents,
            updateBook,
            deleteBook,
            addBook,
            updateUser,
            deleteUser,
            addUser,
            addRent,
            deleteRent,
            updateRent,
            markRentAsReturned
        }}>
            {children}
        </DataContext.Provider>
    )
}