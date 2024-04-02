import React ,{useState} from "react";
import axios from "axios";

const ProductComponent = ({product}) =>{
    const [isAdding,setIsAdding] = useState(false);
    const addToCart = async() =>{
        try{
            setIsAdding(true);
            const response = await axios.post(`${import.meta.env.VITE_API}/cart`, {
                productId: product.id,
                quantity: 1
            });
            console.log(response.data);
            setIsAdding(false);

        }catch (error){

        }
    }
}