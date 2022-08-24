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
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/experience">
              <i className="fa fa-list fa-lg" /> Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-info fa-lg" /> Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
