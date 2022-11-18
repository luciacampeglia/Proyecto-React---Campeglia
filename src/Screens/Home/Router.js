import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar/Navbar";
import {Home, ProductsList} from "./Home"
import { ShowProducts } from "../ShowProduct/ShowProduct";


const Router = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/link-home" element={<Home/>}></Route>
                <Route path="/link-products" element={<ProductsList/>}></Route>
                <Route path="/jguj" element={<div>404 not found</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;