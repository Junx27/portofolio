import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo/nuin.png";

function NavBarComponents() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div className="navigasi">
      <Navbar
        expand="lg"
        className={changeColor ? "color-active" : "color-non-active"}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2 fw-bold">
            Nuin<span>B</span>utik
            <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="btn btn-warning btn-outline-none"
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((links) => {
                return (
                  <div className="nav-link" key={links.id}>
                    <NavLink
                      to={links.path}
                      href="#home"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {links.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-warning rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComponents;
