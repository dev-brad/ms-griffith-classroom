import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { FaCamera } from "react-icons/fa"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const Photos = () => {
  return (
    <Layout>
      <Seo title="Photos" />
      <Banner
        icon={<FaCamera className="banner-icon" />}
        text=" Class Photos"
      />

      <ClassContent subject="N" />
    </Layout>
  )
}

export default Photos
