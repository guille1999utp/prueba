import React, { useEffect, useState } from 'react'
import Products from '../../database/product.json'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../assets/icon.png';
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../redux/reducer/cart';

const Home = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigateProduct = (name) => {
    let slug = name.toLowerCase().trim();
    slug = slug.replace(/[\s\W-]+/g, "-");
    navigate(`/product/${slug}`);
  }



  useEffect(() => {
    const calcTotal = async() => {
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

  return (
    <div className='home-layout'>
      <nav className='f-row f-between' style={{ marginBottom: "1rem", alignItems: "center" }}>
        <img src={Icon} alt='icono' className='home-icon' onClick={() => navigate(`/`)} />
        <div className='f-row'>
          <button className={`cart-boton ${currentPath === "/product/cart" ? "active" : ""}`} onClick={() => navigate(`/product/cart`)}><BsCart4 fontSize={23} /> ${new Intl.NumberFormat().format(parseInt(totalPrice))}</button>
          {currentPath === "/product/cart" ? <button className="cart-boton" onClick={() => dispatch(emptyCart())}>x</button> : null}
        </div>
      </nav>
      <div className="container">
        <div className="products">
          <h2 className="subtitle">
            Store
          </h2>
          <hr className="divider"></hr>

          <div className="galeria">
            {Products.map((product) => {

              const productExist = cart.find(productCart => productCart.id === product.id)
              if (productExist) {

                return <div className='galeria-foto-cart' key={product.id}>
                  <span className='galeria-foto-cart-quantity'>
                    {productExist.quantity}
                  </span>
                  <img key={product.id} onClick={() => navigateProduct(product.name)} className='galeria-foto' src={product.photo} alt={product.name} />
                </div>
              } else {

                return <img key={product.id} onClick={() => navigateProduct(product.name)} className='galeria-foto' src={product.photo} alt={product.name} />

              }


            })}
          </div>
        </div>
        <div className="selected-product">
          <Outlet />
          {currentPath === "/" ?
            <>
              <hr className="divider" style={{ marginTop: "38px" }}></hr>
              <p className='text-info'>Please choose a product on the left.</p>
            </>
            : null}
        </div>
      </div>
    </div>
  )
}

export default Home;
