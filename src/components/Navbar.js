import React from "react"
import { Link } from "gatsby"
import { RiPlantFill } from "react-icons/ri"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="nav-center">
        <Navbar.Brand>
          <Link to="/">
            <RiPlantFill
              className="nav-icon"
              size={28}
              title="succulent plant"
            />
            &nbsp;Ms. Griffith's Class
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" activeClassName="active-link" className="nav-link">
              home
            </Link>
            <NavDropdown
              renderMenuOnMount={true}
              title="Classes"
              id="basic-nav-dropdown"
            >
              <Link
                to="/classes/reading"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                reading
              </Link>
              <Link
                to="/classes/ela"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                english language arts
              </Link>
              <Link
                to="/classes/social-studies"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                social studies
              </Link>

              <NavDropdown.Divider />

              <Link
                to="/classes/newsletter"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                weekly newsletter
              </Link>
              <Link
                to="/classes/schedule"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                schedule
              </Link>
              <Link
                to="/classes/photos"
                activeClassName="active-drop-link"
                className="drop-link"
              >
                class photos
              </Link>
            </NavDropdown>

            <Link
              to="/links"
              activeClassName="active-link"
              className="nav-link"
            >
              helpful links
            </Link>
            <Link
              to="/about"
              activeClassName="active-link"
              className="nav-link"
            >
              about me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
