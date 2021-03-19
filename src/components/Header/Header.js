import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <header>
        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">Home</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/projects">Projects</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/articles">Articles</NavLink>

          {/* <span className="res">
            <a href={`${process.env.PUBLIC_URL}resume.pdf`}>Resume</a></span> */}

        </div>

      </header>
    </div>
  )
}
export default Header