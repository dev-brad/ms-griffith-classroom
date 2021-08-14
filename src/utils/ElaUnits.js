import { graphql, useStaticQuery } from "gatsby"

const ElaUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulHomework(filter: { subject: { eq: "ELA" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulHomework.unit
}

export default ElaUnits
