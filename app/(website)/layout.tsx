import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newletter from '@/components/Newletter'
import Loader from '@/components/ui/loader'
import React, { ReactNode, Suspense } from 'react'

export default function layout({children}:{children: ReactNode}) {
  return (
    <Suspense fallback={
    <div className='h-screen flex justify-center items-center'>
      <Loader size={8} />
    </div>
    
    }>
    <main>
        <Header />
        {children}
        <Newletter />
        <Footer />
    </main>
    </Suspense>
  )
}

