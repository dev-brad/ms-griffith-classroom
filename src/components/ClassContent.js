import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar"
import SubjectMaterial from "./SubjectMaterial"
import Construction from "./Construction"
import Schedule from "./Schedule"

const ClassContent = ({ subject, schedule, construct }) => {
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
          <div className={construct === "Y" ? "" : "hide-section"}>
            <Construction />
          </div>
          <div className={schedule === "Y" ? "" : "hide-section"}>
            <Schedule />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ClassContent
