import React, {useState} from 'react';
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
  const [selected, setSelected] = useState('free');
  const handleChange = event => {
    setSelected(event.target.value);
  };

  return (
    <Layout title={'Checkout'}>
      <div className="checkout">
        <div className="container">
          <form action='#' className="checkout__content">
            <div className='checkout__content_form'>
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
              <div className="radioWrapper">
                <div className="myRadio">
                  <div className="myRadio__container">
                    <input onChange={handleChange} checked={selected === 'free'} id='free' name='radioButtons' type="radio" value='free'/>
                    <label htmlFor='free'>
                      Free Shipping
                    </label>
                  </div>
                  <p>$0.00</p>
                </div>
                <div className="myRadio">
                  <div className="myRadio__container">
                    <input onChange={handleChange} checked={selected === 'standard'} id='standard' name='radioButtons' type="radio" value='standard'/>
                    <label htmlFor='standard'>
                      Standard Shipping
                    </label>
                  </div>
                  <p>$10.00</p>
                </div>
                <div className="myRadio">
                  <div className="myRadio__container">
                    <input onChange={handleChange} checked={selected === 'express'} id='express' name='radioButtons' type="radio" value='express'/>
                    <label htmlFor='express'>
                      Express Shipping
                    </label>
                  </div>
                  <p>
                    $25.3
                  </p>
                </div>
              </div>
              <h3>
                Payment Details
              </h3>
            </div>
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
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;