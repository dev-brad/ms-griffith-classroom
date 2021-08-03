import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div className="page">
      <div className="page-center">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
