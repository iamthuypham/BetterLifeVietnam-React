import React from 'react'
import {Carousel} from 'react-bootstrap'

import education1 from '../images/education1.jpeg'
import education2 from '../images/education2.jpeg'
import education3 from '../images/education3.jpeg'
import education4 from '../images/education4.jpeg'

import '../Carousel/MainCarousel.css'

const MainCarousel = () => (
  <div className='center'>
    <Carousel>
      <Carousel.Item>
        <img width={500} height={334} alt='900x500' src={education1} />
        <Carousel.Caption>
          <h3 className=''>distributing books &amp; bringing thousands of smiles every year</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={443} alt='900x500' src={education2} />
        <Carousel.Caption>
          <h3>foster the learning</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={443} alt='900x500' src={education3} />
        <Carousel.Caption>
          <h3>making education possible</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={443} alt='900x500' src={education4} />
        <Carousel.Caption>
          <h3>organizing voluntourism programs to collect funds</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default MainCarousel
