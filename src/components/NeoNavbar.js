import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'


import { faPhone, faEnvelope, faSearch, faChevronDown, faLanguage, faBars } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import pages from '../texts/navs.json'

export default function NeoNavbar() {
  const intl = useIntl()
  const [ changeLangOpen, setChangeLangOpen ] = useState(false)
  const changeLang = (lang) => {
    changeLocale(lang)
    setChangeLangOpen(false)
  }

  const [ isNavOpen, setIsNavOpen ] = useState(false)

  return (
    <>
      {/* top nav */}
      <div className='bg-black'>
        <div className='flex bg-black pt-8 pb-2 px-4 align-middle max-w-1200 mx-auto'>
          <span className='hidden md:block mr-2'>
            <FontAwesomeIcon icon={faLanguage} className='text-white' size='lg'/>
          </span>
          <button className='relative flex align-middle text-white text-xs md:text-sm px-2'  onClick={ () => setChangeLangOpen(c => !c) }>
            { (intl.locale).toUpperCase() }
            <span><FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs'/></span>
            { changeLangOpen && <ul className='absolute text-white bg-black z-50 left-0 top-full w-full'>
              <li className='hover:bg-red-700 py-1' onClick={() => changeLang('en')}>EN</li>
              <li className='hover:bg-red-700 py-1' onClick={() => changeLang('id')}>ID</li>
            </ul> }
          </button>

          <ul className='ml-auto flex gap-4'>
            <li><FontAwesomeIcon icon={faInstagram} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faYoutube} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faPhone} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faEnvelope} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faSearch} className='text-white ml-4'/></li>
          </ul>
        </div>
      </div>

      {/* main navigation */}
      <div className='bg-red-700 py-4 px-4'>
        <div className='flex bg-red-700 max-w-1200 mx-auto align-middle'>
          <a href='/'>
            <img src='/logo_upi.png' className='h-10 lg:h-12' alt='logo pips'/>
          </a>
          <nav className='ml-auto flex align-middle'>
            <ul className='justify-center hidden space-x-2 bg-red-700 lg:flex'>
            { pages[intl.locale].map(({title, url, subs}, idx) => (
              <li key={idx} className='relative group'>
                <Link to={url} className='flex items-center p-4 text-white text-xs lg:text-sm hover:bg-black group-hover:bg-black'>
                  {title}
                  { subs && <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs'/> }
                </Link>
                { subs && (
                  <ul className='absolute z-50 hidden bg-white shadow min-w-max top-13 group-hover:flex group-hover:flex-col hover:flex hover:flex-col group'>
                    { subs.map(({title, url, subs}, idx) => {
                      return subs
                        ? <li>
                            <Link key={idx} to={url} className={ subs ? 'px-4 py-2 text-sm font-semibold' : 'px-4 py-2 text-sm hover:bg-gray-300'}>{title}</Link>
                            <ul>
                              { subs.map(({ title, url, blank }, idx) => (
                                <li>
                                  <Link key={idx} to={url} className='w-full block px-4 py-2 text-sm hover:bg-gray-300' target={ blank ? "_blank" : "_self" }>{title}</Link>
                                </li>
                              )) }
                            </ul>
                          </li>
                        : <Link key={idx} to={url} className='px-4 py-2 text-sm hover:bg-gray-300'>{title}</Link>
                    } )}
                  </ul>
                )}
              </li>
            )) }
            </ul>
            <button className='hover:transition-shadow hover:shadow group lg:hidden' onClick={() => setIsNavOpen(c => !c)}>
              <FontAwesomeIcon icon={faBars} className='text-white group-hover:transition-colors group-hover:text-black'/>
            </button>
          </nav>
        </div>
      </div>

      {/* collapsible navigation */}
      { isNavOpen && (
        <div className='bg-white py-4 px-4 absolute z-50 w-full'>
          <nav>
            <ul className='space-y-2'>
              { pages[intl.locale].map(({title, url, subs}, idx) => (
                <li key={idx} className='group w-full bg-gray-300' >
                  <details>
                    <summary className='nav-summary'>
                      <Link to={url}>
                        { title }
                      </Link>
                      { subs && <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs nav-summary-chevron'/> }
                    </summary>
                    { subs && (
                      <ul className='w-full bg-white'>
                      { subs.map(({title, url, subs}, idx) => {
                        return subs
                          ? <>
                          <li key={idx}><Link key={idx} to={url} className={ subs ? 'font-semibold' : '' }>{title}</Link></li>
                            <ul>
                              { subs.map(({ title, url, blank }, idx) => (
                                <li key={idx}><Link key={idx} to={url} target={ blank ? "_blank" : "_self" }>{title}</Link></li>
                              )) }
                            </ul>
                          </>
                          : <li key={idx}><Link key={idx} to={url}>{title}</Link></li>
                      }) }
                      </ul>
                    ) }
                  </details>
                </li>
              )) }
            </ul>
          </nav>
        </div>
      ) }
    </>
  )
}
