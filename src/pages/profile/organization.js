import React from 'react'
import Layout from '../../components/Layout'
import { useIntl } from 'gatsby-plugin-intl'

export default function Organization() {
  const intl = useIntl()

  return (
    <Layout>
      <div className='p-8 lg:p-16'>
        <section id='organization' className='space-y-3'>
            <h2 className='text-2xl font-semibold'>{ intl.formatMessage({ id: 'profile.organization' })}</h2>
            <table className='text-sm w-full border-2' cellPadding={10}>
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
              </table>
            { intl.locale === 'id' ? <>
              <img src='/organization_structure_id.jpg' alt='' className='w-full'/>
            </> : <>
              <img src='/organization_structure_en.jpg' alt='' className='w-full'/>
            </>}
          </section>
      </div>
    </Layout>
  )
}
