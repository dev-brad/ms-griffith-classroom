import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { IoPeopleCircle } from "react-icons/io5"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const SocialStudies = () => {
  return (
    <Layout>
      <Seo title="Social Studies" />
      <Banner
        icon={<IoPeopleCircle className="banner-icon" />}
        text=" Social Studies"
      />
      <ClassContent subject="Social Studies" />
    </Layout>
  )
}

export default SocialStudies
