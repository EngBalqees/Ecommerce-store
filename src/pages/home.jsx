import React, { useState } from "react";
import style from "./home.module.css";
import { useEffect } from "react";
import axios from "axios";
function Home() {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const { data } = await axios.get('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
        console.log(data);
        setCategories(data.categories);
    }
    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <div className={style.home}>
                <div className={style.title}>
                    <h1>Welcome to our store</h1>
                    <img src="home.jpg"/>
                </div>
                <div className={style.container}>
                    {categories.map(categories =>
                        <div className={style.categories} key={categories.id}>
                            <button><img src={categories.image.secure_url} /></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Home;