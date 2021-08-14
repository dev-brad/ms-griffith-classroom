import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Schedule = () => {
  return (
    <section>
      <h3>Ms. Griffith's Homeroom</h3>
      <Container>
        <Row className="schedule">
          <Col sm={3}>
            <p>7:30 - 8:10</p>
          </Col>
          <Col sm={9}>
            <p>Breakfast & Morning Routine</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>8:10 - 10:10</p>
          </Col>
          <Col sm={9}>
            <p>Math & Science with Mrs. Taff</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>10:10 - 10:55</p>
          </Col>
          <Col sm={9}>
            <p>Exploratory (Mon, Tues, Fri)</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>10:55 - 11:10</p>
          </Col>
          <Col sm={9}>
            <p>Math & Science with Mrs. Taff</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>11:10 - 11:35</p>
          </Col>
          <Col sm={9}>
            <p>Phonics</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>11:35 - 12:05</p>
          </Col>
          <Col sm={9}>
            <p>Lunch</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>12:05 - 12:40</p>
          </Col>
          <Col sm={9}>
            <p>English Language Arts</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>12:40 - 1:25</p>
          </Col>
          <Col sm={9}>
            <p>P.E.</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>1:25 - 1:40</p>
          </Col>
          <Col sm={9}>
            <p>English Language Arts (continued)</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>1:40 - 2:10</p>
          </Col>
          <Col sm={9}>
            <p>Tier II Group</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>2:10 - 2:50</p>
          </Col>
          <Col sm={9}>
            <p>Social Studies</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>2:50 - 3:00</p>
          </Col>
          <Col sm={9}>
            <p>Dismissal</p>
          </Col>
        </Row>
      </Container>

      <h3 className="new-schedule">Mrs. Taff's Homeroom</h3>
      <Container>
        <Row className="schedule">
          <Col sm={3}>
            <p>7:30 - 8:10</p>
          </Col>
          <Col sm={9}>
            <p>Breakfast & Morning Routine</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>8:10 - 9:00</p>
          </Col>
          <Col sm={9}>
            <p>English Language Arts</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>9:00 - 9:30</p>
          </Col>
          <Col sm={9}>
            <p>Tier II Group</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>9:30 - 10:10</p>
          </Col>
          <Col sm={9}>
            <p>Social Studies</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>10:10 - 10:55</p>
          </Col>
          <Col sm={9}>
            <p>Exploratory (Mon, Thurs, Fri)</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>10:55 - 11:10</p>
          </Col>
          <Col sm={9}>
            <p>Phonics</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>11:10 - 11:35</p>
          </Col>
          <Col sm={9}>
            <p>Math & Science with Mrs. Taff</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>11:35 - 12:05</p>
          </Col>
          <Col sm={9}>
            <p>Lunch</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>12:05 - 1:30</p>
          </Col>
          <Col sm={9}>
            <p>Math & Science with Mrs. Taff</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>1:30 - 2:15</p>
          </Col>
          <Col sm={9}>
            <p>P.E.</p>
          </Col>
        </Row>
        <Row className="schedule">
          <Col sm={3}>
            <p>2:15 - 2:50</p>
          </Col>
          <Col sm={9}>
            <p>Math & Science with Mrs. Taff</p>
          </Col>
        </Row>
        <Row className="schedule alt-line">
          <Col sm={3}>
            <p>2:50 - 3:00</p>
          </Col>
          <Col sm={9}>
            <p>Dismissal</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Schedule
