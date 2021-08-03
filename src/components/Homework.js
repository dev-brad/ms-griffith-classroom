import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

const Homework = ({ subject }) => {
  //   const { homework } = useStaticQuery(
  //     graphql`
  //       query {
  //         homework: allContentfulHomework {
  //           nodes {
  //             id
  //             subject
  //             unitNumber
  //             assignmentDate
  //             dueDate
  //             title
  //             details {
  //               details
  //             }
  //             images {
  //               id
  //               title
  //               file {
  //                 url
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )

  return <div>Test</div>
  // homework.nodes.map(item => {
  //   if (item.subject === subject) {
  //     return (
  //       <section key={item.id}>
  //         <h4>{item.title}</h4>
  //         <p>Chapter {item.unit}</p>
  //         <p>{item.details.details}</p>
  //       </section>
  //     )
  //   }
  // })
}

export default Homework
