import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                {/* <span className="icon-bar" /> */}
                {/* <span className="icon-bar" /> */}
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  {/*<BrowserRouter basename={process.env.PUBLIC_URL}>style={{ color: '#000000' }} */}
                  <li className="nav-item"><a className="nav-link-basic" target="_blank"><NavLink to='/' >Home</NavLink></a></li>
                  {/*<li className="nav-item"><a className="nav-link" target="_blank"><NavLink to='/skill'>Skills</NavLink></a></li>*/}
                  {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
                  <li className="nav-item"><a className="nav-link-basic" target="_blank"><NavLink to='/qualification'>Qualification</NavLink></a></li>
                  <li className="nav-item"><a className="nav-link-basic" target="_blank"><NavLink to='/research'>Research</NavLink></a></li>
                  {/* <li className="nav-item"><a className="nav-link" target="_blank"><NavLink to='/skill' style={{ color: '#0100fe' }}>Skills</NavLink></a></li> */}
                  {/* <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{ color: '#0100fe' }}>Skills
                    </a>
                    <ul className="dropdown-menu"> */}
                      {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
                      {/* <li className="nav-item"><a className="nav-link" target="_blank"><NavLink to='/skill' style={{ color: '#0100fe' }}>Languages</NavLink></a></li>
                      <li className="nav-item"><a className="nav-link" target="_blank"><NavLink to='/framework' style={{ color: '#0100fe' }}>Frameworks</NavLink></a></li> */}
                      {/*</BrowserRouter>*/}
                    {/* </ul>
                  </li> */}
                  <li className="nav-item"><a className="nav-link-basic" target="_blank"><NavLink to='/development'>Development</NavLink></a></li>
                  {/*</BrowserRouter>*/}
                  {/*<li className="nav-item"><a className="nav-link" target="_blank"><NavLink to='/contact'>Contact</NavLink></a></li>*/}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  };
};