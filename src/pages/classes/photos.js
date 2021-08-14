import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Banner from "../../components/Banner"
import { FaCamera } from "react-icons/fa"
import { Container, Row, Col, Dropdown } from "react-bootstrap"
import Sidebar from "../../components/Sidebar"
import photoMonths from "../../utils/PhotoMonths"
import Seo from "../../components/Seo"

const Photos = ({ data }) => {
  const photos = data.allContentfulClassPhotos.nodes
  const months = photoMonths()

  const displayMth = month => {
    switch (month.substring(5)) {
      case "01":
        return "January " + month.substring(0, 4)
      case "02":
        return "February " + month.substring(0, 4)
      case "03":
        return "March " + month.substring(0, 4)
      case "04":
        return "April " + month.substring(0, 4)
      case "05":
        return "May " + month.substring(0, 4)
      case "06":
        return "June " + month.substring(0, 4)
      case "07":
        return "July " + month.substring(0, 4)
      case "08":
        return "August " + month.substring(0, 4)
      case "09":
        return "September " + month.substring(0, 4)
      case "10":
        return "October " + month.substring(0, 4)
      case "11":
        return "November " + month.substring(0, 4)
      case "12":
        return "December " + month.substring(0, 4)
      default:
        return ""
    }
  }

  const [monthSelected, setMonthSelected] = useState(months[0])
  const [dispMonth, setMonth] = useState(displayMth(months[0]))

  return (
    <Layout>
      <Seo title="Photos" />
      <Banner
        icon={<FaCamera className="banner-icon" />}
        text=" Class Photos"
      />

      <Container>
        <Row>
          <Col lg={3} md={4}>
            <Sidebar />
          </Col>

          <Col lg={9} md={8}>
            <Container className="hero">
              <Row>
                <h4>Take a peek at what we've been up to...</h4>
              </Row>
              <Row>
                <Col className="unit-heading">
                  <h3>{dispMonth} &nbsp;</h3>
                  <Dropdown className="unit-dropdown">
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      size="sm"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      {months.map((month, index) => {
                        const dropMonth = displayMth(month)
                        return (
                          <Dropdown.Item
                            key={index}
                            onClick={() => {
                              setMonth(displayMth(month))
                              setMonthSelected(month)
                            }}
                          >
                            {dropMonth}
                          </Dropdown.Item>
                        )
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              <Row>
                <p>Click an image to view in full.</p>
              </Row>

              <Row>
                {photos.map(photo => {
                  const { id, title, caption, date, image } = photo
                  const imagePath = getImage(image)

                  {
                    if (date.substring(0, 7) === monthSelected) {
                      return (
                        <Col key={id} md={6} sm="12">
                          <a
                            href={image.file.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GatsbyImage
                              image={imagePath}
                              className="class-img"
                              alt={title}
                            />
                          </a>
                          <p className="caption text-small">{caption}</p>
                        </Col>
                      )
                    } else {
                      return <></>
                    }
                  }
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulClassPhotos {
      nodes {
        id
        title
        caption
        date
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          file {
            url
          }
        }
      }
    }
  }
`

export default Photos
