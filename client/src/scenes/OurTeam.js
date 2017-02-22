import React from 'react'
import { Grid, Row } from 'react-bootstrap'

import ShowMemberCard from '../Modal/ShowMemberCard'
import Footer from './Footer'
import memberData from '../member.json'

const OurTeam = () => (
  <div>
    <div className='container'>
      <h1 className='center-top-col'>Meet the Better Life Vietnam Team</h1>
      <Grid>
        <Row style={{padding: '0 5%'}}>
          {memberData.members.map((member) => (
            <ShowMemberCard {...member} key={member.id} />
          ))}
        </Row>
      </Grid>
    </div>
    <Footer />
  </div>
)

module.exports = OurTeam
