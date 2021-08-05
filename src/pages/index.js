import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import ClassButtons from "../components/ClassButtons"
import { Container, Row, Col } from "react-bootstrap"
import Seo from "../components/Seo"

export default function Home() {
  const classes = ["reading", "ela", "social studies"]

  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <header>
          <Container className="hero">
            <Row>
              <Col lg={3} md={4}>
                <StaticImage
                  src="../assets/images/gracie-main.JPG"
                  alt="Ms. Griffith"
                  className="hero-img"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
                <StaticImage
                  src="../assets/images/gracie-main-wide.JPG"
                  alt="Ms. Griffith"
                  className="hero-img-wide"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
              </Col>
              <Col lg={9} md={8} sm={12} className="hero-msg">
                <h2>Welcome to 3rd grade!</h2>
                <p>
                  My name is Ms. Griffith, and I am incredibly grateful to have
                  your student in my class this year. I am excited to cultivate
                  opportunities for each student to grow and develop in both
                  character and academics. Throughout the year we will focus on
                  building language skills and reading comprehension strategies,
                  as well as exploring and asking questions about the world
                  around us. We have many adventures ahead, and I look forward
                  to a fun and meaningful year!
                </p>
              </Col>
            </Row>
          </Container>
        </header>

        <ClassButtons classText={classes} />
      </main>
    </Layout>
  )
}
