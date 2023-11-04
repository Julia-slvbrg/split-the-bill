import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "../pages/mainPage/MainPage"
import AddValuePage from "../pages/addValuePage/AddValuePage"
import ErrorPage from "../pages/errorPage/ErrorPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/addValues" element={<AddValuePage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}