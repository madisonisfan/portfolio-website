import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <h1 className="mt-1">MI</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink
              //className="nav-link"
              to="/"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Experience
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

/*
<NavItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Projects
            </NavLink>
          </NavItem>
*/

/*
ICONS

 <i className="fa fa-home fa-lg" /> 
  <i className="fa fa-list fa-lg" />
   <i className="fa fa-info fa-lg" />
    <i className="fa fa-address-card fa-lg" />

*/
