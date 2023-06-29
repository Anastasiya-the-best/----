import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import HTML from "../Assets/HTML.png"
import CSS from "../Assets/CSS.jpg"
import JS from "../Assets/JS.png"
import '../Stiles/Lesson.css'


export default function Lesson() {
  return (
    <Container className='all' >
        <Row xs={1} md={2} lg={3} className="g-5 mt-1">
            <Col>
                <Card   style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={HTML} style={{height: '18rem'}}/>
                    <Card.Body>
                        <Card.Title>HTML</Card.Title>
                        <Card.Text>
                            <Container className="styl" >
                            стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора. 
                            </Container>
                        </Card.Text>
                        <Button className="color" variant="primary"><a href="https://ru.wikipedia.org/wiki/HTML" >Перейти</a></Button>
                    </Card.Body>
                </Card>
            </Col>    
            <Col>
                <Card    style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={CSS} style={{height: '18rem'}}/>
                    <Card.Body>
                        <Card.Title>CSS</Card.Title>
                        <Card.Text>
                            <Container className="styl" >
                            формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL.
                            </Container>
                        </Card.Text>
                        <Button className="color" variant="primary" ><a href="https://ru.wikipedia.org/wiki/CSS" >Перейти</a></Button>
                    </Card.Body>
                </Card>
                </Col>
            <Col>
                <Card    style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={JS} style={{height: '18rem'}} />
                    <Card.Body>
                        <Card.Title>JS</Card.Title>
                        <Card.Text>
                            <Container className="styl" >
                            мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
                            </Container>
                        </Card.Text>
                        <Button className="color" variant="primary"><a href="https://ru.wikipedia.org/wiki/JavaScript" >Перейти</a></Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
