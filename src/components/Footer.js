import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='p-6 text-white bg-gray-900 lg:px-16'>
        <div>
          <div className='flex mx-auto space-x-4 max-w-1200'>
            <img src='/logo_upi.jpg' alt='' className='rounded-full w-14 h-14 aspect-square' />
            <div className='md:flex-auto'>
              <p className='leading-3'>Program Studi</p>
              <p>Pendidikan Ilmu Pengetahuan Sosial</p>
              <p className='mb-1 text-sm'>Universitas Pendidikan Indonesia</p>
              <div className='md:hidden'>
                <p className='text-xs text-yellow-200'>Jl. Dr. Setiabudi No 229. Bandung. Jawa Barat. Indonesia</p>
                <p className='text-xs text-yellow-200'><FontAwesomeIcon icon={faEnvelope} size='xs'/> socialstudies@upi.edu</p>
                <p className='text-xs text-yellow-200'><FontAwesomeIcon icon={faPhone} size='xs'/> +62222011014</p>
                <p className='text-xs text-yellow-200'><a href='https://youtube.com/channel/UCG2B0xFztDOPujd50ns7lRg'><FontAwesomeIcon icon={faYoutube} size='xs'/> Youtube PIPS</a></p>
              </div>
            </div>
            <div className='hidden md:block'>
              <p className='text-xs text-yellow-200'>Jl. Dr. Setiabudi No 229. Bandung. Jawa Barat. Indonesia</p>
              <p className='text-xs text-yellow-200'><FontAwesomeIcon icon={faEnvelope} size='xs'/> socialstudies@upi.edu</p>
              <p className='text-xs text-yellow-200'><FontAwesomeIcon icon={faPhone} size='xs'/> +62222011014</p>
              <p className='text-xs text-yellow-200'><a href='https://youtube.com/channel/UCG2B0xFztDOPujd50ns7lRg'><FontAwesomeIcon icon={faYoutube} size='xs'/> Youtube PIPS</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-6 py-2 text-xs text-center text-white bg-amber-500 lg:px-16'>
        <p>Copyright @2022.</p>
      </div>
    </footer>
  )
}
