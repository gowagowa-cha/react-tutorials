import React from "react";
import { Nav, Row, Col, Navbar, Card, Container } from "react-bootstrap";
import reactLogo from "./img/logo192.png";
import alena from "./img/alena.jpg";
import Article from './Components/Article'

function App() {
  const { pathname } = window.location;
	const postID = pathname.split('/').pop()

  return (
    <div className="app">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <h2>
            <a href="/">REACT BLOG</a>
          </h2>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home" eventKey="/home">
                Главная
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" eventKey="/about">
                Обо мне
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {pathname === "/" && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={alena} width="500" />
              <Card.Body>
                <Card.Title>
                  <a href="/post/1">Card Title</a>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {pathname.includes("post") && postID && <Article postID={postID} />}

      {pathname === "/post/1" && (
        <Card.Body>
          <Card.Text>
            <h1>My post</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
            hic, repellendus obcaecati autem maiores quos velit, excepturi quasi
            id eius, aliquam illum voluptates voluptate ut. Nam vel porro nihil.
          </Card.Text>
        </Card.Body>
      )}

      {pathname === "/about" && (
        <Card.Body>
          <Card.Text>
            <h1>About Page</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
            hic, repellendus obcaecati autem maiores quos velit, excepturi quasi
            id eius, aliquam illum voluptates voluptate ut. Nam vel porro nihil.
          </Card.Text>
        </Card.Body>
      )}

      {pathname === "/home" && (
        <Card.Body>
          <Card.Text>
            <h1>Home Page</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
            hic, repellendus obcaecati autem maiores quos velit, excepturi quasi
            id eius, aliquam illum voluptates voluptate ut. Nam vel porro nihil.
          </Card.Text>
        </Card.Body>
      )}

      <br />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={reactLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap: My site (c) 2021
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
