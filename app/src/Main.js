import React, { Component } from 'react';
import { Route, HashRouter, useRouteMatch } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import './firebaseInit';

import Landing from './Landing';
import Stats from './Stats';

function Main() {
  return (
    <HashRouter>
      <div>
        <Navbar expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + "/images/brand.png"}
                style={{
                  height: "35px",
                  width: "auto",
                  marginTop: "-5px",
                  marginRight: "-5px",
                }}
                alt="S"
              ></img>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/stats">
                <Nav.Link>{"Stats"}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/stats" component={Stats} />
        </div>
      </div>
    </HashRouter>
  )
}

export default Main;