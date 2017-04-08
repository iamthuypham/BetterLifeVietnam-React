import React from 'react'
import { Accordion, Panel, Grid, Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import '../scenes/ToursTravelServices.css'

import ShowTourCard from '../Modal/ShowTourCard'
import ShowTravelMethodCard from '../Modal/ShowTravelMethodCard'
import tourData from '../tour.json'
import travelMethodData from '../travelMethod.json'
import Footer from './Footer'

class TourForBook extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  modifyHeight(showedCardDetail) {
    if (showedCardDetail) {
      document.getElementById("transitMethod").style.minHeight = "700px";
    } else {
      document.getElementById("transitMethod").style.minHeight = "300px";
    }
  }
  render () {
    return (
      <div>
        <Grid>
          <Row>
            {tourData.tours.map((tour) => (
              <ShowTourCard {...tour} key={tour.id} />
              ))}
          </Row>
        </Grid>
        <div className='container customTour'>
          <h1>Custom Tours</h1>
          <p>Thank you for trusting Tours for Books and giving us a chance to be your companion on your trip to Southeast Asia. In addition to specific day tours and packages, we offer customized tours based on your interests and needs. We are delighted to abide by your wishes and make it come true.</p>
          <p>Please email <strong>tfbinquiry@betterlifevietnam.org</strong>, and our tour consultants will reply back with advice and sample itineraries.</p>
        </div>
        <div className='grey-bg'>
          <div className='container'>
            <h1>Travel services</h1>
            <p>Tours For Books has launched <strong>the Vietnam Visa On Arrival arrangement service</strong> to shorten the cumbersome procedure and ease your worries. Being a fully-licensed and reputable tour operator protected by the law of Vietnam, you can certainly put your trust in our quick and secure Vietnam visa service. Please contact our travel consultants at <strong>tfbinquiry@betterlifevietnam.org</strong> for further information. To apply for a visa, please follow the instructions below.</p>
            <Accordion className='applyVisa container padding20'>
              <Panel header={<div><strong>Step 1</strong> - Provide us with essential details <FontAwesome name="caret-down"/></div>} eventKey='1'>
                <p>All applicants must email us with the following information:</p>
                <ul>
                  <li>Copy of your passport (must be valid for the next six months; PDF format is recommended)</li>
                  <li>Date and port of arrival (please choose Noi Bai/Hanoi, Danang or Tan SoNhat/Ho Chi Minh City or both regions)</li>
                  <li>Occupation</li>
                  <li>Length of stay (one month for tourist visa)</li>
                  <li>Location to pick up visa (usually, name of the city in your country, where the most convenient Vietnamese embassy or consulate is located)</li>
                </ul>
              </Panel>
              <Panel header={<div><strong>Step 2</strong> - Confirm and make payment <FontAwesome name="caret-down"/></div>} eventKey='2'>
                <p>You only need to confirm and pay the visa arrangement fee to <strong>Tours for Books</strong> and we will take care the rest. We accept most major credit cards and debit cards (Visa, Mastercard, and American Express) and Paypal.</p>
              </Panel>
              <Panel header={<div><strong>Step 3</strong> - Receive and print the approval letter <FontAwesome name="caret-down"/></div>} eventKey='3'>
                <p>After you submit your application and payment, we will start processing your visa for Vietnam. We will email you an approval letter within two business days. Then you just need to print the PDF attachment file (color preferred, but not required) and prepare at least two passport photos (4cm x 6cm).</p>
              </Panel>
              <Panel header={<div><strong>Step 4</strong> - Get your visa stamp upon arrival <FontAwesome name="caret-down"/></div>} eventKey='4'>
                <p>Upon arrival at Vietnam international airports in Hanoi, Da Nang or Ho Chi Minh City, you are required to fill out an entry/exit form (will be emailed together with approval letter). Then, provide the approval letter, passport, and photos, and pay a stamping fee to get the visa stamped onto your passport.</p>
              </Panel>
            </Accordion>
          </div>
        </div>
        <h1>Method Of Transit</h1>
        <Grid id="transitMethod">
          <Row>
            {travelMethodData.travelMethods.map((method) => (
              <ShowTravelMethodCard {...method} key={method.id} length={travelMethodData.travelMethods.length} handleHeight={this.modifyHeight.bind(this)}/>
              ))}
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

module.exports = TourForBook


// <p>Are you looking for a reliable tour agency to help you plan your trip to Vietnam? Choose <strong>Tours for Books</strong> for your bookings! Our services will make your trip to Vietnam even more meaningful.</p>
//           <p><strong>Better Life Vietnam</strong> has teamed up with <strong>Viet Dan Travel</strong> to launch the <strong>Tours for Books</strong> business. Profits generated from the tours will contribute to our education fund to provide books and scholarships to underprivileged children. By choosing <strong>Tours for Books</strong>, tourists truly help us to improve lives by buying books and providing scholarships to underprivileged children, as well as support disadvantaged youth in our Better Jobs for Youth Vendors in Hanoi project.</p>
//           <p><strong>Tours for Books</strong> offer a wide range of package tours, travel services and other travel solutions to individuals, families, large groups and travel agencies. Below you can find a list of some main products we offer:</p>