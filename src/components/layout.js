import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbarr from './reusable/Navbar'
import Tables from './reusable/Tables'
import Dse from './reusable/Dse'

const Layout = ({ children }) => {
  return (
    <>
    <Navbarr />
    {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
