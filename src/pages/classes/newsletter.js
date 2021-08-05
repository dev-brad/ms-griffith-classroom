import React from "react"
import Layout from "../../components/Layout"
import { BsExclamationSquareFill } from "react-icons/bs"
import Banner from "../../components/Banner"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const Newsletter = () => {
  return (
    <Layout>
      <Seo title="Newsletter" />
      <Banner
        icon={<BsExclamationSquareFill className="banner-icon" />}
        text=" Weekly Newsletter"
      />
      <ClassContent subject={"N"} />
    </Layout>
  )
}

export default Newsletter
