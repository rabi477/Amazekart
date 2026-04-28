import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {

  const URL = 'https://fakestoreapi.com/products';
  const [products, setProducts]=useState([]);

  useEffect(()=>{
    (async () => {
      const {data} = await axios.get(URL);
      setProducts(data);
      console.log(data);
    })();
  },[]);



  return (
    <>
     {products.map((product) => <Product product={product}/>)}
    </>
  )
}

export default Products