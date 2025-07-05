import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layouts/Layout"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/users/Users.jsx";
import CreateUser from "../pages/users/Create.jsx";
import CreateBook from "../pages/books/Create.jsx";
import EditUser from "../pages/users/Edit.jsx";
import EditBook from "../pages/books/Edit.jsx";
import Books from "../pages/books/Books.jsx";
import Rents from "../pages/rents/Rents.jsx";
import EditRent from "../pages/rents/Edit.jsx";
import {ToastContainer} from "react-toastify";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/users/create" element={ <CreateUser /> } />
                <Route path="/users/:id/edit" element={ <EditUser /> } />
                <Route path="/books" element={ <Books /> } />
                <Route path="/books/create" element={ <CreateBook /> } />
                <Route path="/books/:id/edit" element={ <EditBook /> } />
                <Route path="/rents" element={ <Rents /> } />
                <Route path="/rents/:id/edit" element={ <EditRent /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router