import React from "react"
import Layout from "../components/Layout"
import { HiLink } from "react-icons/hi"
import { FaArrowAltCircleRight } from "react-icons/fa"
import Banner from "../components/Banner"
import { Container } from "react-bootstrap"

const Links = () => {
  return (
    <Layout>
      <Banner icon={<HiLink />} text=" Helpful Links" />
      <Container>
        <p>
          Here are some links you may find helpful throughout the school year:
        </p>
        <ul className="links">
          <li>
            <a href="https://www.pcboe.net/" target="_blank" rel="noreferrer">
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;Phenix City
              Schools Home Page
            </a>
          </li>
          {/* <li>
          <a href="https://www.pcboe.net/" target="_blank" rel="noreferrer">
            Another Link
          </a>
        </li> */}
        </ul>
        <h5>More links coming soon!</h5>
      </Container>
    </Layout>
  )
}

export default Links
