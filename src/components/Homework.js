import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Homework = ({ subject, unit }) => {
  const { homework } = useStaticQuery(
    graphql`
      query {
        homework: allContentfulHomework {
          nodes {
            id
            subject
            unitNumber
            assignmentDate
            dueDate
            title
            details {
              details
            }
            linkTitle
            link
            images {
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

  return homework.nodes.map(item => {
    if (item.subject === subject && item.unitNumber == unit) {
      const assignDate = new Date(item.assignmentDate)
      const dueDate = new Date(item.dueDate)

      var images = []
      if (item.images != null) {
        item.images.forEach(image => {
          images.push(image)
        })
      }
      return (
        <section key={item.id} className="hw-item">
          <hr />
          <h4>{item.title}</h4>
          <p>{item.details.details}</p>
          <p>
            <b>Assignment Date:</b> {assignDate.getMonth() + 1}/
            {assignDate.getDate()}/{assignDate.getFullYear()} &nbsp;| &nbsp;
            <b>Due Date: </b>
            {dueDate.getMonth() + 1}/{dueDate.getDate()}/{dueDate.getFullYear()}
          </p>

          <p>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.linkTitle}
            </a>
          </p>
          {images.map(image => {
            return (
              <a
                key={image.id}
                className="hw-link"
                href={image.file.url}
                target="_blank"
                rel="noreferrer"
              >
                {image.title}
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

export default Homework
