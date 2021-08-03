import React from "react"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
// import Homework from "./Homework"

const SubjectMaterial = ({ subject }) => {
  const [option, setOption] = useState("M")

  const toggleM = () => {
    setOption("M")
  }
  const toggleH = () => {
    setOption("H")
  }

  return (
    <div className="material">
      <Container>
        <Row>
          <Col>
            <button
              className={
                option === "M" ? "mt-heading mt-selected" : "mt-heading"
              }
              onClick={toggleM}
            >
              Material
            </button>
          </Col>
          <Col>
            <button
              className={
                option === "H" ? "mt-heading mt-selected" : "mt-heading"
              }
              onClick={toggleH}
            >
              Homework
            </button>
          </Col>
        </Row>

        {/* <Homework subject={subject} /> */}
      </Container>
    </div>
  )
}

export default SubjectMaterial
