"use client"
import React, { ReactNode, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function layout({children}: {children: ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <main className='flex flex-row h-screen overflow-y-hidden'>
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />  
      <div className='flex-1 py-6 md:py-8 lg:py-10 px-6 md:px-8 lg:px-10 overflow-y-scroll'>
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        {children}
      </div>
    </main>
  )
}
