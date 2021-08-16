import { graphql, useStaticQuery } from "gatsby"

const ReadingUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulUnits(filter: { subject: { eq: "Reading" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulUnits.unit
}

export default ReadingUnits
