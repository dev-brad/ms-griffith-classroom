import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"
import Homework from "./Homework"
import readingUnits from "../utils/ReadingUnits"
import elaUnits from "../utils/ElaUnits"
import socialStudiesUnits from "../utils/SocialStudiesUnits"

const SubjectMaterial = ({ subject }) => {
  var units
  switch (subject) {
    case "Reading":
      units = readingUnits()
      break
    case "ELA":
      units = elaUnits()
      break
    case "Social Studies":
      units = socialStudiesUnits()
      break
    default:
      units = []
  }

  const unitsDesc = units.sort((a, b) => b - a)
  const maxUnit = unitsDesc[0]

  const [unitDisp, setUnit] = useState(maxUnit)

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
          <Col className="unit-heading">
            <h3>Unit {unitDisp} &nbsp;</h3>
            <Dropdown className="unit-dropdown">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                size="sm"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                {unitsDesc.map((unit, index) => {
                  return (
                    <Dropdown.Item key={index} onClick={() => setUnit(unit)}>
                      Unit {unit}
                    </Dropdown.Item>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
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
        <div className={option === "H" ? "hw-section" : "hide-section"}>
          <Homework subject={subject} unit={unitDisp} />
        </div>
      </Container>
    </div>
  )
}

export default SubjectMaterial
