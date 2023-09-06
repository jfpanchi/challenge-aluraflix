import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Banner/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout