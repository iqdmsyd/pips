import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  const path = typeof window !== undefined ? window.location.pathname : ''

  return (
    <>
      <Navbar/>
      {children}
      {/* <div className='grid grid-cols-1 gap-0 px-6 py-6 md:gap-8 lg:gap-12 md:grid-cols-3 lg:grid-cols-4 md:px-8 lg:px-12'>
        <div className={ path === '/' ? 'col-auto md:col-span-3 lg:col-span-4' : 'col-auto md:col-span-2 lg:col-span-3' }>
          { children }
        </div>
        <div className={ path === '/' ? 'hidden' : 'col-auto' }>
          <Sidebar/>
        </div>
      </div> */}
      <Footer/>
    </>
  )
}
