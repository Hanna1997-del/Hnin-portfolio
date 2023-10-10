import Link from 'next/link';
import { WrapperProps } from '@/Type';
import React from 'react'
import {AiFillGithub,
        AiFillFacebook,
        AiFillLinkedin } 
        from "react-icons/ai";

export default function Wrapper({pageIndex,children,className }
  :WrapperProps) {
    const socialClassNames= "text-3xl cursor-pointer text-white"
  return (
    <section className={className}>
      <div className='fixed w-[20rem] h-[20rem] 
                      xs:w-[28rem] xs:h-[28rem] 
                      md:w-[50rem] md:h-[50rem] md:left-10 md:top-40
                      z-10 bg-Blur rounded-full blur-3xl'></div>
      <>{children}</>
      <div className='fixed bottom-12 hidden left-6 md:flex items-center flex-col gap-4'>
          <Link href="https://github.com/Hanna1997-del ">
            <AiFillGithub className={socialClassNames}/>
          </Link>
          <Link href="https://www.linkedin.com/in/hnin-thet-hmue-365775251/">
            <AiFillLinkedin className={socialClassNames}/>
          </Link>
          <Link href="https://www.facebook.com/zuni.zuni.9404?mibextid=ZbWKwL">
            <AiFillFacebook className={socialClassNames}/>
          </Link>
        </div>
      <div className='fixed bottom-14 right-6 xs:text-3xl text-2xl text-LightPink'>0{pageIndex}</div>
    </section>
  )
}
