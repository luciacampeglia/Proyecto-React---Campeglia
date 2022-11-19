import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar/Navbar";
import {DetailProd, Home, ProductsList} from "./Home"
import Detail from "../../Components/Home/ProductDetail/ProductDetail";
import Cards from "../../Components/Home/Card/Cards";
import { ShowProducts } from "../ShowProduct/ShowProduct";
import CartLogo from "../../Components/Home/CartWidget/CartWidget";


const Router = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/link-home" element={<Home />}></Route>
                <Route path="/link-products" element={<ProductsList />}></Route>
                <Route path="/link-products/:gender" element={<ProductsList />}></Route>
                <Route path="/link-products/:id" element={<ProductsList />}></Route>
                <Route path="/toCart" element = {<CartLogo />}></Route>
                <Route path="/*" element={<div>404 not found</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;