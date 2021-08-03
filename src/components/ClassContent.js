import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar"
import SubjectMaterial from "./SubjectMaterial"
import Construction from "../components/Construction"

const ClassContent = ({ subject }) => {
  return (
    <Container className="hero">
      <Row>
        <Col lg={3} md={4}>
          <Sidebar />
        </Col>
        <Col lg={9} md={8}>
          <section className={subject === "N" ? "hide-section" : ""}>
            <SubjectMaterial subject={subject} />
          </section>
          <Construction />
        </Col>
      </Row>
    </Container>
  )
}

export default ClassContent
