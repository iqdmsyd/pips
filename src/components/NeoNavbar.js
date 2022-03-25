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

  // document.querySelectorAll('details').forEach((D,_,A) => {
  //   D.ontoggle = _ => {
  //     if (D.open) {
  //       A.forEach(d => { if (d !== D) d.open = false })
  //     }
  //   }
  // })

  return (
    <div className='sticky top-0 z-50'>
      {/* top nav */}
      <div className='bg-black'>
        <div className='flex px-4 py-2 mx-auto align-middle bg-black max-w-1200'>
          <span className='hidden mr-2 md:block'>
            <FontAwesomeIcon icon={faLanguage} className='text-white' size='lg'/>
          </span>
          <div
            className='relative flex px-2 text-xs text-white align-middle md:text-sm'
            role='button'
            tabIndex={0}
            onClick={ () => setChangeLangOpen(c => !c) }
            onKeyDown={ () => setChangeLangOpen(c => !c)}
          >
            { (intl.locale).toUpperCase() }
            <span><FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs'/></span>
            { changeLangOpen && <div className='absolute left-0 z-50 w-full pt-2 text-white bg-black top-full'>
              <button className='block w-full py-1 hover:bg-gray-500' onClick={() => changeLang('en')}>EN</button>
              <button className='block w-full py-1 hover:bg-gray-500' onClick={() => changeLang('id')}>ID</button>
            </div> }
          </div>

          <ul className='flex gap-4 ml-auto'>
            <li><FontAwesomeIcon icon={faInstagram} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faYoutube} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faPhone} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faEnvelope} className='text-white'/></li>
            <li><FontAwesomeIcon icon={faSearch} className='ml-4 text-white'/></li>
          </ul>
        </div>
      </div>

      {/* main navigation */}
      <div className='px-4 py-2 bg-red-700'>
        <div className='flex mx-auto align-middle bg-red-700 max-w-1200'>
          <a href='/'>
            <img src='/logo_upi.png' className='h-10 lg:h-12' alt='logo pips'/>
          </a>
          <nav className='flex ml-auto align-middle'>
            <ul className='justify-center hidden space-x-2 bg-red-700 lg:flex'>
            { pages[intl.locale].map(({title, url, subs}, idx) => (
              <li key={idx} className='relative group'>
                <Link to={url} className='flex items-center p-4 text-xs text-white lg:text-sm hover:bg-black group-hover:bg-black'>
                  {title}
                  { subs && <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs'/> }
                </Link>
                { subs && (
                  <ul className='absolute z-50 hidden bg-white shadow min-w-max top-13 group-hover:flex group-hover:flex-col hover:flex hover:flex-col group'>
                    { subs.map(({title, url, subs}, idx) => {
                      return subs
                        ? <li key={idx}>
                            <Link to={url} className={ subs ? 'px-4 py-2 text-sm font-semibold' : 'px-4 py-2 text-sm hover:bg-gray-300'}>{title}</Link>
                            <ul>
                              { subs.map(({ title, url, blank }, idx) => (
                                <li key={idx}>
                                  { blank
                                    ? <a href={url} rel="noreferrer" target="_blank" className='block w-full px-6 py-2 text-sm hover:bg-gray-300'>{title}</a>
                                    : <Link to={url} className='block w-full px-6 py-2 text-sm hover:bg-gray-300'>{title}</Link>}
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
        <div className='absolute z-50 w-full px-4 py-4 bg-slate-100'>
          <nav>
            <ul className='space-y-2'>
              { pages[intl.locale].map(({title, url, subs}, idx) => (
                <li key={idx} className='w-full text-sm group bg-slate-100'>
                  <details>
                    <summary className='bg-gray-300 nav-summary'>
                      <Link to={url} className='inline-block p-2 font-semibold'>
                        { title }
                      </Link>
                      { subs && <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-xs nav-summary-chevron'/> }
                    </summary>
                    { subs && (
                      <ul className='w-full mt-1 bg-slate-100'>
                      { subs.map(({title, url, subs}, idx) => {
                        return subs
                          ? <React.Fragment key={idx}>
                            <li><Link key={idx} to={url} className={ subs ? 'font-semibold px-2 w-full block' : 'w-full px-2 block hover:text-red-500' }>{title}</Link></li>
                              <ul>
                                { subs.map(({ title, url, blank }, idx) => (
                                  <li key={idx}>
                                  { blank
                                    ? <a href={url} rel="noreferrer" target="_blank" className='block w-full px-3 hover:text-red-500'>{title}</a>
                                    : <Link key={idx} to={url} className='block w-full px-3 hover:text-red-500'>{title}</Link>
                                  }
                                  </li>
                                )) }
                              </ul>
                            </React.Fragment>
                          : <li key={idx}><Link key={idx} to={url} className='block w-full px-2 hover:text-red-500'>{title}</Link></li>
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
    </div>
  )
}
