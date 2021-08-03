import React from "react"
import Layout from "../../components/Layout"
import { BsExclamationSquareFill } from "react-icons/bs"
import Banner from "../../components/Banner"
import ClassContent from "../../components/ClassContent"

const Newsletter = () => {
  return (
    <Layout>
      <Banner
        icon={<BsExclamationSquareFill className="banner-icon" />}
        text=" Weekly Newsletter"
      />
      <ClassContent subject={"N"} />
    </Layout>
  )
}

export default Newsletter
