import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layouts/layout"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={<p>Hola mundo desde routing</p>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router