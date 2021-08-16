import React from "react"
import Layout from "../components/Layout"
import { HiLink } from "react-icons/hi"
import { FaArrowAltCircleRight } from "react-icons/fa"
import Banner from "../components/Banner"
import { Container } from "react-bootstrap"
import Seo from "../components/Seo"

const Links = () => {
  return (
    <Layout>
      <Seo title="Links" />
      <Banner icon={<HiLink />} text=" Helpful Links" />
      <Container>
        <p>
          Here are some links you may find helpful throughout the school year:
        </p>
        <ul className="links">
          <li>
            <a
              href="https://sites.google.com/mypcboe.net/les-mrstaff/home"
              target="_blank"
              rel="noreferrer"
            >
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;Mrs. Taff's
              Math & Science Class
            </a>
          </li>
          <li>
            <a href="https://www.pcboe.net/" target="_blank" rel="noreferrer">
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;Phenix City
              Schools Home Page
            </a>
          </li>
          <li>
            <a
              href="https://www.myschoolbucks.com/ver2/getmain?requestAction=home"
              target="_blank"
              rel="noreferrer"
            >
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;My School
              Bucks
            </a>
          </li>
          <li>
            <a
              href="https://alex.state.al.us/standardAll.php?grade=3&subject=ELA2015&summary=2"
              target="_blank"
              rel="noreferrer"
            >
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;3rd Grade
              Course of Study
            </a>
          </li>
          <li>
            <a href="https://www.jostens.com/" target="_blank" rel="noreferrer">
              <FaArrowAltCircleRight className="link-icon" /> &nbsp;Buy a
              Yearbook
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default Links
