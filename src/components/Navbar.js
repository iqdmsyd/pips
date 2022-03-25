import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faSearch, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Flags from 'country-flag-icons/react/3x2'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'
import pages from '../texts/navs.json'

export default function Navbar() {
  const intl = useIntl();
  const switchLang = intl.locale === 'id' ? 'en' : 'id';
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
    {/* top bar */}
      <div className='flex items-center px-8 py-3 text-xs bg-amber-200 lg:px-12'>
        <ul className='flex flex-auto space-x-4'>
          <li>
            <FontAwesomeIcon icon={faPhone}/> 087700554238
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope}/> 087700554238
          </li>
        </ul>
        <div className='flex space-x-2'>
          <a href='https://youtube.com/channel/UCG2B0xFztDOPujd50ns7lRg'><FontAwesomeIcon icon={faYoutube}/></a>
          <button onClick={() => changeLocale(switchLang)} className='flex'>
            { intl.locale === 'id' ? <Flags.US className='w-3.5 mr-1'/> : <Flags.ID className='w-3.5 mr-1'/> }
            { intl.locale === 'id' ? 'EN' : 'ID' }
          </button>
        </div>
      </div>

      {/* identity */}
      <div className='flex flex-wrap items-center justify-center p-4 space-y-2 bg-white lg:px-12 md:px-8 md:flex-nowrap md:justify-between'>
        <div className='flex space-x-4'>
          <img src='/logo_upi.png' alt='' className='w-14 h-14 aspect-square' />
          <div>
            <p className='leading-3'>Program Studi</p>
            <p>Pendidikan Ilmu Pengetahuan Sosial</p>
            <p className='text-sm'>Universitas Pendidikan Indonesia</p>
          </div>
        </div>
        <div className='justify-center hidden md:flex'>
          <div className="w-full p-3">
            <div className="relative">
              <FontAwesomeIcon icon={faSearch} className="absolute text-gray-400 text-xs top-2.5 left-2.5"/>
              <input type="text" placeholder='Search...' className="w-full px-4 py-2 pl-8 text-xs bg-gray-100 rounded-lg focus:outline-none" name="search"/>
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <nav>
        <ul className='justify-center hidden space-x-2 bg-white md:flex'>
        { pages[intl.locale].map(({title, url, subs}, idx) => (
          <li key={idx} className='relative group'>
            <Link to={url} className='flex items-center p-4 text-sm lg:text-base hover:bg-white group-hover:bg-gray-200'>
              {title}
              { subs && <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs'/> }
            </Link>
            {subs && (
              <div className='absolute z-50 hidden bg-white shadow min-w-max top-13 lg:top-14 group-hover:flex group-hover:flex-col hover:flex hover:flex-col'>
                {subs.map(({title, url}, idx) => (
                  <Link key={idx} to={url} className='px-4 py-2 text-sm hover:bg-gray-100'>{title}</Link>
                ))}
              </div>
            )}
          </li>
        )) }
        </ul>
        <div className='px-4 py-2 bg-gray-100 md:hidden'>
          <div className='flex justify-between px-4 py-2'>
            <button className='px-2 bg-gray-200 rounded hover:transition-shadow hover:shadow group' onClick={() => setIsOpen(c => !isOpen)}>
              <FontAwesomeIcon icon={faBars} className='text-gray-500 group-hover:transition-colors group-hover:text-gray-800'/>
            </button>
            <div>
              <div className="relative">
                <FontAwesomeIcon icon={faSearch} className="absolute text-gray-400 text-xs top-2.5 left-2.5"/>
                <input type="text" placeholder='Search...' className="w-full px-4 py-2 pl-8 text-xs bg-white rounded-lg focus:outline-none" name=""/>
              </div>
            </div>
          </div>
          <ul className={isOpen ? 'block' : 'hidden'}>
          { pages[intl.locale].map(({title, url, subs}, idx) => (
            <li key={idx}>
              <Link to={url} className='block py-2 mx-4 transition-all ease-in-out rounded hover:px-4 hover:bg-gray-200'>
                {title}
              </Link>
            </li>
          )) }
          </ul>
        </div>
      </nav>
    </>
  )
}
