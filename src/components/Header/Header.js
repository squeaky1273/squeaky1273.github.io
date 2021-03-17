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
          
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/resume.pdf">Resume</NavLink>
          
          {/* <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            AiFillMediumSquare></NavLink> */}

        </div>

      </header>
    </div>
  )
}
export default Header