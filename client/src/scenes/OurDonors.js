import React from 'react'
import Sponsor1 from '../Highlight/Sponsor1'
import Footer from './Footer'

const OurDonors = () => (
  <div className='container'>
    <div className='addMargin'>
      <h4>Thank you to our sponsors for your commitment to bring a brighter future to children of Vietnam. We appreciate your ongoing support.</h4>
      <h1 style={{textAlign:'left'}}>Individual Donors</h1>
      <div>
        <p>Tobin James</p>
        <p>Walter family and friends</p>
        <p>Alyssa Kopelman and friends</p>
        <p>Hugh Adam</p>
        <p>Nguyen Cong Nghiem</p>
        <p>Thomas Hart</p>
        <p>Alyssa Murguia and friends</p>
        <p>Mathieu Lamolle</p>
      </div>
      <h1 style={{textAlign:'left'}}>Corporate Sponsors</h1>
      <Sponsor1 />
    </div>
    <Footer />
  </div>
)

module.exports = OurDonors
