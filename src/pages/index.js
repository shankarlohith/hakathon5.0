import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tables from '../components/reusable/Tables'
import Dse from '../components/reusable/Dse'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tables />
    <Dse />
  </Layout>
)

export default IndexPage
