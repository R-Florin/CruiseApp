import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaOpencart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function Header({ favoritesSize, cartSize, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Navbar expand="lg" sticky="top" className="d-flex cruise-nav">
      <Navbar.Brand as={NavLink} to={"/"}>
        9NineCruiseS
      </Navbar.Brand>
      <Container className="container" fluid>
        <Navbar.Toggle
          a
          aria-controls="navbarScroll"
          className={`custom-toggle ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "350px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Deals"}>
              Deals
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Destinations"}>
              Destinations
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Fleet"}>
              Fleet
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/About"}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Contact"}>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Find something here..."
              className="me-2"
              onChange={handleSearchChange}
              aria-label="Search"
            />

            <Button type="submit" variant="outline-success-button">
              Search
              <CiSearch className="search-icon" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Nav className="icons">
        <Nav.Item
          className="d-flex align-items-center"
          as={NavLink}
          to={"/Favorite"}
        >
          <FaRegHeart className="fav-icon" />
          <span className="size">{favoritesSize}</span>
        </Nav.Item>
        <Nav.Item
          className="d-flex align-items-center"
          as={NavLink}
          to={"/Cart"}
        >
          <FaOpencart className="cart-icon" />
          <span className="size">{cartSize}</span>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Header;
