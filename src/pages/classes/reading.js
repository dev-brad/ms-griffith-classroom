import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { GiBookCover } from "react-icons/gi"
import ClassContent from "../../components/ClassContent"

const Reading = () => {
  return (
    <Layout>
      <Banner icon={<GiBookCover className="banner-icon" />} text=" Reading" />

      <ClassContent subject="Reading" />
    </Layout>
  )
}

export default Reading
