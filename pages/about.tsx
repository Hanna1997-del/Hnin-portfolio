import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <>
    <Head>
    <title>Hnin Thet Hmue | About</title>
   </Head>
    <Wrapper pageIndex={2}>
      <div className='flex flex-col gap-12 lg:flex-row pt-28 items-center justify-center mb-12 min-h-screen lg:mb-0 lg:pt-0 '>
        <Image src={"/images/hnin profile.jpg"} width={300} height={300} alt={"about image"}/>
        <div className='lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl'>
          <div className='uppercase font-semibold text-sm text-WhiteGray'>- Introduction</div>
          <div className='font-semibold text-3xl mt-8 text-White uppercase'>Frontend Developer, based on Myanmar</div>
          <p className='text-WhiteGray text-sm mt-8 leading-7'>I am a passionate frontend developer with a creative eye for design and a strong focus on delivering elegant and intuitive interfaces.Excited to collaborate on new projects!</p>
          <div className='flex gap-8 mt-8'>
            <Link href="/contact" className='text-LightPink font-semibold text-sm hover:underline'>Contact Me</Link>
            <a href="/images/Hnin Thet Hmue resume2.pdf" className='text-LightPink font-semibold text-sm hover:underline' download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  )
}
