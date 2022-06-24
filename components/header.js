/** HEADER COMPONENT **/
import React, { useState } from "react";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavData from "../data/sitedata.json"; 

export default function Header() {
  const navMenu = NavData.siteMetadata[6]; 
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    <Navbar
      className="nav"
      variant="dark"
      sticky="top"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="d-none d-md-block" href="/#hero">
          mohan<span className="fw-bold">KUMAR</span>
        </Navbar.Brand>
        <Navbar.Brand className="d-sm-block d-md-none" href="/#hero">
          m<span className="fw-bold">K</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            {navMenu.nav.map((item, index) => {
              return (
                <Nav.Item key={index}>
                  <Link href={item.url}>
                    <a className="text-white fw-bold"  onClick={() => setExpanded(false)}> {item.name} </a>
                  </Link>
                  <hr className="d-md-block d-lg-none navlink-border" />
                </Nav.Item>
              );
            })}
          </Nav>
          
        </Navbar.Collapse>
      </Container> 
    </Navbar>
    
    </>
  );
}
