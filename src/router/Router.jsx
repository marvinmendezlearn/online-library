import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layouts/Layout"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/Users.jsx";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/users" element={ <Users /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router