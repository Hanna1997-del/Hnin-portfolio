import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
    <Head>
    <title>Hnin Thet Hmue </title>
   </Head>
   <Wrapper pageIndex={1} className='max-w-2xl text-center flex flex-col justify-center'>
    <div className='flex sm:justify-between items-center gap-4 sm:gap-0'>
      <div className='text-xl sm:text-3xl uppercase text-WhiteGray fontbold'>Hi I'm</div>
    </div>
   </Wrapper>
    </>
  )
}
