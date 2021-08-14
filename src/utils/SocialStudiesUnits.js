import { graphql, useStaticQuery } from "gatsby"

const SocialStudiesUnits = () => {
  const units = useStaticQuery(
    graphql`
      query {
        allContentfulHomework(filter: { subject: { eq: "Social Studies" } }) {
          unit: distinct(field: unitNumber)
        }
      }
    `
  )

  return units.allContentfulHomework.unit
}

export default SocialStudiesUnits
