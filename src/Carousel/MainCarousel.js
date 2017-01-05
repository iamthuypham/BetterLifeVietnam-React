import React from 'react'
import {Carousel} from 'react-bootstrap'

import education1 from '../images/education1.jpeg'
import education2 from '../images/education2.jpeg'
import education3 from '../images/education3.jpeg'
import education4 from '../images/education4.jpeg'

import '../Carousel/MainCarousel.css'

const MainCarousel = () => (
  <div className='center-top-col'>
    <Carousel>
      <Carousel.Item>
        <img alt="" src={education1} />
        <Carousel.Caption>
          <span className='' >distributing books &amp; bringing thousands of smiles every year</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={education2} />
        <Carousel.Caption>
          <span>foster the learning</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={education3} />
        <Carousel.Caption>
          <span>making education possible</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={education4} />
        <Carousel.Caption>
          <span>organizing voluntourism programs to collect funds</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default MainCarousel
