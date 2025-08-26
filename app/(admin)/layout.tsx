import React, { ReactNode } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function layout({children}: {children: ReactNode}) {
  return (
    <main className='flex flex-row min-h-screen'>
      <Sidebar />  
      <div className='flex-1 py-6 md:py-8 lg:py-10 px-6 md:px-8 lg:px-10'>
        <Header />
        {children}
      </div>
    </main>
  )
}
