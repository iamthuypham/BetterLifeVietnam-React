import React from 'react'
import education1 from '../images/education1.jpeg'
import { Image } from 'react-bootstrap'

const FreeBookLibrary = () => (
  <div className="container">
    <h1>Free book library for underprivileged children in Vietnam</h1>
  	<div className="center-top-col">
  		<Image src={ education1 } style={{margin:'3% 0'}} />
  		<h4>This project aims to buy books and make them available at no cost for as many children in possible throughout Vietnam. Those books that can be useful in the long-term will be managed by schools through a lending library. The pupils can borrow the textbooks from their school at the beginning of the semester then return those textbooks at the end of that semester. The next generation of pupils can reuse those textbooks. We will encourage the schools and pupils to try to keep the textbooks in good condition so that their brothers or sisters can use them in the future. We will replace the broken ones and update new textbooks as needed.</h4>
  		<h4>Please visit our blog to see. http://better-life-vietnam.blogspot.com/2014/01/blvs-trip-delivering-400-sets-of.html">our successful stories</h4>
  	</div>
	</div>
)

module.exports = FreeBookLibrary
