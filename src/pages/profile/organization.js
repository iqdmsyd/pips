import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HeadingOne from '../../components/Headings/HeadingOne'

export default function Organization() {
  const intl = useIntl()

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: 'profile.organization' })} />
      <div className='p-8 lg:p-10'>
        <section id='organization'>
          {/* <h2 className='text-2xl font-semibold'></h2> */}
          <HeadingOne>
            { intl.formatMessage({ id: 'profile.organization' })}
          </HeadingOne>
          <table className='w-full text-sm border-2 md:text-base' cellPadding={10}>
            <tbody>
              <tr>
                <td>{ intl.locale === 'id' ? "Ketua Program Studi" : "Head of the study program" }</td>
                <td className='text-center'>:</td>
                <td>Prof. Sapriya, M.Ed</td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Kemahasiswaan" : "Student Affairs" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Dr. Acep Supriadi, M.Pd.,M.AP</p>
                  <p>Muhammad Arif r, M.Pd</p>
                  <p>Reto Ayu Hardiyanti, M.Pd</p>
                </td>
              </tr>
              <tr>
                <td>"{ intl.locale === 'id' ? "Bidang Penjamin Mutu" : "Quality Assurance Division" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Dr. Ade Budhi Salira, M.SI</p>
                  <p>Mina Holilah, M.Pd</p>
                  <p>Reto Ayu Hardiyanti, M.Pd</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Akademik" : "Academic Affairs"}</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Muhamad Iqbal, S.Pd., M.Si.</p>
                  <p>Diana Noor Anggraini,M.Pd.</p>
                  <p>Muhammad Nur, M.Pd.</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Kurikulum" : "Field of Curriculum" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Prof. Dr. Kokom Komalasari, M.Pd.</p>
                  <p>Mina Holilah, M.Pd.</p>
                  <p>Diana Noor Anggraini,M.Pd.</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Keuangan" : "Financial Sector" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Diana Noor Anggraini,M.Pd.</p>
                  <p>Nurdin H, A.Md.Kom.</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Laboratorium" : "Laboratory Fields" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Dr. Acep Supriadi, M.Pd.,M.AP</p>
                  <p>Dr. Ade Budhi Salira, M.SI</p>
                  <p>Muhammad Arif R, M.Pd</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang Pengabdian Pada Masyarakat (P2M)" : "Field of Community Service (P2M)" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Dr. Neiny Ratmaningsih, M.Pd</p>
                  <p>Dina Siti Logayah, M.Pd</p>
                  <p>Muhammad Nur, M.Pd</p>
                </td>
              </tr>
              <tr>
                <td>{ intl.locale === 'id' ? "Bidang TPPS" : "TPPS field" }</td>
                <td className='text-center'>:</td>
                <td>
                  <p>Muhamad Iqbal, S.Pd., M.Si.</p>
                  <p>Mina Holilah, M.Pd</p>
                  <p>Reto Ayu Hardiyanti, M.Pd</p>
                </td>
              </tr>
            </tbody>
          </table>
          { intl.locale === 'id'
            ? <><StaticImage src='../../../static/organization_structure_id.jpg' alt='' imgClassName='w-full' /></>
            : <><StaticImage src='../../../static/organization_structure_en.jpg' alt='' imgClassName='w-full' /></>
          }
        </section>
      </div>
    </Layout>
  )
}
