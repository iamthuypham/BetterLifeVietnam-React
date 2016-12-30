import React from 'react'

const Slider = () => (
  <div className='slider w-slider' data-animation='cross' data-autoplay='1' data-delay='9000' data-duration='500' data-easing='ease-in-out' data-infinite='1'>
    <div className='w-slider-mask'>
      <div className='slide-text w-slide'>
        <div className='headline-med section-template-headline'>distributing books &amp;
            <br />bringing thousands of smiles
            <br />every year</div>
        <div className='button-group'>
          <img className='tfb-logo' sizes='88px' src='images/tour-books-logo-transparent.png' srcset='images/tour-books-logo-transparent-p-500x500.png 500w, images/tour-books-logo-transparent-p-800x800.png 800w, images/tour-books-logo-transparent.png 850w'
            width='88' />
          <a className='button-template feature-event-button w-button' data-ix='emphasize-at-load' href='responsible-tourism.html'>join us for the upcoming event on dec 25<br /><span className='tour-of-book-highlight' data-ix='emphasize-at-load'>🎁 tour of book<br /></span></a>
        </div>
        <div style='text-align:center; color: white; font-size: 8px'><strong>YOUR VIETNAM TOUR & TRAVEL SERVICE PARTNER</strong></div>
        <div style='text-align:center; color: white; font-size: 8px'><strong>Proudly Supporting the Projects of Better Life Vietnam</strong></div>
      </div>
      <div className='slide-text w-slide'>
        <div className='headline-med section-template-headline'>foster the learning</div>
        <div className='button-group'><a className='button-template contact-button w-button' href='#what-we-do'>what we do</a><a className='button-template orange-button w-button' href='#donate'>donate</a>
        </div>
      </div>
      <div className='slide-text w-slide'>
        <div className='headline-med section-template-headline'>making education possible</div>
        <div className='paragraph-white section-template-paragraph'>Free book library
            <br />Scholarship for underprivileged
            <br />Job assistance to youth</div>
        <div className='button-group'><a className='button-template voluntourism-button w-button' href='what-we-do.html'>learn more</a>
        </div>
      </div>
      <div className='slide-text w-slide'>
        <div className='headline-med section-template-headline'>organizing voluntourism programs to collect funds</div>
        <div className='button-group'><a className='button-template voluntourism-button w-button' href='#responsible-tourism'>Voluntourism</a><a className='button-template contact-button w-button' href='#contact-us'>✉ contact us</a>
        </div>
      </div>
    </div>
  </div>
)
export default Slider
