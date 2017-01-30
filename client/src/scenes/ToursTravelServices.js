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
        <div className='container'>
          <p>Are you looking for a reliable tour agency to help you plan your trip to Vietnam? Choose <strong>Tours for Books</strong> for your bookings! Our services will make your trip to Vietnam even more meaningful.</p>
          <p><strong>Better Life Vietnam</strong> has teamed up with <strong>VietDan Travel</strong> to launch the <strong>Tours for Books</strong> business. Profits generated from the tours will contribute to our education fund to provide books and scholarships to underprivileged children. By choosing <strong>Tours for Books</strong>, tourists truly help us to improve lives by buying books and providing scholarships to underprivileged children, as well as support disadvantaged youth in our Better Jobs for Youth Vendors in Hanoi project.</p>
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
            <p>Visa to Vietnam might be troublesome to many foreign tourists planning to visit the country, as the process of acquiring it might take a lot of time and effort.</p>
            <p>Upon understanding that inconvenience, <strong>Tours for Books</strong> has launched the <strong>Vietnam Visa On Arrival arrangement service</strong> to support you at our best, which will shorten the cumbersome procedure, save you more time and tackle your big worry. Being a fully-licensed & reputable tour operator protected by the law of Vietnam, you can certainly put your trust in our quick & secured visa Vietnam service. Please contact our travel consultants at blvtour4books@gmail.com for further information. To apply for a visa, please follow the instruction below.</p>
            <Tabs defaultActiveKey={1} id='applyVisa' className='center-top-col'>
              <Tab eventKey={1} title='Step 1'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Provide us with essential details</h4>
                <p>We need to receive the order by email from the applicant with information as below:</p>
                <ul>
                  <li>Passport copy (PDF format is recommended)</li>
                  <li>Date of arrival Port of arrival (please choose Noi Bai (Hanoi), Danang or Tan SoNhat (Ho Chi Minh City) or both regions</li>
                  <li>Occupation</li>
                  <li>Length of stay (one month for tourist visa)</li>
                  <li>Place to get the Visa (usually, name of the city in your country, where the most convenient Vietnam Embassy or Consulate is located)</li>
                </ul>
              </Tab>
              <Tab eventKey={2} title='Step 2'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Confirm and make payment</h4>
                <p>You only need to confirm and pay the visa arrangement fee to <strong>Tours for Books</strong> and we will take care the rest. We accept most major credit cards and debit cards (Visa/ Master and American Express Card) and Paypal.</p>
              </Tab>
              <Tab eventKey={3} title='Step 3'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Receive and print the approval letter</h4>
                <p>After you submit your application and payment, we will start processing your visa for Vietnam. After 02 working days, we will send you an approval letter by email. Then you just need to print the PDF attachment file (color preferred, but not required) and prepare at least 2 passport photos (4cm x 6cm).</p>
              </Tab>
              <Tab eventKey={4} title='Step 4'>
                <h4 style={{color: '#00ba5d', textAlign: 'center'}}>Get your visa stamp upon arrival at Vietnam international airports</h4>
                <p>Upon arrival at Vietnam international airports in Hanoi, Da Nang or Ho Chi Minh city, travelers are required to fill in Entry/exit form (will be emailed together with approval letter), present your approval letter, passport (must be valid for the next six months), photos, and pay for the stamping fee to get Visa stamped on your passport.</p>
              </Tab>
            </Tabs>
          </div>
          <div>
            <h1>Train ticket booking</h1>
            <p>Despite taking a longer time in comparison with other forms of transportation, traveling by train is still among popular choices with tourists coming to Vietnam, as you can fully enjoy the panorama view of the landscapes at ground level, and have a real insight of both urban & rural areas in the country.</p>
            <p>As our tours cover a wide range of destinations: from Sapa - the beautiful hill station - the highlighted spot of the North, to Hue, Danang, Ho Chi Minh city - the gorgeous parts of the South bound; <strong>Tours for Books</strong> has cooperated with lot of trustworthy agents to provide train ticket with best price guarantee. Our tour consultants will help you with the comprehensive services, so you will no longer worry about cheating or time wasting waiting on a long queue to buy ticket.</p>
          </div>
          <div>
            <h1>Air ticket booking</h1>
            <p>If you have time limitation when traveling in Vietnam, travel by air might be an ideal domestic option. Almost all routes just take about a maximum 2-hour flight, and with high frequency per day. Recently, many new domestic routes have been added and the service has been improved drastically, thus more and more tourists opt for air travel in Vietnam.</p>
            <p><strong>Tours for Books</strong> has been working closely with plenty of prestigious ticket reservation offices of the major airlines in Vietnam such as Vietnam Airlines, VietjetAir, JetStar etc.; therefore when you book air ticket with us, we can guarantee about the good fare for early-birds, the quick information & solution in case there is any change in your flight booking, and the time consuming & cost saving you will have.</p>
          </div>
          <div>
            <h1>Car for rent</h1>
            <p>The problem with International Driving License is still not finalized in Vietnam, thus drive a car on your own is not really a good choice here. Especially when you travel with your family or a group of more than 5 people, it will cost you a lot more than you expect.</p>
            <p>That's a reason why <strong>Tours for Books</strong> offers car rental service with driver. With the extensive routes to many famous destinations in Vietnam, you can either relax and enjoy the surpassing sceneries on the way or save your time and money. Following our motto "drive safe, drive fun", our highly trained drivers - with not only good English speaking & skilled driving but also friendly and courteous - along with a wide range of high-standard vehicles including 4-seater car, 16-seater van, 24-seater bus, 35-seater bus & 45-seater bus will provide you with an unforgettable driving experience.</p>
            <p>Please be well noted that our car rental service is also supplied daily, monthly or in long term period with special offers.</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TourForBook
