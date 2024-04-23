import React from "react";
import style from "./products.module.css"
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProductOverlay from "../product/product";
import Loader from '../../components/looder';
export default function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API}/products?page=1&limit=10`);
        console.log(data);
        setProducts(data.products);
    }
    useEffect(() => {
        getProducts();
    }, [])
    const [loading, setLoading] = useState([]);
    const addToCart = async (productId) => {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, {
            productId
        });
        console.log(data);
        console.log("cart");
        /* setLoading(true);
         try{
             const token = localStorage.getItem('userToken');
            
                 
             }catch(error){
                 console.log(error);
         }*/
    }


    return (
        <>
            <div className={style.home}>
                <div className={style.title}>
                    <h1>our Products</h1>
                </div>
                <div className={style.container}>
                    {products.map(products =>
                        <div className={style.products} key={products.id}>
                            <div className={style.product}>
                                <img src={products.mainImage.secure_url} className="image" />
                                <h3>{products.name}</h3>
                            </div>
                            <div className={style.unitprices}>
                                <div className={style.price}>
                                    <span>Unit Price: {products.price}$</span>
                                    <span>Discount: {products.discount}%</span>
                                </div>
                                <button onClick={() => addToCart(products.id)}><img src="/cart.png" /></button>
                                <button> <Link to={`/product/${products.id}`}>Product Details</Link></button>
                            </div>

                        </div>
                    )}
                </div>
            </div>

        </>
    )
}