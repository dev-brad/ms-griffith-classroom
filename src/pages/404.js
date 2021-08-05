import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Button } from "react-bootstrap"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main>
        <section>
          <h1>You get an "A" for effort, but this page doesn't exist.</h1>
          <Link to="/">
            <Button variant="warning">Return to Home Page</Button>
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default Error
