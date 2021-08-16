import { graphql, useStaticQuery } from "gatsby"

const SocialStudiesUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulUnits(filter: { subject: { eq: "Social Studies" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulUnits.unit
}

export default SocialStudiesUnits
