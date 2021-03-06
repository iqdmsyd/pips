import React from 'react'
import NeoNavbar from './NeoNavbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className=''>
      <NeoNavbar/>
      <div className='flex justify-center w-full'>
        <div className='w-full lg:max-w-1200'>
          {children}
        </div>
      </div>
      {/* <div className='grid grid-cols-1 gap-0 px-6 py-6 md:gap-8 lg:gap-12 md:grid-cols-3 lg:grid-cols-4 md:px-8 lg:px-12'>
        <div className={ path === '/' ? 'col-auto md:col-span-3 lg:col-span-4' : 'col-auto md:col-span-2 lg:col-span-3' }>
          { children }
        </div>
        <div className={ path === '/' ? 'hidden' : 'col-auto' }>
          <Sidebar/>
        </div>
      </div> */}
      <Footer/>
    </div>
  )
}
