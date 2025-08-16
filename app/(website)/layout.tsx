import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newletter from '@/components/Newletter'
import React, { ReactNode } from 'react'

export default function layout({children}:{children: ReactNode}) {
  return (
    <main>
        <Header />
        {children}
        <Newletter />
        <Footer />
    </main>
  )
}

