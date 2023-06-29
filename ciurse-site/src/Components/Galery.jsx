import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import galeryImg1 from '../Assets/galery-img1.jpeg'
import galeryImg2 from '../Assets/galery-img2.png'
import galeryImg3 from '../Assets/galery-img3.png'


export default function Galery() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            src={galeryImg1}
            className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Энергия</h3>
                <p>Мы вас будем заряжать энергией</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            src={galeryImg2}
            className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Энергия</h3>
                <p>Мы вас будем заряжать энергией</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            src={galeryImg3}
            className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Энергия</h3>
                <p>Мы вас будем заряжать энергией</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

  )
}
