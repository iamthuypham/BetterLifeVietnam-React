import React from 'react'
import { Grid, Row, Col, Thumbnail} from 'react-bootstrap'

import ThinhNguyenThumb from '../images/Thinh-Nguyen.jpg'
import GregThumb from '../images/Greg.jpg'
import HoanVuThumb from '../images/Hoan-Vu.jpg'
import PhuongNguyenThumb from '../images/Phuong-Nguyen.jpg'
import RobertDoThumb from '../images/Robert-Do.jpg'
import AlyssaThumb from '../images/Alyssa.jpg'
import BethanyThumb from '../images/Bethany.jpg'
import SimonWalterThumb from '../images/Walter.jpg'
import ThachNguyenThumb from '../images/Thach-Nguyen.jpg'

import TeamModalThinh from '../Modal/teamModalThinh'
import TeamModalAlyssaKopelman from '../Modal/teamModalAlyssaKopelman'
import TeamModalBethanyTietjen from '../Modal/teamModalBethanyTietjen'
import TeamModalGregHitchcock from '../Modal/teamModalGregHitchcock'
import TeamModalPhuongNguyen from '../Modal/teamModalPhuongNguyen'
import TeamModalRobertDo from '../Modal/teamModalRobertDo'
import TeamModalSimonWalter from '../Modal/teamModalSimonWalter'
import TeamModalThachNguyen from '../Modal/teamModalThachNguyen'
import TeamModalVuThaoHoan from '../Modal/teamModalVuThaoHoan'

const OurTeam = () => (
  <div className='container'>
    <Grid>
    <Row style={{padding: '0 5%'}}>
    <Col xs={12} sm={4} style={{ maxHeight: '420px', maxWidth:'250px'}}>
      <Thumbnail src={ ThinhNguyenThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalThinh></TeamModalThinh>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ SimonWalterThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalSimonWalter></TeamModalSimonWalter>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ GregThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalGregHitchcock></TeamModalGregHitchcock>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ RobertDoThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalRobertDo></TeamModalRobertDo>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ ThachNguyenThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalThachNguyen></TeamModalThachNguyen>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ AlyssaThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalAlyssaKopelman></TeamModalAlyssaKopelman>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ HoanVuThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalVuThaoHoan></TeamModalVuThaoHoan>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ PhuongNguyenThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalPhuongNguyen></TeamModalPhuongNguyen>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={4} style={{ maxHeight: '420px',maxWidth:'250px'}}>
      <Thumbnail src={ BethanyThumb } alt="242x200">
        <div className='center-top-row'>
          <TeamModalBethanyTietjen></TeamModalBethanyTietjen>
        </div>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
  </div>
)

module.exports = OurTeam
