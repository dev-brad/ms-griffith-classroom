import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Banner = ({ icon, text }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "succulent.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              webpOptions: { quality: 70 }
              quality: 50
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
            )
          }
        }
      }
    `
  )

  const bgImage = getImage(image.childImageSharp)

  return (
    <BgImage
      image={bgImage}
      className={
        text === " English Language Arts"
          ? "banner banner-txt-sm bgImage"
          : "banner bgImage"
      }
    >
      {icon}
      {text}
    </BgImage>
  )
}

export default Banner
