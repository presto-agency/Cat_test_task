import React from 'react';
import Layout from "../components/Layout";
import Asset from "../components/Asset/Asset";
import {useSelector} from "react-redux";
import TotalPrice from "../components/TotalPrice/TotalPrice";
import {Link} from "gatsby";
import MyButton from "../components/UI/MyButton/MyButton";
import Advertising from "../components/Advertising/Advertising";

const Checkout = () => {
  const products = useSelector(state => state.assets.product)

  return (
    <Layout title={'Checkout'}>
      <div className="checkout">
        <div className="container">
          <div className="checkout__content">
            <div className='checkout__content_form'>

            </div>
            <div className='navbar'>
              <div className="navbar__container">
                <ul>
                  {products.map(product => <Asset
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    src={product.src}
                    id={product.id}
                    // returnTotal={returnTotal}
                  />)}
                </ul>
                <TotalPrice/>
              </div>
              <MyButton className='myButton black' description={'Pay now'}/>
              <Advertising/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;