import React from 'react'
import './Highlight.css'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import TFB from "../images/TFB-logo.png"
import FontAwesome from 'react-fontawesome'

const Highlight = () => (
  <Grid>
    <h1 style={{textAlign: 'center', marginBottom: 0}}>Previous Event</h1>
    <Row className="show-grid row-fluid" style={{padding: '10px 0'}}>
      <Col xs={12} sm={6} className="center-top-col" style={{ height: '400px'}}>
        <Image alt='Tour For Book' src={ TFB } style={{ height: '380px'}}/>
      </Col>
      <Col xs={12} sm={6} className="center-top-col" style={{padding: '0 8%'}}>
        <h4 style={{color:'#00ba5d'}}>Christmas 2016 with Children of Ba Vi</h4>
        <h4>On the occasion of Christmas, the Better Life Vietnam Team gathers with Thien Phu English Center to organize a books and scholarship giving ceremony to 600 children of Khanh Thuong, Ba Trai, Vi Thuy villages in Ba Vi, Hanoi. The event filled with joy, happiness and lots of laughs from children, the teachers, and the parents. Looking at how exciting the children were when they received the books has confirmed our impression that the children love books, they just have a limited access to books in many rural villages of Vietnam. Our event was also successful in a way that it helped raise awareness of parents about the importance of reading books.</h4>
        <h4>Checkout some pictures here.</h4>
        <a href="https://www.facebook.com/pg/Better-Life-Vietnam-111667145557377/photos/?tab=album&album_id=1296427037081376"><FontAwesome name='facebook-square'  size='2x'/></a>
      </Col>
    </Row>
  </Grid>
)
export default Highlight
