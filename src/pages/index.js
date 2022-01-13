import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import NewsItem from '../components/NewsItem' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faDownload, faFilePdf, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  const [slide, setSlide] = useState(0)

  const links = [
    { title: 'Universitas Pendidikan Indonesia', url: 'http://www.upi.edu' },
    { title: 'E-Journal', url: 'https://ejournal.upi.edu' },
    { title: 'Campus Library', url: 'http://perpustakaan.upi.edu' },
    { title: 'Campus Repository', url: 'http://repository.upi.edu' },
    { title: 'Campus Digital Library', url: 'http://digilib.upi.edu' },
    { title: 'Student Admission', url: 'http://pmb.upi.edu' },
    { title: 'SPOT', url: 'http://spot.upi.edu' },
    { title: 'SPADA', url: 'http://spada.upi.edu' },
    { title: 'SINO', url: 'http://sino2.upi.edu/nilai' },
    { title: 'MRS', url: 'http://mrs.upi.edu' },
    { title: 'SINNDO', url: 'https://siak.upi.edu/sinndo' },
    { title: 'Student Admission Evaluation', url: 'http://evaluasi-pbm.upi.edu' },
    { title: 'Syllabus', url: 'http://silabus.upi.edu' },
    { title: 'File Directories', url: 'http://file.upi.edu' },
  ]

  const { recentNews } = data;
  
  return (
    <Layout>
      <Carousel slide={slide} setSlide={setSlide}/>
      <div className='p-8 lg:p-16'>
        {/* Greetings */}
        <section className='mb-8'>
          <h1 className='mb-3 text-2xl font-semibold'>Greetings!</h1>
          <p className='mb-3 text-sm text-justify'>
            Social Science Education Study Program is one of the Study Programs within the Faculty of Social Science Education (FPIPS) of the Universitas Pendidikan Indonesia (UPI) which was established on June 24th, 2009 with the Decree of the Rector of UPI Number 4783/H40/PP/2009. This study program was established as an answer to the school needs for social science educators in junior high schools (SMP) and the equivalent.
          </p>
          <p className='mb-3 text-sm text-justify'>
            The current accreditation rating of Social Science Education is A (372) according to the Decree of National Accreditation Body for Higher Education (BAN PT) Number 128/SK/BAN-PT/Akred/S/II/2019 which is valid until 2024. The main study of Social Science Education is the study of social sciences (history, geography, economics, law, politics, and sociology-anthropology) which are thematically packaged and integrated (interdisciplinary, multidisciplinary and transdisciplinary) with social science education theory, social science education learning in theory and practice, and social studies education research. Supported by adequate human resources, the Social Science Education Study Program consistently provides quality education based on the Academic Qualification Standards and Competency of Educators and the Indonesian National Qualifications Framework (KKNI).
          </p>
          <p className='mb-3 text-sm text-justify'>
            The profile of the first and foremost social science education graduate is as a social science educator, as a researcher on issues related to social studies learning and other social problems, and as a social worker (environmental activist and anti-corruption activist). Social Science Education has partnered with the Association of Indonesian Social Science Study Programs (APRIPSI), Social Science Teacher Conference, schools and higher education institutions, government and private institutions, both national and international.
          </p>
        </section>
        
        {/* Recent News */}
        <section className='mb-8'>
          <h1 className='mb-3 text-2xl font-semibold'>Recent News</h1>
          <div className='flex flex-col gap-4 md:basis-1/3 md:flex-row'>
            { recentNews.nodes.map( item => (
              <NewsItem key={item.id} item={item}/>
            )) }
          </div>
        </section>

        {/* Upcoming Events */}
        {/* <section className='relative w-screen mb-6 -ml-6 bg-gray-600 lg:-ml-10'>
          <h1 className='mb-2 text-2xl'>Announcements</h1>
        </section> */}

        {/* Announcements & External Links */}
        <section>        
          <div className='flex flex-col gap-4 md:basis-1/3 md:flex-row'>
            <div className='w-full mb-4'>
              <h1 className='mb-2 text-2xl font-semibold'><FontAwesomeIcon icon={faInfoCircle} size='sm' className='mr-1'/>Announcements</h1>
              <ul className='text-sm'>
                { links.map(({title, url}) => (
                  <li>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faLink} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full mb-4'>
              <h1 className='mb-2 text-2xl font-semibold'><FontAwesomeIcon icon={faDownload} size='sm' className='mr-1'/>Downloads</h1>
              <ul className='text-sm'>
                { links.map(({title, url}) => (
                  <li>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faFilePdf} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full'>
              <h1 className='mb-2 text-2xl font-semibold'><FontAwesomeIcon icon={faLink} size='sm' className='mr-1'/>Links</h1>
              <ul className='text-sm'>
                { links.map(({title, url}) => (
                  <li>
                    <a href={url} className='hover:underline'> <FontAwesomeIcon icon={faExternalLinkAlt} className='mr-2' size='sm'/>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Home {
    recentNews: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/news/"}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          time
          slug
          date
        }
        html
        id
      }
    }
  }
`