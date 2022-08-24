import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import {setProducts} from "../redux/actions/productActions";
import { useEffect } from 'react';

const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async() => {
        const res = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err);
        })
        dispatch(setProducts(res.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    console.log("products:", products)

    return(
        <div>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;