import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { FaCamera } from "react-icons/fa"
import ClassContent from "../../components/ClassContent"

const Photos = () => {
  return (
    <Layout>
      <Banner
        icon={<FaCamera className="banner-icon" />}
        text=" Class Photos"
      />

      <ClassContent subject="N" />
    </Layout>
  )
}

export default Photos
