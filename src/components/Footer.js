import React from "react"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-row">
        <p>
          <MdEmail />
          <i>
            &nbsp;Contact:&nbsp;
            <a href="mailto: hgriffith@pcboe.net">hgriffith@pcboe.net</a>
          </i>
        </p>
      </div>
      <div className="footer-row">
        <p className="text-small copyright">
          &copy; {new Date().getFullYear()}
          &nbsp;Gracie Griffith. Built by&nbsp;
          <a href="https://www.linkedin.com/in/brad-griffith/">Brad Griffith</a>
          &nbsp;with&nbsp;
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
