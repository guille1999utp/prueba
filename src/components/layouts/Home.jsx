import React from 'react'
import Products from '../../database/product.json'
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="container">
      <div className="products">
        <h2 className="subtitle">
          Store
        </h2>
        <hr className="divider"></hr>

        <div class="galeria">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Imagen 1" />
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="Imagen 2" />
          <img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" alt="Imagen 3" />
          <img src="https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE" alt="Imagen 1" />
          <img src="https://thumbs.dreamstime.com/b/male-photographer-setting-up-camera-tripod-young-beach-his-to-star-photoshoot-166294251.jpg" alt="Imagen 2" />
          <img src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" alt="Imagen 3" />
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Imagen 1" />
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="Imagen 2" />
          <img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" alt="Imagen 3" />
        </div>
      </div>
      <div className="selected-product">
        <Outlet />
        {currentPath === "/product" || currentPath === "/product/" ?
          <>
            <hr className="divider" style={{marginTop:"38px"}}></hr>
            <p className='text-info'>Please choose a product on the left.</p>
          </>
          : null}
      </div>
    </div>
  )
}

export default Home;
