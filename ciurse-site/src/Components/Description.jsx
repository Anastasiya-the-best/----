import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import dir from "../Assets/dir.jpg"

export default function Description() {
  return (
    <Container>
        <Row className='mt-5'>
				<Col xs={4}>
					<Image src={dir} roundedCircle className='w-100' />
				</Col>

				<Col>
					<h3 className='text-center'>Директор</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio! Nisi praesentium a quasi amet vitae officia vero. Odit vero fugiat alias ab nihil similique, deleniti eius consectetur debitis possimus.</p>
				</Col>
			</Row>
    </Container>
  )
}
