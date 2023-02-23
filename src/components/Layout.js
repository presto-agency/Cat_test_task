import React from 'react';
import {Helmet} from 'react-helmet'
import Header from "./UI/Header/Header";

const Layout = ({children, title='CatTestTask'}) =>{
  return(
    <>
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div className='wrapper active'>
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout;