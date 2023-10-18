import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'

export default function portfolio() {
  return (
    <>
    <Head>
    <title>Hnin Thet Hmue | Portfolio</title>
   </Head>
    <Wrapper pageIndex={3}>
      <div className='flex flex-col pt-40 items-center text-center'>
      <div className='uppercase font-semibold text-sm text-WhiteGray'>
        - Portfolio
        </div>
          <div className='font-semibold text-3xl mt-8 text-White uppercase'>
            My Masterpiece Collections
            </div>
            <p className='text-WhiteGray text-sm mt-8 leading-7'>
              I specialize in developing custom web applications that cater to divers business needs,
               form e-commerce platforms to data visualization dashboards, using the latest technologies
               and agile methodologies to deliver exceptional user experiences and measurable business outcome.
             </p>
             <div>
              
             </div>
      </div>
    </Wrapper>
    </>
  )
}
