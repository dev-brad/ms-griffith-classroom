import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { BsChatQuoteFill } from "react-icons/bs"
import Banner from "../components/Banner"
import { Container, Row, Col } from "react-bootstrap"
import Seo from "../components/Seo"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Banner icon={<BsChatQuoteFill />} text=" About Me" />

      <Container className="hero">
        <Row>
          <Col className="about-lg" lg={7} sm={12}>
            <h3>My Education</h3>
            <p>
              This school year will be my first year of teaching! I graduated
              with a Bachelor’s Degree in Elementary Education from Troy
              University in May 2021.
            </p>
            <h3>All About Me</h3>
            <p>
              I am originally from this area. My favorite things to do are
              traveling to new cities & places, seeing my favorite artists in
              concert, drinking a good cup of coffee, & decorating spaces. I
              love plants & fresh flowers, living out my faith, watercolor
              painting, & reading a good book.
            </p>
            <h3>A Few of My Favorite Things</h3>
            <ul>
              <li>
                <b>Birthday:</b> December 3
              </li>
              <li>
                <b>Colors:</b> pink & mustard yellow
              </li>
              <li>
                <b>Store:</b> Target
              </li>
              <li>
                <b>Flower:</b> tulips
              </li>
              <li>
                <b>Season:</b> fall
              </li>
              <li>
                <b>Scent:</b> lavender or any fall scent
              </li>
              <li>
                <b>Candy:</b> Mini Chewy Sweettarts
              </li>
              <li>
                <b>Drink:</b> coffee & Sonic cherry limeaids
              </li>
              <li>
                <b>Food:</b> chicken alfredo
              </li>
              <li>
                <b>Snack:</b> white cheddar popcorn & fruit
              </li>
              <li>
                <b>Restaurant:</b> Chick-fil-A
              </li>
              <li>
                <b>Animal:</b> Beluga whales
              </li>
              <li>
                <b>Books:</b> Little Women & Anne of Green Gables
              </li>
              <li>
                <b>TV show:</b> This Is Us
              </li>
            </ul>

            <h4>Thanks for getting to know me!</h4>
          </Col>

          {/* hide this Col on medium screens for expansion below  */}
          <Col className="about-md" md={7}>
            <h3>My Education</h3>
            <p>
              This school year will be my first year of teaching! I graduated
              with a Bachelor’s Degree in Elementary Education from Troy
              University in May 2021.
            </p>
            <h3>All About Me</h3>
            <p>
              I am originally from this area. My favorite things to do are
              traveling to new cities & places, seeing my favorite artists in
              concert, drinking a good cup of coffee, & decorating spaces. I
              love plants & fresh flowers, living out my faith, watercolor
              painting, & reading a good book.
            </p>
          </Col>

          <Col lg={5} md={5} sm={12}>
            <StaticImage
              src="../assets/images/gracie-grad.jpg"
              alt="Ms. Griffith at College Graduation"
              className="hero-img about-img"
              placeholder="tracedSVG"
              layout="constrained"
            ></StaticImage>
          </Col>
        </Row>

        {/* expand width of this section on medium screens - hide on others */}
        <Row className="about-md about-sm">
          <Col lg={0} md={12} sm={0}>
            <h3>A Few of My Favorite Things</h3>
            <ul>
              <li>
                <b>Birthday:</b> December 3
              </li>
              <li>
                <b>Colors:</b> pink & mustard yellow
              </li>
              <li>
                <b>Store:</b> Target
              </li>
              <li>
                <b>Flower:</b> tulips
              </li>
              <li>
                <b>Season:</b> fall
              </li>
              <li>
                <b>Scent:</b> lavender or any fall scent
              </li>
              <li>
                <b>Candy:</b> Mini Chewy Sweettarts
              </li>
              <li>
                <b>Drink:</b> coffee & Sonic cherry limeaids
              </li>
              <li>
                <b>Food:</b> chicken alfredo
              </li>
              <li>
                <b>Snack:</b> white cheddar popcorn & fruit
              </li>
              <li>
                <b>Restaurant:</b> Chick-fil-A
              </li>
              <li>
                <b>Animal:</b> Beluga whales
              </li>
              <li>
                <b>Books:</b> Little Women & Anne of Green Gables
              </li>
              <li>
                <b>TV show:</b> This Is Us
              </li>
            </ul>

            <h4>Thanks for getting to know me!</h4>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
