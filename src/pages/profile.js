import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';

export default function Profile({ data }) {
  const { greetings, history, visionAndMission, accreditation } = data;
  return (
    <Layout>
      <div className='p-8 lg:p-16'>

        {/* greetings */}
        <section id='greetings' className='mb-8 space-y-3'>
          <h1 className='text-2xl font-semibold'>Message from the Head of the Social Sciences Education Study Program</h1>
          <figure>
            <img src='/ketua_prodi.jpg' alt='' className='w-full mx-auto md:w-10/12'/>
            <figcaption className='text-xs text-center text-gray-500'>Prof. Dr. Sapriya, M.Ed</figcaption>
          </figure>
          <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: greetings.html }} />
        </section>

        {/* history */}
        <section id='history' className='mb-8 space-y-3'>
          <h2 className='text-2xl font-semibold'>History</h2>
          <details>
            <summary className='mb-3 text-sm text-justify cursor-pointer'>
              The Social Studies Education Study Program was established on June 24, 2009 in accordance with the Decree of the Chancellor of the Indonesian Education University Number 4783/H40/PP/2009. He is at the Faculty of Social Sciences Education (FPIPS) of the Indonesian Education University (UPI). The Social Studies Education Study Program was established as an answer to the need for social studies teachers in SMP/MTs as equals. Supported by adequate human resources (consisting of five lecturers as professors, seven doctoral degrees and twelve masters graduates from domestic and foreign universities).
            </summary>
            <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: history.html }} />
          </details>
        </section>
        
        {/* vision and mission */}
        <section id='vision-and-mission' className='mb-8 space-y-3'>
          <h2 className='text-2xl font-semibold'>Vision & Mission</h2>
          <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: visionAndMission.html }} />
        </section>

        {/* accreditation */}
        <section id='accreditation' className='mb-8 space-y-3'>
          <h2 className='text-2xl font-semibold'>Accreditation</h2>
          <div className='flex flex-col gap-4 basis-1 md:flex-row'>
            <div className='space-y-3 text-sm text-justify' dangerouslySetInnerHTML={{ __html: accreditation.html }}></div>
            <div>
              <img src='/akreditasi.png' alt='' className='w-full'/>
              <a href="/sertifikat_akreditasi.pdf" className='text-sm text-blue-400 hover:underline'>Download certificate</a>
            </div>
          </div>
        </section>

        {/* organizational structure */}
        <section id='organization' className='mb-8 space-y-3'>
          <h2 className='text-2xl font-semibold'>Organizational Structure</h2>
          <img src='/struktur_organisasi.png' alt='' className='w-full'/>
        </section>

      </div>
    </Layout>
  )
}

export const data = graphql`
  query Profile {
    greetings: markdownRemark(fileAbsolutePath: {regex: "/greetings/"}) {
      html
    }
    history: markdownRemark(fileAbsolutePath: {regex: "/history/"}) {
      html
    }
    visionAndMission: markdownRemark(fileAbsolutePath: {regex: "/vision-and-mission/"}) {
      html
    }
    accreditation: markdownRemark(fileAbsolutePath: {regex: "/accreditation/"}) {
      html
    }
  }
`; 