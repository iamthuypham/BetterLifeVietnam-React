import React from 'react'
import { Link } from 'react-router'
import { Accordion, Panel, Grid, Row, Col } from 'react-bootstrap'
import '../scenes/BLVScholarship.css'

import ShowStudentCard from '../Modal/ShowStudentCard'
import ShowMessage from '../Modal/ShowMessage'
import Footer from './Footer'
import FontAwesome from 'react-fontawesome'

import studentData from '../student.json'

const Scholarship = () => (
  <div>
    <ShowMessage />
    <div className='center-top-col'>
      <Grid>
        <Row className='show-grid'>
            {studentData.students.map((student) => (
              student.feature ? (
                <ShowStudentCard {...student} key={student.id} featureCardShow={true}/>
              ) : ''
            ))}
          <Col xs={12} sm={8} className='featureText'>
            <h1 style={{marginTop: '0', textAlign:'left'}}>Family and Education Scholarship</h1>
            <p>Poverty prevents many children in Vietnam from continuing their education beyond primary school. Many children have to find jobs and earn a living, instead. Furthermore, those who have worked so hard to pass competitive national entrance exams into universities cannot attend due to limited finances.</p>
            <p>School fees are often low but children have to pay for many other expenses, such as uniforms, contribution to school infrastructure, and insurance. Total expenses can range from <strong>$60-$80</strong> per semester from primary school to high school.  University students can expect to pay <strong>$200-$500 per semester</strong>.</p>
            <p>A variety of scholarship packages with a value of <strong>$30 per month to $80 per month</strong> will be awarded to underprivileged students in rural Vietnam to continue their studies. The amounts indicated will be used to cover school expenses (tuition fee and school supplies) for one student for one year. A portion of this will be invested in an income-generating activity for his/her family to improve the family’s livelihood.</p>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='center-top-col grey-bg'>
      <h1>Scholarship Options</h1>
      <Grid className='scholarshipPanel'>
        <Row className='show-grid'>
          <Col xs={12} sm={6} md={3}>
            <Panel header='Primary school'>
              <p className='scholarshipWorth'>$30/month</p>
              <p>This Scholarship will be awarded to underprivileged schoolchildren ages 6-10.</p>
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header='Secondary school'>
              <p className='scholarshipWorth'>$40/month</p>
              <p>This Scholarship will be awarded to schoolchildren ages 11-14.</p>
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header='High school'>
              <p className='scholarshipWorth'>$50/month</p>
              <p>This Scholarship will be awarded to schoolchildren ages 15-18.</p>
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header='University'>
              <p className='scholarshipWorth'>$80/month</p>
              <p>This Scholarship will be awarded to university students who have passed the university entrance exam but lack the finances to further their education.</p>
            </Panel>
          </Col>
        </Row>
        <Row><p className='scholarshipNote padding20'>If you are interested in sponsoring a child, simply <Link to='/CommentBox'>contact us</Link> or email <strong>betterlifevietnam@gmail.com</strong> with your selection. We will then pair you with that student and provide a report on his/her progress.</p>
        </Row>
      </Grid>
    </div>
    <div className='center-top-col'>
      <h1>Core Elements</h1>
      <Accordion className='coreElement container padding20'>
        <Panel header={<div>Highlighting the importance of education <FontAwesome name="caret-down"/></div>} eventKey='1'>
          While visiting families in need, the BLV team will educate families about the purpose of the program, encourage students to study hard, and give guidance on students’ schooling journey.
        </Panel>
        <Panel header={<div>Supporting the family to be sustainable <FontAwesome name="caret-down"/></div>} eventKey='2'>
          Our scholarship program will help the family to not only keep their child in school, but also start an income-generating economic model (e.g. raising chickens, pigs, or other economic activities that complement the family’s capacity). If the model is implemented well, the family will earn extra income or have their own means to increase nutrition for their daily meals (e.g. raising chickens to produce eggs).
        </Panel>
        <Panel header={<div>Encouraging the whole family to get involved <FontAwesome name="caret-down"/></div>} eventKey='3'>
          To qualify, the student’s parents have to demonstrate a commitment and willingness  to support their child by taking part in the income-generated element of the program. Parents will have to come up with a proposal for an income-generated activity which matches their ability. The BLV team will assess the proposal and give guidance if necessary. Once the proposal is approved, the family will receive the first portion of the scholarship, which will be used for the income-generated element. After 3-6 months of carrying out the family’s project, the BLV team will assess the parents’ commitment and the success of the model to decide if the student is eligible to receive the financial support for their education.
        </Panel>
      </Accordion>
    </div>
    <div className='center-top-col grey-bg'>
      <h1>How the scholarship program works</h1>
      <Grid className='scholarshipPanel'>
        <Row className='show-grid'>
          <Col xs={12} sm={6} md={3} className='processCol'>
            <Panel header={<div><div className='processColNum center-top-center'>1</div><div className='center-top-center'>Seeking Candidates</div></div>}>
          The BLV team will create a list of potential candidates after visiting rural villages and seeking underprivileged and hardworking students whose parents are willing to carry out the income-generated model. We believe that this scholarship program can guide a child’s success, as well as improve their family’s economic situation. In each case, we will prepare a student profile with his/her school records, family situation and family’s proposed income-generated model.
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3} className='processCol'>
            <Panel header={<div><div className='processColNum center-top-center'>2</div><div className='center-top-center'>Finding Sponsors</div></div>}>
              Sponsors can offer their help by awarding a featured student with a scholarship package. This may be a monthly donation or a fixed amount. A sponsorship will certainly change a young child’s life in the long term. Any amount will be gratefully welcomed by the BLV team.
              If you are interested in sponsoring a child, simply email your selection to us at betterlifevietnam@gmail.com. We will then pair you with that student and provide a report on his/her progress.
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3} className='processCol'>
            <Panel header={<div><div className='processColNum center-top-center'>3</div><div className='center-top-center'>Providing Scholarship</div></div>}>
              The BLV team will personally provide the scholarship to the family of the selected student. A part of this scholarship will be used to support the family carrying out the income-generated model, and the other part will be used to pay for school expenses. The BLV team will generate follow-up reports for sponsors.
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3} className='processCol'>
            <Panel header={<div><div className='processColNum center-top-center'>4</div><div className='center-top-center'>Following Up</div></div>}>
              After 3-6 months, BLV will visit the sponsored family and assess the success of the economic model and the student’s performance at school. We will then decide if the student is eligible for our scholarship program for the following year.
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='center-top-col container'>
      <h1>How do we monitor and evaluate this program?</h1>
      <p>In addition to selecting qualified students, <strong>BLV will play a role in providing financial support to the family, guiding the children to study hard and evaluating the children’s progress</strong>. We will also contact the recipient’s family regularly and organize letters between the child and his/her sponsor. A visit to the study location can also be organized.</p>
      <p>Only students who have outstanding grades by the end of the semester will be eligible for a scholarship for the following semester.</p>
    </div>
    <hr/>
    <div className='center-top-col' id='allStudent'>
      <h1>Featured Students</h1>
      <Grid>
        <Row style={{padding: '0 5%'}}>
          {studentData.students.map((student) => (
            <ShowStudentCard {...student} key={student.id} />
          ))}
        </Row>
      </Grid>
    </div>
    <Footer />
  </div>
)

module.exports = Scholarship

