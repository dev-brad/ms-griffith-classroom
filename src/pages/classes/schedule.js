import React from "react"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { BsFillClockFill } from "react-icons/bs"
import ClassContent from "../../components/ClassContent"

const Schedule = () => {
  return (
    <Layout>
      <Banner
        icon={<BsFillClockFill className="banner-icon" />}
        text=" Schedule"
      />
      <ClassContent subject="N" />
    </Layout>
  )
}

export default Schedule
