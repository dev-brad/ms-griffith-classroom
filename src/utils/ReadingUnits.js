import { graphql, useStaticQuery } from "gatsby"

const ReadingUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulHomework(filter: { subject: { eq: "Reading" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulHomework.unit
}

export default ReadingUnits
