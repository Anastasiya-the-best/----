import React from 'react'
import { Col, Nav, Row, Tab, } from 'react-bootstrap'

export default function Courses() {
	return (
		<Tab.Container id='left-tabs-example' defaultActiveKey='f1'>
			<Row>
				<Col sm={3}>
					<Nav variant='pills' className='flex-column'>
						<Nav.Item>
							<Nav.Link eventKey='f1'>HTML/CSS</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey='f2'>JS</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey='f3'>React</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey='f1'>
							<h3 className='text-center'>HTML/CSS</h3>
							<p>
								HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.
							</p>

							<p>
								CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL.
							</p>
						</Tab.Pane>

						<Tab.Pane eventKey='f2'>
							<h3 className='text-center'>JavaScript</h3>
							<p>
								JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
							</p>
						</Tab.Pane>

						<Tab.Pane eventKey='f3'>
							<h3 className='text-center'>React</h3>
							<p>
								React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.
							</p>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	)
}
