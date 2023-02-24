import React from 'react';
import Layout from "../components/Layout";
import Asset from "../components/Asset/Asset";
import {useSelector} from "react-redux";
import TotalPrice from "../components/TotalPrice/TotalPrice";
import MyButton from "../components/UI/MyButton/MyButton";
import Advertising from "../components/Advertising/Advertising";
import Promo from "../components/Promo/Promo";
import MyInput from "../components/UI/inputs/MyInput";

const Checkout = () => {
  const products = useSelector(state => state.assets.product)

  return (
    <Layout title={'Checkout'}>
      <div className="checkout">
        <div className="container">
          <div className="checkout__content">
            <form action='#' className='checkout__content_form'>
              <h3>
                Your Details
              </h3>
              <MyInput id='email' type='email' label='your email'/>
              <div className="inputWrapper">
                <MyInput id='phone' type='tel' label='mobile phone'/>
                <p>
                  Your phone number is required for delivery & shipping updates.
                </p>
              </div>
              <div className="inputWrapper">
                <MyInput id='name' type='text' label='first name'/>
                <MyInput id='lastname' type='email' label='last name'/>
              </div>
              <h3>
                Delivery Details
              </h3>
              <MyInput id='country' type='text' label='country'/>
              <MyInput id='delivery' label={'delivery address'}/>
              <h3>
                Payment Details
              </h3>
            </form>
            <div className='navbar'>
              <h3>
                Your order
              </h3>
              <div className="navbar__container">
                <ul>
                  {products.map(product => <Asset
                    product={product}
                    key={product.id}
                  />)}
                </ul>
                <Promo/>
                <TotalPrice products={products}/>
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