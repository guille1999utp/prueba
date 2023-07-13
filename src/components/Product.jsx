import React, { useEffect, useState } from 'react'
import Products from '../database/product.json'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/reducer/cart';

const Product = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const cart = useSelector(state => state.product.cart);

  useEffect(() => {

    const searchProduct = () => {
      const product = Products.find(product => product.name.toLowerCase().replace(/\s/g, '-') === slug);
      setProduct(product || {})
    }
    searchProduct()

  }, [slug])

  const filteredCart = cart.filter((item) => item.id === product.id);
  const cartQuantity = filteredCart.length > 0 ? filteredCart[0].quantity : 0;

  return (<>
    <h2 className="subtitle">
      Producto
    </h2>
    <hr className="divider"></hr>
    <div className='product-info'>
      {Object.keys(product).length === 0 ? <p className='text-info'>this product does not exist</p> :
        <>

          <span className='quantity-info'>
            {cartQuantity}
          </span>
          <img src={product.photo} className='image-info' alt={product.name}/>
          <div className='f-row f-between'>
            <div className='f-row'>
              <h3 className='title-product'>{product.name}</h3>
              <p className='price-product'>${new Intl.NumberFormat().format(parseInt(product.price))}</p>
            </div>
            <div className='f-row'>
              <button className='botton-product-left' onClick={()=>dispatch(removeCart(product.id))}>-</button>
              <button className='botton-product-right' onClick={()=>dispatch(addCart(product))}>+</button>
            </div>
          </div>
          <hr className='divider'></hr>
          <p className='description-product'>
            {product.description}
          </p>
          <hr className='divider'></hr>
        </>
      }
    </div>
  </>



  )
}

export default Product;
