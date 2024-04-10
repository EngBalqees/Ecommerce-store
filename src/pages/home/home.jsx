import React, { useState } from "react";
import style from "./home.module.css";
import { useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
function Home() {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API}/categories/active?limit=10`);
        console.log(data);
        setCategories(data.categories);
    }
    useEffect(() => {
        getCategories();
    }, [])
    /*let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/categoryproducts/${categories._id}`; 
      navigate(path);
    }*/

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
                            <Link to ={`./categoryproducts/${categories.id}`}>
                           <img src={categories.image.secure_url} /></Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Home;