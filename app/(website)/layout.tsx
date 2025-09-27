import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newletter from '@/components/Newletter'
import React, { ReactNode, Suspense } from 'react'

export default function layout({children}:{children: ReactNode}) {
  return (
    <Suspense fallback={<div>loading...</div>}>
    <main>
        <Header />
        {children}
        <Newletter />
        <Footer />
    </main>
    </Suspense>
  )
}

