import React from 'react'

const Product = ({product}) => {
    const {title, price} = product || {};
  return (
    <section>
        <h2>Title - {title}</h2>
        <p>Price - {price}</p>
    </section>
  )
}

export default Product