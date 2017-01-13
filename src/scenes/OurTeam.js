import React from 'react'
import { Grid, Row } from 'react-bootstrap'

import ShowMemberCard from '../Modal/ShowMemberCard'
import memberData from '../member.json'

const OurTeam = () => (
  <div className='container'>
    <Grid>
      <Row style={{padding: '0 5%'}}>
        {memberData.members.map((member) => (
          <ShowMemberCard {...member} key={member.id} />
        ))}
      </Row>
    </Grid>
  </div>
)

module.exports = OurTeam
