import React, { useEffect, useState } from 'react'
import Products from '../database/product.json'
import WompiReact from './components/WompiReact';
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.product.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {

    const calcTotal = async() =>{
      const priceEveryProduct = cart.map(item => Products.find(product => product.id === item.id));

      const totalPrice = cart.reduce((acc, item, index) => {
        const price = priceEveryProduct[index].price;
        const itemTotal = price * item.quantity;
        return acc + itemTotal;
      }, 0);   

      setTotalPrice(totalPrice);
    }
    
    calcTotal();
    
  }, [cart])
  
  const navigateProduct = (name) =>{
    let slug = name.toLowerCase().trim();
    slug = slug.replace(/[\s\W-]+/g, "-");
    navigate(`/product/${slug}`)
  }
  return (<>
    <h2 className="subtitle">
      Shopping Cart
    </h2>
    <hr className="divider"></hr>
    <div className="cart-info">
      {cart.map(product =>
        <div key={product.id}>
          <div className="f-row" style={{ alignItems: "center" }}>
            <span className='quantity-info'>
              {product.quantity}
            </span>
            <img src={product.img} className="cart-info-image" onClick={()=>navigateProduct(product.name)} />
          </div>
          <hr className='divider'></hr>
        </div>
      )}

      <div className="f-row f-end">
        <p className="text-price">Total:<span className="text-price-money">${new Intl.NumberFormat().format(parseInt(totalPrice))}</span></p>
      </div>
      <WompiReact total={totalPrice} />
    </div>
  </>



  )
}

export default Cart;
