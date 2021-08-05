import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { FaPencilAlt } from "react-icons/fa"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const ELA = () => {
  return (
    <Layout>
      <Seo title="ELA" />
      <Banner
        icon={<FaPencilAlt className="banner-icon" />}
        text=" English Language Arts"
      />

      <ClassContent subject="ELA" />
    </Layout>
  )
}

export default ELA
