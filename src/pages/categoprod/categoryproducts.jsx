import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, Route, useParams } from "react-router-dom";
import style from "./categoprod.module.css";
import Model from "../../components/model";
import ProductOverlay from "../product/product"
export default function CategoryProducts() {
    const [products, setProducts] = useState([]);
    const { id } = useParams('id');
    const getProducts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API}/products/category/${id}`);
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
            <div className={style.container} >
                {products.map(products =>
                     <div className={style.products} key={products._id}>
                     <div className={style.product}>
                         <img src={products.mainImage.secure_url} className="image" />
                         <h3>{products.name}</h3>
                     </div>
                     <div className={style.unitprices}>
                         <div className={style.price}>
                             <span>Unit Price: {products.price}$</span>
                             <span>Discount: {products.discount}%</span>
                         </div>
                        <Link><img src="/cart.png" /></Link> 
                        <Link to={`/product/${products._id}`}>Product Details</Link>
                     </div>
                    
                     <button key={products._id}>Product Details</button>
                 </div>
                )}
            </div>
            
           </div>
        </>
    )
}
