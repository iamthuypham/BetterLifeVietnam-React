import React from 'react'
import { Accordion, Panel, Grid, Row, Col, Thumbnail } from 'react-bootstrap'

import StudentModalChua from '../Modal/studentModalChua'
import StudentModalDanh from '../Modal/studentModalDanh'
import StudentModalNgan from '../Modal/studentModalNgan'
import StudentModalHa from '../Modal/studentModalHa'
import StudentModalMy from '../Modal/studentModalMy'
import StudentModalSon from '../Modal/studentModalSon'

import StudentDanh from '../images/studentDanh.jpeg'
import StudentChua from '../images/studentChua.jpg'
import StudentSon from '../images/studentSon.jpeg'
import StudentNgan from '../images/studentNgan.jpeg'
import StudentMy from '../images/studentMy.jpeg'
import StudentHa from '../images/studentHa.jpeg'

import '../scenes/Scholarship.css'

const Scholarship = () => (
  <div className='container'>
    <div>
      <h1 style={{textAlign: 'center'}}>Family and Education Scholarship</h1>
      <h4 style={{padding: '0 6%', lineHeight: '150%'}}>Poverty prevents many children in Vietnam from continuing their education beyond primary school. Many children have to find jobs and earn a living, instead. Furthermore, those who have worked so hard to pass competitive national entrance exams into universities cannot attend due to limited finances.</h4>
  		<h4 style={{padding: '0 6%', lineHeight: '150%'}}>School fees are often low but children have to pay for many other expenses, such as uniforms, contribution to school infrastructure, and insurance. Total expenses can range from <span style={{color:'#00ba5d'}}>$60-$80</span> per semester from primary school to high school.  University students can expect to pay <span style={{color:'#00ba5d'}}>$200 -$500 per semester</span>.</h4>
      <h4 style={{padding: '0 6%', lineHeight: '150%'}}>A variety of scholarship packages with a value of <span style={{color:'#00ba5d'}}>$30 per month to $80 per month</span> will be awarded to underprivileged students in rural Vietnam to continue their studies. The amounts indicated will be used to cover school expenses (tuition fee and school supplies) for one student for one year. A portion of this will be invested in an income-generating activity for his/her family to improve the family’s livelihood.</h4>
    </div>
    <div className='center-top-col'>
      <h1 style={{textAlign: 'center'}}>Core elements of the BLV scholarship</h1>
      <Accordion defaultActiveKey="1" style={{maxWidth:'80%'}}>
        <Panel header="Highlighting the importance of education and the consequences of sending children to work at an early age" eventKey="1">
          While visiting families in need, the BLV team will educate families about the purpose of the program, encourage students to study hard, and give guidance on students’ schooling journey.
        </Panel>
        <Panel header="Supporting the family to be sustainable" eventKey="2">
          Our scholarship program will help the family to not only keep their child in school, but also start an income-generating economic model (e.g. raising chickens, pigs, or other economic activities that complement the family’s capacity). If the model is implemented well, the family will earn extra income or have their own means to increase nutrition for their daily meals (e.g. raising chickens to produce eggs).
        </Panel>
        <Panel header="Encouraging the whole family to get involved" eventKey="3">
          To qualify, the student’s parents have to demonstrate a commitment and willingness  to support their child by taking part in the income-generated element of the program. Parents will have to come up with a proposal for an income-generated activity which matches their ability. The BLV team will assess the proposal and give guidance if necessary. Once the proposal is approved, the family will receive the first portion of the scholarship, which will be used for the income-generated element. After 3-6 months of carrying out the family’s project, the BLV team will assess the parents’ commitment and the success of the model to decide if the student is eligible to receive the financial support for their education.
        </Panel>
      </Accordion>
    </div>
    <div className='center-top-col'>
      <h1 style={{textAlign: 'center'}}>Scholarship packages</h1>
      <Grid style={{maxWidth:'80%'}}>
        <Row className="show-grid">
          <Col xs={12} sm={6} md={3}>
            <Panel header="Primary school scholarship">
              Worth <span style={{color:'#00ba5d'}}>$30/month</span>, this scholarship will be awarded to underprivileged schoolchildren <span style={{color:'#00ba5d'}}>ages 6-10</span>.
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header="Secondary school scholarship">
              Worth <span style={{color:'#00ba5d'}}>$40/month</span>, this scholarship will be awarded to schoolchildren ages <span style={{color:'#00ba5d'}}>11-14</span>.
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header="High school scholarship">
              Worth <span style={{color:'#00ba5d'}}>$50/month</span>, this scholarship will be awarded to schoolchildren ages <span style={{color:'#00ba5d'}}>15-18.</span>
            </Panel>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Panel header="University scholarship">
              Worth <span style={{color:'#00ba5d'}}>$80/month</span>, this scholarship will be awarded to university students who have passed the university entrance exam but lack the finances to further their education.
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className='center-top-col'>
      <h1 style={{textAlign: 'center'}}>How the scholarship program works</h1>
      <Accordion defaultActiveKey="1" style={{maxWidth:'80%'}}>
        <Panel header="Seeking Potential Candidates" eventKey="1">
          The BLV team will create a list of potential candidates after visiting rural villages and seeking underprivileged and hardworking students whose parents are willing to carry out the income-generated model. We believe that this scholarship program can guide a child’s success, as well as improve their family’s economic situation. In each case, we will prepare a student profile with his/her school records, family situation and family’s proposed income-generated model.
        </Panel>
        <Panel header="Finding Sponsors" eventKey="2">
          Sponsors can offer their help by awarding a featured student with a scholarship package. This may be a monthly donation or a fixed amount. A sponsorship will certainly change a young child’s life in the long term. Any amount will be gratefully welcomed by the BLV team.
          If you are interested in sponsoring a child, simply email your selection to us at betterlifevietnam@gmail.com. We will then pair you with that student and provide a report on his/her progress.
        </Panel>
        <Panel header="Providing Scholarship" eventKey="3">
          The BLV team will personally provide the scholarship to the family of the selected student. A part of this scholarship will be used to support the family carrying out the income-generated model, and the other part will be used to pay for school expenses. The BLV team will generate follow-up reports for sponsors. 
        </Panel>
        <Panel header="Following Up" eventKey="4">
          After 3-6 months, BLV will visit the sponsored family and assess the success of the economic model and the student’s performance at school. We will then decide if the student is eligible for our scholarship program for the following year.
        </Panel>
      </Accordion>
    </div>
    <div className='center-top-col'>
      <h1 style={{textAlign: 'center'}}>How do we monitor and evaluate this program?</h1>
      <h4 style={{padding: '0 6%', lineHeight: '150%'}}>In addition to selecting qualified students, BLV will play a role in providing financial support to the family, guiding the children to study hard and evaluating the children’s progress. We will also contact the recipient’s family regularly and organize letters between the child and his/her sponsor. A visit to the study location can also be organized.</h4>
      <h4 style={{padding: '0 6%', lineHeight: '150%'}}>Only students who have outstanding grades by the end of the semester will be eligible for a scholarship for the following semester.</h4>
    </div>
    <div className='center-top-col'>
      <h1 style={{textAlign: 'center'}}>Featured Students</h1>
      <Grid>
        <Row style={{padding: '0 5%'}}>
          <Col xs={12} sm={4} style={{ maxHeight: '420px', maxWidth:'250px'}}>
            <Thumbnail src={ StudentDanh } alt="242x200">
              <div className='center-top-row'>
                <StudentModalDanh></StudentModalDanh>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
            <Thumbnail src={ StudentNgan } alt="242x200">
              <div className='center-top-row'>
                <StudentModalNgan></StudentModalNgan>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
            <Thumbnail src={ StudentHa } alt="242x200">
              <div className='center-top-row'>
                <StudentModalHa></StudentModalHa>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
            <Thumbnail src={ StudentChua } alt="242x200">
              <div className='center-top-row'>
                <StudentModalChua></StudentModalChua>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
            <Thumbnail src={ StudentSon } alt="242x200">
              <div className='center-top-row'>
                <StudentModalSon></StudentModalSon>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
            <Thumbnail src={ StudentMy } alt="242x200">
              <div className='center-top-row'>
                <StudentModalMy></StudentModalMy>
              </div>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

module.exports = Scholarship

