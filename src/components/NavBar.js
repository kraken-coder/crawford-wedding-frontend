import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Crawford Wedding</NavbarBrand>
      <Nav className="nav">
        <NavItem>
          <NavLink href="/attending">Guest List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/rsvp">RSVP</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/details">Details</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar