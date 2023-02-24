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
                <div className='inputContainer'>
                  <input id='phone' type="tel"/>
                  <label htmlFor="phone">
                    mobile phone
                  </label>
                </div>
                <p>
                  Your phone number is required for delivery & shipping updates.
                </p>
              </div>
              <div className="inputWrapper">
                <div className='inputContainer'>
                  <input id='name' type="text"/>
                  <label htmlFor="name">
                    first name
                  </label>
                </div>
                <div className='inputContainer'>
                  <input id='lastname' type="email"/>
                  <label htmlFor="lastname">
                    last name
                  </label>
                </div>
              </div>
              <h3>
                Delivery Details
              </h3>
              <div className='inputContainer'>
                <input id='country' type="text"/>
                <label htmlFor="country">
                  country
                </label>
              </div>
              <div className='inputContainer'>
                <textarea id='delivery address' type="text"/>
                <label htmlFor="delivery address">
                  delivery address
                </label>
              </div>
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