import React, { useEffect, useState } from 'react'
import Products from '../database/product.json'
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {

    const searchProduct = () => {
      const product = Products.find(product => product.name.toLowerCase().replace(/\s/g, '-') === slug);
      setProduct(product || {})
    }
    searchProduct()

  }, [slug])


  return (<>
    {Object.keys(product).length === 0 ? <p className='text-info'>this product does not exist</p> :
      <>
        <span className='quantity-info'>
          {product.quantity}
        </span>
        <img src={product.photo} className='image-info' />
        <div className='f-row f-between'>
          <div className='f-row'>
            <h3 className='title-product'>{product.name}</h3>
            <p className='price-product'>${product.price}</p>
          </div>
          <div className='f-row'>
            <button className='botton-product-left'>-</button>
            <button className='botton-product-right'>+</button>
          </div>
        </div>
        <hr className='divider'></hr>
        <p className='description-product'>
          {product.description}
        </p>
        <hr className='divider'></hr>
      </>
    }
  </>



  )
}

export default Cart;
