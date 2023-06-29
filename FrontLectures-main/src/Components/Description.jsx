import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import dirImg from '../Assets/dir.png'

export default function Description() {
	return (
		<Container>
			<Row className='mt-5'>
				<Col xs={4}>
					<Image src={dirImg} roundedCircle className='w-100' />
				</Col>

				<Col>
					<h3 className='text-center'>Директор</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio! Nisi praesentium a quasi amet vitae officia vero. Odit vero fugiat alias ab nihil similique, deleniti eius consectetur debitis possimus.</p>
				</Col>
			</Row>
		</Container>
	)
}
