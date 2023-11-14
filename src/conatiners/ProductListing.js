
import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {

  const products = useSelector((state) => state);
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts (response.data)); 
        // console.log("data " + JSON.stringify(response.data));
    } catch (err) {
        console.log(err);
    }
};


  useEffect(() => {
    fetchProducts()
  },[]);

  // console.log("All Products " + JSON.stringify(products))

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
