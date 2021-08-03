import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { IoPeopleCircle } from "react-icons/io5"
import ClassContent from "../../components/ClassContent"

const SocialStudies = () => {
  return (
    <Layout>
      <Banner
        icon={<IoPeopleCircle className="banner-icon" />}
        text=" Social Studies"
      />
      <ClassContent subject="Social Studies" />
    </Layout>
  )
}

export default SocialStudies
