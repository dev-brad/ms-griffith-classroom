import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Units = ({ subject, unit }) => {
  const { units } = useStaticQuery(
    graphql`
      query {
        units: allContentfulUnits(sort: { fields: publishDate, order: DESC }) {
          nodes {
            id
            subject
            unitNumber
            title
            publishDate
            description {
              description
            }
            resources {
              id
              title
              file {
                url
              }
            }
          }
        }
      }
    `
  )

  return units.nodes.map(item => {
    if (item.subject === subject && item.unitNumber == unit) {
      var resources = []
      if (item.resources != null) {
        item.resources.forEach(resource => {
          resources.push(resource)
        })
      }
      return (
        <section key={item.id} className="hw-item">
          <hr />
          <h4>{item.title}</h4>
          <p>{item.description.description}</p>
          {resources.map(resource => {
            return (
              <a
                key={resource.id}
                className="hw-link"
                href={resource.file.url}
                target="_blank"
                rel="noreferrer"
              >
                {resource.title}
              </a>
            )
          })}
        </section>
      )
    } else {
      return <div key={item.id}></div>
    }
  })
}

export default Units
