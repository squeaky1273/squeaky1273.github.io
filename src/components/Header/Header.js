// side navbar from trendmicro

import React from 'react'
import './Header.css';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { HashRouter as Router, Route} from 'react-router-dom'
import Home from '../Home/Home';
import ProjectsList from '../ProjectsList/ProjectsList';
import ArticlesList from '../ArticlesList/ArticlesList';

function Header() {
  return (
      <Router>
          <Route render={({ location, history }) => (
              <React.Fragment>
                  <SideNav
                      onSelect={(selected) => {
                          const to = '/' + selected;
                          if (location.pathname !== to) {
                              history.push(to);
                          }
                      }}
                  >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="">
                    <NavItem eventKey="">
                        <NavIcon>
                            <i class="fa fa-fw fa-home" />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="projects">
                        <NavIcon>
                            <i class="fa fa-fw fa-device" />
                        </NavIcon>
                        <NavText>
                            Projects
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="articles">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" />
                        </NavIcon>
                        <NavText>
                            Articles
                        </NavText>
                    </NavItem>
                    {/* <NavItem href={process.env.PUBLIC_URL + 'resume.pdf'}>
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" />
                        </NavIcon>
                        <NavText>
                            Resume
                        </NavText>
                    </NavItem>
                    <NavItem href="https://github.com/squeaky1273">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" />
                        </NavIcon>
                        <NavText>
                            Github
                        </NavText>
                    </NavItem>
                    <NavItem href="https://medium.com/@padyn">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" />
                        </NavIcon>
                        <NavText href="https://medium.com/@padyn">
                            Medium
                        </NavText>
                    </NavItem> */}
                  </SideNav.Nav>
                  </SideNav>
                  <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={ProjectsList}/>
                    <Route exact path="/articles" component={ArticlesList}/>
                  </main>
              </React.Fragment>
          )}
          />
      </Router>
  )
}
export default Header