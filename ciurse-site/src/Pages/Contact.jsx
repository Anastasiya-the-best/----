import React from 'react'
import { Container,Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <Container style={{paddingTop: "35px"}}>
        <Form>
            <h1>Остались вопросы?</h1>
            <p>Оставьте свой номер телефона и мы вам перезвоним</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ваше имя</Form.Label>
                <Form.Control type="email" placeholder="Как к Вам можно обратиться?" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="email" placeholder="Ваш номер телефона" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="password" placeholder="Ваш e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Согласие на обработку персональных данных" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    </Container>
  )
}
