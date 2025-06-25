import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layouts/layout"
import Dashboard from "../pages/Dashboard"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Dashboard /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router