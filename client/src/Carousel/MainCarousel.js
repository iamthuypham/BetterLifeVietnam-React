import React from 'react'
import {Carousel, Button} from 'react-bootstrap'
import {Link} from 'react-router'

import education1 from '../images/education1.jpeg'
import education2 from '../images/education2.jpeg'
import education3 from '../images/education3.jpg'
import education4 from '../images/education4.jpeg'
import TFB from '../images/TFB-slide.jpg'

import '../Carousel/MainCarousel.css'

const MainCarousel = () => (
  <div className='center-top-col'>
    <Carousel>
      <Carousel.Item>
        <img alt='' src={education1} />
        <Carousel.Caption>
          <span className='' >distributing books &amp; bringing thousands of smiles every year</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt='' src={education2} />
        <Carousel.Caption>
          <span>foster the learning & knowledge</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt='' src={education3} />
        <Carousel.Caption>
          <span>making education possible</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt='' src={education4} />
        <Carousel.Caption>
          <span>organizing voluntourism programs to collect funds</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='TFB-slide'>
        <img alt='' src={TFB} />
        <Carousel.Caption>
          <div>
            <div><span>tours for book</span></div>
            <div>
              <Button><Link to='/tours-travel-services'>Find Tours</Link></Button>
              <Button><a href='#TFB'>Learn More</a></Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default MainCarousel
