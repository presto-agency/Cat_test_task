import * as React from "react"
import "../styles/style.scss"
import Layout from "../components/Layout";
import Cart from "../components/UI/Cart/Cart";

export default function Home() {
  return(
    <Layout title={'Home page'}>
      <div className="cartWrapper">
        <Cart/>
      </div>
    </Layout>
  )
}
