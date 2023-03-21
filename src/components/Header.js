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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, toggleModal] = useState(false);

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar sticky="top" expand="md">
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

            {/*<NavItem style={{ alignItems: "center" }}>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "main-nav-link-active" : "main-nav-link-not-active"
                }
              >
                Experience
              </NavLink>
              </NavItem>*/}
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
          <div
            className="d-block d-md-none"
            style={{ flexDirection: "row", paddingTop: 15 }}
          >
            <Button
              outline
              onClick={() => toggleModal(!modalOpen)}
              style={{
                borderColor: "#171729",
                //padding: 0,
                marginRight: 10,
                paddingBottom: 15,
              }}
            >
              <i
                className="fa fa-envelope"
                style={{ color: "#8b50e3", fontSize: "28px" }}
              />
            </Button>

            <a
              href="https://www.linkedin.com/in/madison-isfan/"
              style={{ color: "#8b50e3", marginRight: 20 }}
            >
              <i className="fa fa-linkedin" style={{ fontSize: "30px" }} />
            </a>

            <a
              href="https://github.com/madisonisfan"
              style={{ color: "#8b50e3", marginRight: 20 }}
            >
              <i className="fa fa-github fa-lg" style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuTP6I1OS2lGOI8Qq4CD3VA"
              style={{ color: "#8b50e3", marginRight: 20 }}
            >
              <i
                className="fa fa-youtube-play fa-lg"
                style={{ fontSize: "30px" }}
              />
            </a>
          </div>
        </Collapse>
      </Navbar>
      <Modal
        isOpen={modalOpen}
        toggle={() => toggleModal(!modalOpen)}
        className="email-modal"
        centered
      >
        <ModalBody className="email-modal-body">
          <a href="mailto:yourmail@domain.com" className="email-link">
            isfanmadison@gmail.com
          </a>
        </ModalBody>
      </Modal>
    </>
  );
};

/*

  <NavItem
            style={{ alignItems: "center" }}
            className="d-block d-md-none"
          >
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Contact
            </NavLink>
          </NavItem>

*/

/*
    <NavItem>
            <Button outline className="home-button">
              Resume
            </Button>
          </NavItem>
*/

/*

          <NavItem>
            <Button outline className="home-button">
              Contact
            </Button>
          </NavItem>
<NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "main-nav-link-active" : "main-nav-link-not-active"
              }
            >
              Contact
            </NavLink>
*/

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
