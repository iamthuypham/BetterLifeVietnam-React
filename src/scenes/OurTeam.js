import React from 'react'
import { Grid, Row } from 'react-bootstrap'

import ShowMemberCard from '../Modal/ShowMemberCard'
import data from '../data.json'

const OurTeam = () => (
  <div className='container'>
    <Grid>
      <Row style={{padding: '0 5%'}}>
        {data.members.map((member) => (
          <ShowMemberCard {...member} key={member.id} />
        ))}
      </Row>
    </Grid>
  </div>
)

module.exports = OurTeam
