import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Container, Row, Col } from "react-bootstrap"
import slugify from "slugify"

const ClassButtons = ({ classText }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: {
            relativePath: {
              in: ["reading.jpg", "rela.jpg", "social-studies.jpg"]
            }
          }
          sort: { fields: absolutePath, order: ASC }
        ) {
          nodes {
            childImageSharp {
              gatsbyImageData(
                width: 2000
                quality: 50
                webpOptions: { quality: 70 }
                placeholder: BLURRED
              )
              id
            }
          }
        }
      }
    `
  )

  const bgImages = images.nodes
  var i = 0

  return (
    <section className="class-btns">
      <Container>
        <Row>
          {bgImages.map(imageData => {
            const { id } = imageData.childImageSharp
            const image = getImage(imageData.childImageSharp.gatsbyImageData)
            const text = classText[i]
            const slug = slugify(text, { lower: true })
            const url = "/classes/" + slug
            i += 1
            return (
              <Col lg={4} md={12} key={id}>
                <Link to={url}>
                  <BgImage
                    image={image}
                    className={
                      text === "social studies"
                        ? "class-btn-long bgImage"
                        : "class-btn bgImage"
                    }
                  >
                    {text}
                  </BgImage>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default ClassButtons
