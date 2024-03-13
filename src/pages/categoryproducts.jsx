import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import style from "./categoprod.module.css";
export default function CategoryProducts() {
    const [products, setProducts] = useState([]);
    const {id} = useParams('id');
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
                <div className={style.container} >
                    {products.map(product =>
                        <div className={style.products} key={product.id}>
                          <h2>{product.name}</h2>
                          <img src={product.mainImage.secure_url}></img>
                          <button>Product Details</button>
                        </div>
                    )}
                </div>
           
        </>
    )
}
