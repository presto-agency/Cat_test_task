import React, {useState} from "react";
import Layout from "../components/Layout";
import Asset from "../components/Asset/Asset";
import {useSelector} from "react-redux";
import TotalPrice from "../components/TotalPrice/TotalPrice";
import MyButton from "../components/UI/MyButton/MyButton";
import Advertising from "../components/Advertising/Advertising";
import Promo from "../components/Promo/Promo";
import MyInput from "../components/UI/MyInput/MyInput";
import MyRadio from "../components/UI/MyRadio/MyRadio";

const Checkout = () => {
  const products = useSelector(state => state.assets.products)
  const [selected, setSelected] = useState(0);
  const handleChange = (value) => {
    setSelected(value)
  }

  return (
    <Layout title="Checkout">
      <div className="checkout">
        <div className="container">
          <div className="checkout__content">
            <div className="checkout__content_form">
              <h3>
                Your Details
              </h3>
              <MyInput
                id="email"
                type="email"
                label="your email"
              />
              <div className="inputWrapper">
                <MyInput
                  id="phone"
                  type="tel"
                  label="mobile phone"
                />
                <p>
                  Your phone number is required for delivery & shipping updates.
                </p>
              </div>
              <div className="inputWrapper">
                <MyInput
                  id="name"
                  type="text"
                  label="first name"
                />
                <MyInput
                  id="lastname"
                  type="email"
                  label="last name"
                />
              </div>
              <h3>
                Delivery Details
              </h3>
              <MyInput
                id="country"
                type="text"
                label="country"
              />
              <MyInput
                id="delivery"
                label="delivery address"
              />
              <div className="radioWrapper">
                <MyRadio
                  label="Free Shipping"
                  handleChange={handleChange}
                  id="free"
                  value={0}
                  selected={selected}/>
                <MyRadio
                  label="Standard Shipping"
                  handleChange={handleChange}
                  id="standard"
                  value={10}
                  selected={selected}/>
                <MyRadio
                  label="Express Shipping"
                  handleChange={handleChange}
                  id="express"
                  value={25.3}
                  selected={selected}/>
              </div>
            </div>
            <div className="navbar">
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
                <TotalPrice
                  products={products}
                  selected={selected}
                />
              </div>
              <MyButton
                className="myButton black"
                description={"Pay now"}
              />
              <Advertising/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;