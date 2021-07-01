import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import LoginModal from "./LoginModal";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar className="landing-navbar" color="primary" dark expand="md">
        <NavbarBrand to="/">OurNet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Support
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="text-primary" to="/">
                    Frequent Questions
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="text-primary" to="/">
                    Contact
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <LoginModal />
          <Button color="warning" className="text-dark">
            Sign Up
          </Button>{" "}
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
