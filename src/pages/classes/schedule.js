import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { BsFillClockFill } from "react-icons/bs"
import ClassContent from "../../components/ClassContent"
import Seo from "../../components/Seo"

const Schedule = () => {
  return (
    <Layout>
      <Seo title="Schedule" />
      <Banner
        icon={<BsFillClockFill className="banner-icon" />}
        text=" Schedule"
      />
      <ClassContent subject="N" schedule="Y" />
    </Layout>
  )
}

export default Schedule
