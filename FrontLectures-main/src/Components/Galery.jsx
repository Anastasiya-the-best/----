import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import galeryImg1 from '../Assets/galery-img1.jpg'
import galeryImg2 from '../Assets/galery-img2.jpg'
import galeryImg3 from '../Assets/galery-img3.jpg'

export default function Galery() {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={galeryImg1}
					/>

					<Carousel.Caption>
						<h3>Веб-разработка</h3>
						<p>Мы вас научим!</p>
					</Carousel.Caption>
				</Carousel.Item>


				<Carousel.Item>
					<img
						className='d-block w-100'
						src={galeryImg2}
					/>

					<Carousel.Caption>
						<h3>Backend на Python</h3>
						<p>Мы вас научим!</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src={galeryImg3}
					/>

					<Carousel.Caption>
						<h3>Веб-разработка</h3>
						<p>Мы вас научим!</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	)
}
