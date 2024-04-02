// SendCodeOverlay.js
import React, { useState, useEffect } from 'react';
import "./product.css";
import axios from 'axios';
import { Link, NavLink, Route, useParams } from "react-router-dom";

function ProductOverlay() {
    const { id } = useParams('id');
    console.log(id);
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/products/${id}`);
            console.log(data);
            setProduct(data.product);

        } catch {
            console.log("error");
        }
    }

    useEffect(() => {
        getProduct();
    }, [id])




    return (

        <div className="product">
            <div className="container">
                <div key={product.id}>
                    <div >
                        <h3>{product.name}</h3>
                        <span>{product.description}</span>
                        <img src={product.mainImage.secure_url}/>
 

                    </div>
                    <div >
                        <div >
                            <span>Unit Price: {product.price}$</span>
                            <span>Discount: {product.discount}%</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductOverlay;