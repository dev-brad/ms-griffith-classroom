import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <aside className="sidebar sticky">
      <h3 className="sb-heading">Class Info</h3>
      <Link
        to="/classes/reading"
        activeClassName="sb-active-link"
        className="sb-link"
      >
        Reading
      </Link>
      <Link
        to="/classes/ela"
        activeClassName="sb-active-link"
        className="sb-link"
      >
        English Language Arts
      </Link>
      <Link
        to="/classes/social-studies"
        activeClassName="sb-active-link"
        className="sb-link sb-link-end"
      >
        Social Studies
      </Link>
      <hr />
      <Link
        to="/classes/newsletter"
        activeClassName="sb-active-link"
        className="sb-link"
      >
        Weekly Newsletter
      </Link>
      <Link
        to="/classes/schedule"
        activeClassName="sb-active-link"
        className="sb-link"
      >
        Schedule
      </Link>
      <Link
        to="/classes/photos"
        activeClassName="sb-active-link"
        className="sb-link"
      >
        Class Photos
      </Link>
    </aside>
  )
}

export default Sidebar
