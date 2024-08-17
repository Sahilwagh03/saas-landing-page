import React from 'react'
import { SectionHeader } from '../components/SectionComponents'
import Image from 'next/image'

const Benifit = () => {

  const Benifites = [
    {
      description: 'Free Consulting With Experet Saving Money'
    },
    {
      description: 'Online Banking'
    },
    {
      description: 'Investment Report Every Month'
    },
    {
      description: 'Saving Money For The Future'
    },
    {
      description: 'Online Transection'
    },
  ]

  return (
    <section className='py-5 md:py-32 md:pb-10 px-32 max-md:px-8'>
      <div className='flex flex-row'>
        <div className='flex flex-col gap-12 flex-1'>
          <SectionHeader className='max-w-[550px] text-6xl'>What Benifit Will You Get</SectionHeader>
          <div className='flex flex-col gap-8'>
            {
              Benifites.map(({ description }, idx) => (
                <div className='flex flex-row gap-4 items-center' key={idx}>
                  <Image width={32} height={32} src='/assets/images/Subtract.svg' />
                  <p>{description}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex-1 flex justify-end relative'>
          <Image src='/assets/images/Benifits_img.png' width={450} height={530}/>
          <Image src='/assets/images/Money.svg' width={100} height={100} className='absolute w-fit h-fit bottom-3 -left-10'/>
          <Image src='/assets/images/gallery_icon.svg' width={100} height={100} className='absolute w-fit h-fit top-64 left-0'/>
          <Image src='/assets/images/Hero_flotting_img_5.svg' width={100} height={100} className='absolute w-fit h-fit top-5 -left-5'/>
          <Image src='/assets/images/Hero_flotting_img_1.svg' width={100} height={100} className='absolute w-fit h-fit top-44 -right-20'/>
        </div>
      </div>
    </section>
  )
}

export default Benifit