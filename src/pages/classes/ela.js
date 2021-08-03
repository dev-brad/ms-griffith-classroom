import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { FaPencilAlt } from "react-icons/fa"
import ClassContent from "../../components/ClassContent"

const ELA = () => {
  return (
    <Layout>
      <Banner
        icon={<FaPencilAlt className="banner-icon" />}
        text=" English Language Arts"
      />

      <ClassContent subject="ELA" />
    </Layout>
  )
}

export default ELA
