// SendCodeOverlay.js
import React, { useState, useEffect } from 'react';
import "./product.css";
import axios from 'axios';
import { Link, NavLink, Route, useParams } from "react-router-dom";
import Loader from '../../components/looder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate asynchronous task
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const Star = ({ selected = false, onClick }) => (
        <span onClick={onClick} style={{ color: selected ? 'yellow' : 'grey', cursor: 'pointer' }}>
          ★
        </span>
      );
      
      // StarRating component managing the overall rating
      const StarRating = ({ totalStars }) => {
        const [rating, setRating] = useState(0);
      }

    return (

        <div className="product">
            {loading ? (<Loader />) : (
                <div className="productcard" >
                    <div className='images'>
                        <div className='image'>
                            <img src={product.mainImage.secure_url} alt={product.name} />
                        </div>
                        <div className='sub-images'>
                            {product.subImages.map((subImage, index) =>
                                <ul><li>
                                    <img key={index} src={subImage.secure_url} />
                                </li></ul>
                            )}
                        </div>
                    </div>
                    <div className='product-details'>
                        <h3>{product.name}</h3>
                        <span>{product.description}</span>
                        <span className='price'>{product.price}$</span>
                        <span>{product.finalPrice}$</span>
                        <StarRating totalStars={5} />
                    </div>
                    <div className='reviews'>
                        <h4>Reviews</h4>
                        {product.reviews.map((review, index) =>
                            <ul className='main' key={index}>
                                <ol ><img src={review.createdBy.image.secure_url} /></ol>
                                <ul className='second'>
                                    <ol >{review.createdBy.userName}</ol>
                                    <ol >{review.comment}</ol>
                                </ul>
                            </ul>
                        )}
                    </div>
                </div>

            )}
        </div>
    );
};

export default ProductOverlay;