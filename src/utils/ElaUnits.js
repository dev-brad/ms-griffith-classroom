import { graphql, useStaticQuery } from "gatsby"

const ElaUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulUnits(filter: { subject: { eq: "ELA" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulUnits.unit
}

export default ElaUnits
