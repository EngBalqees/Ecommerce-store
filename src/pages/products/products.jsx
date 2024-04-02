import React from "react";
import style from "./products.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProductOverlay from "../product/product";

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
                                    <Link to={`/product/${products._id}`}>Product Details</Link>
                                </div>
                               <Link><img src="/cart.png" /></Link> 
                            </div>
                            <button>Product Details</button>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}