import React from 'react'
import './Highlight.css'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import TFB from '../images/TFB-logo.png'
import FB from '../images/fb-follow.png'

const Highlight = () => (
  <Grid id='TFB'>
    <h1 style={{textAlign: 'center', marginBottom: 0}}>Tours For Books</h1>
    <h4 style={{textAlign: 'center'}}>A Proud Supporter of Better Life Vietnam</h4>
    <Row className='show-grid row-fluid' style={{padding: '10px 0'}}>
      <Col xs={12} sm={6} className='center-top-col' style={{ height: '400px'}}>
        <Image alt='Tour For Book' src={TFB} style={{ width: '100%', height: 'auto'}} />
      </Col>
      <Col xs={12} sm={6} className='center-top-col' style={{padding: '0 8%'}}>
        <h4><strong>Tours For Books</strong> is a social enterprise created in partnership with <strong>Better Life Vietnam</strong> and <strong>VietDan Travel</strong> that offers a wide range of tours and travel services in Vietnam. All profits generated from <strong>Tours For Books</strong> support the education projects of <strong>Better Life Vietnam.</strong></h4>
        <a href='https://www.facebook.com/pg/Better-Life-Vietnam-111667145557377/photos/?tab=album&album_id=1296427037081376'><img alt='fb-follow' src={FB} style={{width:'150px'}}/></a>
      </Col>
    </Row>
  </Grid>
)
export default Highlight
