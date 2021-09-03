import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Announcements = () => {
  const { items } = useStaticQuery(
    graphql`
      query {
        items: allContentfulAnnouncements(
          sort: { fields: expDate, order: ASC }
        ) {
          nodes {
            id
            title
            message {
              message
            }
            linkTitle
            link
            expDate
          }
        }
      }
    `
  )

  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const day = date.getDate().toString().padStart(2, "0")
  const currDate = year + "-" + month + "-" + day

  return items.nodes.map(item => {
    const {
      id,
      title,
      message: { message },
      linkTitle,
      link,
      expDate,
    } = item

    if (expDate >= currDate) {
      return (
        <section key={id}>
          <h3>{title}</h3>
          <p>{message}</p>
          <p>
            <a href={link} target="_blank" rel="noreferrer">
              {linkTitle}
            </a>
          </p>
          <hr />
        </section>
      )
    } else {
      return <div key={id}></div>
    }
  })
}

export default Announcements
