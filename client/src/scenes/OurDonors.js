import React from 'react'
import Sponsor from '../Highlight/Sponsor'

const OurDonors = () => (
  <div className='container'>
    <div className='addMargin'>
      <h4>Thank you to our sponsors for your commitment to bring a brighter future to children of Vietnam. We appreciate your ongoing support.</h4>
      <h1>Individual Donors</h1>
      <div>
        <h4>Tobin James</h4>
        <h4>Walter family and friends</h4>
        <h4>Alyssa Kopelman and friends</h4>
        <h4>Hugh Adam</h4>
        <h4>Nguyen Cong Nghiem</h4>
        <h4>Thomas Hart</h4>
        <h4>Alyssa Murguia and friends</h4>
        <h4>Mathieu Lamolle</h4>
      </div>
      <h1>Corporate Sponsors</h1>
      <Sponsor />
    </div>
  </div>
)

module.exports = OurDonors
