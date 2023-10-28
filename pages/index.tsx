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
      <div className='text-xl sm:text-3xl uppercase text-WhiteGray fontbold'>{`Hi I'm`}</div>
      <div className='sm:h-2 md:w-[30rem] xs:w-[19rem] rounded-sm bg-LightPink'></div>
    </div>
    <div className='sm:text-[4.2rem] xs:text-6xl text-5xl text-white font-medium'>Hnin Thet Hmue</div>
    <div className='uppercase font-bold xs:text-2xl text-xl text-LightPink text-end mt-8'>A Frontend <br />developer</div>
   </Wrapper>
    </>
  )
}
