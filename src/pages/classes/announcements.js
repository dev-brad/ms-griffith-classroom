import React from "react"
import Layout from "../../components/Layout"
import { BsExclamationSquareFill } from "react-icons/bs"
import Banner from "../../components/Banner"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const Announcements = () => {
  return (
    <Layout>
      <Seo title="Announcements" />
      <Banner
        icon={<BsExclamationSquareFill className="banner-icon" />}
        text=" Announcements"
      />
      <ClassContent subject="N" announce="Y" />
    </Layout>
  )
}

export default Announcements
