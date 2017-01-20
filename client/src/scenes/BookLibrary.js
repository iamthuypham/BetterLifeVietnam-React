import React from 'react'
import { Image, Well } from 'react-bootstrap'
import '../scenes/BookLibrary.css'
import FreeBookLibraryPic from '../images/FreeBookLibrary.jpg'

const BookLibrary = () => (
  <div>
    <div className='container'>
      <div className='center-top-col'>
        <h1>BLV Books Library</h1>
        <Image className='pic' src={FreeBookLibraryPic} />
      </div>

      <div>
        <h1> The Need for Classroom Libraries </h1>
        <h4>Limited access to books has been a severe problem in Vietnam for decades. When the country gained independence in 1945, 94% of the Vietnamese population was illiterate. Since national unification in 1975, the literacy rate has dramatically increased to more than 95%, though this figure varies significantly between cities and rural areas.
		Reading culture in Vietnam&#39;s large cities is drastically changing, but the country&#39;s rural communities are still in desperate need for books. The reading levels of rural students are so low that the pupils read only one or two books, aside from textbooks, every year, while urban students read 20-30 books.
		To solve the shortage of books in rural areas, promote a reading culture, and enrich knowledge, <span style={{color: '#00ba5d'}}>Better Life Vietnam (BLV)</span> has teamed up with <span style={{color: '#00ba5d'}}>the Center for Knowledge Assistance and Community Development (CKACD)</span> to provide access to books for underprivileged children.
		The CKACD, founded by <span style={{color: '#00ba5d'}}>Mr. Nguyen Quang Thach</span>, has successfully employed its persistent strategy of crowdfunding to build more than <span style={{color: '#f46600'}}>10,000 bookcases</span> for nearly <span style={{color: '#f46600'}}>500,000</span> children in rural areas. The two teams, along with its local communities, have set the goal to offer book access to 15 million rural youths in Vietnam in the coming years.</h4>

      </div>

      <div>
        <h1> Implementation of Classroom Libraries </h1>

        <h4>
          <span style={{color: '#00ba5d'}}>The Books Library for Brighter Future project</span> aims to provide free books for underprivileged children in Vietnam through classroom libraries. Each classroom will be equipped with a bookcase full of picture books, short novels, and textbooks, which students can use at school or bring home.
		Students who have read the most weekly/monthly will be recognized. Workshops and writing competitions will also be organized to enhance reading and comprehension skills. Based on reading activities records, the program will try to identify characteristics of readers at each school, e.g. what kind of books they read, how many books each child reads per year. This information, along with collaboration with schools, will be used to better evaluate the operation of the libraries, as well as the needs of students.
		</h4>

      </div>

      <div>
        <h1>Monitoring and Evaluation of the Library Project</h1>

        <h4>
          <span style={{color: '#00ba5d'}}>The Books Library for Brighter Future project</span> is evaluated each year. These evaluations help improve the libraries’ inventory to better serve readers, as well as to provide evidence for the effectiveness and necessity of classroom libraries and policy advocacy.

		Quantitative methods (e.g. using records from reading activities to calculate reading rates) and qualitative methods (e.g. interviewing readers) are used to improve the effectiveness of the program.
		</h4>
      </div>

      <div>

        <h1>What Others Say</h1>
        <Well><blockquote>
			The Books Library Project has improved the quality of education at the school, with students earning higher scores on exams, especially in social sciences.<h4> Pham Duc Duong, headmaster at An Duc Secondary School</h4>
        </blockquote></Well>

        <Well>
          <blockquote>
			I was diagnosed with osteogenesis imperfecta. I had always felt hopeless until I read the book &quot;Overcoming Destiny&quot; at the Hoang Clan Library. This book helped me realize that, with great effort, people with disabilities can overcome challenges.<h4> Hoang Thi Nhan, student at An Duc Secondary School</h4>
          </blockquote>
        </Well>

        <Well>
          <blockquote>
			Since the classroom libraries were implemented, I have seen more students read books both at school and at home. Students are thinking &quot;outside the box,&quot; asking teachers more questions, and starting their own debate clubs, which they run themselves. I feel sad for thousands of my former students in the past 30 years who lacked the same opportunity. <h4> Duong Le Nga, former chairwoman of Youth Pioneers Union at An Duc Secondary School</h4>
          </blockquote>
        </Well>

        <Well>
          <blockquote>
			Many of the students here will become workers in nearby factories. However, after seeing the influence of the new libraries, he hopes the children will have higher ambitions for themselves when they graduate. He says the libraries have encouraged peer reading amongst students and teachers and for families when the children bring books back home.<h4> Uong Minh Thanh, deputy head of An Duc Secondary School</h4>
          </blockquote>
        </Well>

      </div>
    </div>
  </div>
)

module.exports = BookLibrary
