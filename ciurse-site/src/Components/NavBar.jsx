import React from 'react'
import logo from '../Assets/Logo.png'
import {Container, Navbar, Form, Nav, Button} from "react-bootstrap"

export default function NavBar() {
  return (
    <Navbar expand="md"  className="bg-body-tertiary"> 
        <Container>
        <Navbar.Brand href="home">
            <img 
            src={logo}
            width="30"
            height="30"
            className='d-inlink-block aling-top'/>
            Front Lectures
        </Navbar.Brand>
        <Navbar.Toggle
        aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id= "basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="home">Главная</Nav.Link>
                <Nav.Link href="Course">Курсы</Nav.Link>
                <Nav.Link href="contact">Контакты</Nav.Link>
                <Nav.Link href="lessons">Статьи</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Найти"
                className="me-2"
                aria-label="Search"/>
                <Button variant="outline-cuccess">
                    Найти
                </Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
