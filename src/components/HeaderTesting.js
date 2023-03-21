import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const HeaderTesting = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, toggleModal] = useState(false);

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  const items = ["education", "experience", "contact"];

  const listItems = () => {
    <motion.ul>
      {items.map((i) => {
        <div>{i}</div>;
      })}
    </motion.ul>;
  };

  return (
    <motion.nav
      animate={menuOpen ? "open" : "closed"}
      variants={variants}
      //initial={false}
    >
      <Button color="link" onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
        Toggle
      </Button>
      {listItems}
    </motion.nav>

    /*
    <>
      <motion.Navbar sticky="top" expand="md">
        <NavbarBrand className="ms-sm-5" href="/">
          <h1 className="mt-1">[MI]</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}>
          <i
            className="fa fa-bars"
            style={{ color: "#c9b7db", fontSize: "28px" }}
          />
        </NavbarToggler>
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink
                //className="nav-link"
                onClick={closeNavbar}
                to="/"
                className={({ isActive }) =>
                  isActive ? "main-nav-link-active" : "main-nav-link-not-active"
                }
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem style={{ alignItems: "center" }}>
              <NavLink
                onClick={closeNavbar}
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "main-nav-link-active" : "main-nav-link-not-active"
                }
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem style={{ alignItems: "center" }}>
              <NavLink
                onClick={closeNavbar}
                to="/education"
                className={({ isActive }) =>
                  isActive ? "main-nav-link-active" : "main-nav-link-not-active"
                }
              >
                Education
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
    */
  );
};

export default HeaderTesting;
