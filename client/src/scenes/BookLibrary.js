import React from 'react'
import { Image, Well } from 'react-bootstrap'
import '../scenes/BookLibrary.css'
import FreeBookLibraryPic2 from '../images/FreeBookLibrary2.jpg'
import Footer from './Footer'

const BookLibrary = () => (
  <div className='booksLibrary'>
    <div className='cover-container'>
      <div className='cover-title'>
        <h1>BLV Books Library</h1>
      </div>
      <Image className='cover-pic' src={FreeBookLibraryPic2} />
    </div>
      <div className='container' style={{paddingBottom: '20px'}}>
        <h1 style={{color: 'black'}}> The Need for Classroom Libraries </h1>
        <p><strong>Limited access to books has been a severe problem in Vietnam for decades</strong>. When the country gained independence in 1945, 94% of the Vietnamese population was illiterate. Since national unification in 1975, the literacy rate has dramatically increased to more than 95%, though this figure varies significantly between cities and rural areas.
		Reading culture in Vietnam&#39;s large cities is drastically changing, but the country&#39;s rural communities are still in desperate need for books. <strong>The reading levels of rural students are so low that the pupils read only one or two books</strong>, aside from textbooks, every year, while urban students read 20-30 books.</p>
		<p>To solve the shortage of books in rural areas, promote a reading culture, and enrich knowledge, Better Life Vietnam (BLV) has teamed up with the Center for Knowledge Assistance and Community Development (CKACD) to provide access to books for underprivileged children.
		The CKACD, founded by Mr. Nguyen Quang Thach, has successfully employed its persistent strategy of crowdfunding to <strong>build more than 10,000 bookcases for nearly 500,000 children in rural areas</strong>. The two teams, along with its local communities, have set <strong>the goal to offer book access to 15 million rural youths in Vietnam in the coming years</strong>.</p>
    </div>
    <div className='implementLibrary'>
      <div className='col'>
        
      </div>
      <div className='col' style={{backgroundColor: '#029AB1'}}>
        <h1> Implementation of Classroom Libraries </h1>
        <p>
          <strong>The Books Library for Brighter Future project</strong> aims to provide free books for underprivileged children in Vietnam through classroom libraries. Each classroom will be equipped with a bookcase full of picture books, short novels, and textbooks, which students can use at school or bring home.</p>
        <p>Students who have read the most weekly/monthly will be recognize. Workshops and writing competitions will also be organized to enhance reading and comprehension skills. Based on reading activities records, the program will try to identify characteristics of readers at each school, e.g. what kind of books they read, how many books each child reads per year. This information, along with collaboration with schools, will be used to better evaluate the operation of the libraries, as well as the needs of students.</p>
      </div>
    </div>
    <div className='monitorLibrary'>
      <div className='col' style={{backgroundColor: '#40AB48'}}>
        <h1>Monitoring and Evaluation</h1>
        <p><strong>The Books Library for Brighter Future project</strong> is evaluated each year. These evaluations help improve the libraries’ inventory to better serve readers, as well as to provide evidence for the effectiveness and necessity of classroom libraries and policy advocacy.</p>
        <p>Quantitative methods (e.g. using records from reading activities to calculate reading rates) and qualitative methods (e.g. interviewing readers) are used to improve the effectiveness of the program.
        </p>
      </div>
      <div className='col'>
      </div>
    </div>
    <div className='testimony'>
      <div className='heading'>
        <h1>What Others Say</h1>
      </div>
      <div className='quote container'>
      <Well className='special'>
          <div className='schoolPic'></div>
          <blockquote>
  		The teachers and students of Tien Hiep secondary school really appreciated what BLV and the volunteers have done for us. It was an amazingly meaningful Tet present for our school. We promise to protect your books and use them in the good way in order to give knowledge to our students. We wish BLV and the volunteers the best of luck and hope to do more meaningful programs like this in near future. Hope to see you very soon. Thank you so much!<p> Teachers and students, Tien Hiep Secondary School</p>
          </blockquote>
      </Well>
      <Well>
        <blockquote>
		The Books Library Project has improved the quality of education at the school, with students earning higher scores on exams, especially in social sciences.<p> Pham Duc Duong, headmaster at An Duc Secondary School</p>
        </blockquote>
      </Well>
      <Well>
        <blockquote>
		I was diagnosed with osteogenesis imperfecta. I had always felt hopeless until I read the book &quot;Overcoming Destiny&quot; at the Hoang Clan Library. This book helped me realize that, with great effort, people with disabilities can overcome challenges.<p> Hoang Thi Nhan, student at An Duc Secondary School</p>
        </blockquote>
      </Well>

      <Well>
        <blockquote>
		Since the classroom libraries were implemented, I have seen more students read books both at school and at home. Students are thinking &quot;outside the box,&quot; asking teachers more questions, and starting their own debate clubs, which they run themselves. I feel sad for thousands of my former students in the past 30 years who lacked the same opportunity. <p> Duong Le Nga, former chairwoman of Youth Pioneers Union at An Duc Secondary School</p>
        </blockquote>
      </Well>

      <Well>
        <blockquote>
		Many of the students here will become workers in nearby factories. However, after seeing the influence of the new libraries, he hopes the children will have higher ambitions for themselves when they graduate. He says the libraries have encouraged peer reading amongst students and teachers and for families when the children bring books back home.<p> Uong Minh Thanh, deputy head of An Duc Secondary School</p>
        </blockquote>
      </Well>
      </div>
    </div>
    <Footer />
  </div>
)

module.exports = BookLibrary
