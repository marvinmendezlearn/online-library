import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layouts/Layout"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/users/Users.jsx";
import Create from "../pages/users/Create.jsx";
import Edit from "../pages/users/Edit.jsx";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/users/create" element={ <Create /> } />
                <Route path="/users/:id/edit" element={ <Edit /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router