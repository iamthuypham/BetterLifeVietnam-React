import React from 'react'
import { Grid, Row, Tabs, Tab} from 'react-bootstrap'

import '../scenes/ToursTravelServices.css'

import ShowTourCard from '../Modal/ShowTourCard'
import tourData from '../tour.json'

class TourForBook extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <div className='container addMargin'>
          <p>Are you looking for a reliable tour agency to help you plan your trip to Vietnam? Choose <strong>Tours for Books</strong> for your bookings! Our services will make your trip to Vietnam even more meaningful.</p>
          <p><strong>Better Life Vietnam</strong> has teamed up with <strong>Viet Dan Travel</strong> to launch the <strong>Tours for Books</strong> business. Profits generated from the tours will contribute to our education fund to provide books and scholarships to underprivileged children. By choosing <strong>Tours for Books</strong>, tourists truly help us to improve lives by buying books and providing scholarships to underprivileged children, as well as support disadvantaged youth in our Better Jobs for Youth Vendors in Hanoi project.</p>
          <p><strong>Tours for Books</strong> offer a wide range of package tours, travel services and other travel solutions to individuals, families, large groups and travel agencies. Below you can find a list of some main products we offer:</p>
        </div>
        <Grid>
          <Row>
            {tourData.tours.map((tour) => (
              <ShowTourCard {...tour} key={tour.id} />
              ))}
          </Row>
        </Grid>
        <div className='container'>
          <div>
            <h1>Travel services</h1>
            <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Vietnam Visa On Arrival</h4>
            <p>Obtaining a visa to Vietnam may be troublesome and time-consuming for many foreign tourists planning to visit the country.</p>
            <p><strong>Tours For Books</strong> has launched <strong>the Vietnam Visa On Arrival arrangement service</strong> to shorten the cumbersome procedure and ease your worries. Being a fully-licensed and reputable tour operator protected by the law of Vietnam, you can certainly put your trust in our quick and secure Vietnam visa service. Please contact our travel consultants at <strong>blvtour4books@gmail.com</strong> for further information. To apply for a visa, please follow the instructions below.</p>
            <Tabs defaultActiveKey={1} id='applyVisa' className='center-top-col'>
              <Tab eventKey={1} title='Step 1'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Provide us with essential details</h4>
                <p>All applicants must email us with the following information:</p>
                <ul>
                  <li>Copy of your passport (must be valid for the next six months; PDF format is recommended)</li>
                  <li>Date and port of arrival (please choose Noi Bai/Hanoi, Danang or Tan SoNhat/Ho Chi Minh City or both regions)</li>
                  <li>Occupation</li>
                  <li>Length of stay (one month for tourist visa)</li>
                  <li>Location to pick up visa (usually, name of the city in your country, where the most convenient Vietnamese embassy or consulate is located)</li>
                </ul>
              </Tab>
              <Tab eventKey={2} title='Step 2'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Confirm and make payment</h4>
                <p>You only need to confirm and pay the visa arrangement fee to <strong>Tours for Books</strong> and we will take care the rest. We accept most major credit cards and debit cards (Visa, Mastercard, and American Express) and Paypal.</p>
              </Tab>
              <Tab eventKey={3} title='Step 3'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Receive and print the approval letter</h4>
                <p>After you submit your application and payment, we will start processing your visa for Vietnam. We will email you an approval letter within two business days. Then you just need to print the PDF attachment file (color preferred, but not required) and prepare at least two passport photos (4cm x 6cm).</p>
              </Tab>
              <Tab eventKey={4} title='Step 4'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Get your visa stamp upon arrival at Vietnam international airports</h4>
                <p>Upon arrival at Vietnam international airports in Hanoi, Da Nang or Ho Chi Minh City, you are required to fill out an entry/exit form (will be emailed together with approval letter). Then, provide the approval letter, passport, and photos, and pay a stamping fee to get the visa stamped onto your passport.</p>
              </Tab>
            </Tabs>
          </div>
          <div>
            <h1>Train ticket booking</h1>
            <p>Despite the long and time-consuming ride, traveling by train is still among the most popular choice with tourists coming to Vietnam, as you can fully enjoy the panoramic view of the landscapes at ground level and have a real insight of both urban and rural areas in the country.</p>
            <p>As our tours cover a wide range of destinations: from Sapa to Hue and Danang and to Ho Chi Minh City, <strong>Tours for Books</strong> has cooperated with trustworthy agents to provide train tickets with  guaranteed best prices. Our tour consultants will help you with the comprehensive services, so you do not need to worry about scams or waste time waiting in a long queue to purchase tickets.</p>
          </div>
          <div>
            <h1>Air ticket booking</h1>
            <p>If you have limited time in Vietnam, air travel may be an ideal domestic option. Nearly all routes take about 2 hours maximum with frequent departures throughout the day. New domestic routes have recently been added with drastically improved service.</p>
            <p><strong>Tours for Books</strong> has been working closely with prestigious ticket reservation offices of major airlines in Vietnam such as Vietnam Airlines, Vietjet Air, and JetStar. When you book an air ticket with us, we can guarantee a good fare for early-birds and quick and efficient service if you need to make any changes to your reservation.</p>
          </div>
          <div>
            <h1>Car for rent</h1>
            <p>An International Driving License has not been finalized in Vietnam, thus driving a car on your own is not a good choice here. This is especially true (and costly!) if traveling with family or a group of more than five people.</p>
            <p>That's a reason why <strong>Tours for Books</strong> offers a car rental service with personal driver. With extensive routes to many popular destinations in Vietnam, you can relax and enjoy the scenery while saving your time and money. Following our motto <strong>"drive safe, drive fun,"</strong> our highly trained drivers are not only friendly and courteous, but also have good English-speaking skills. Tourists may choose from a wide range of high-standard vehicles including a 4-seater car, 16-seater van, 24-seater bus, 35-seater bus and 45-seater bus. Our car rental service will provide you with an unforgettable driving experience throughout the beautiful country of Vietnam.</p>
            <p>Please note that our car rental service is supplied daily, monthly, or longterm with special offers.</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TourForBook
