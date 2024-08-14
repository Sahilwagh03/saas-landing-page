import React from 'react'
import { SectionDescription, SectionHeader } from '../components/SectionComponents'
import Card from '@/components-react-nex/Card/Card'
import CardBody from '@/components-react-nex/Card/CardBody'
import { PiPulseDuotone ,PiChartPieSliceDuotone } from "react-icons/pi";
import Image from 'next/image';


const ReviewSection = () => {
  return (
    <section className='py-8 pt-4 px-32 max-md:px-8'>
      <div className='grid grid-cols-2'>
        <div className=''>
          <SectionHeader className='max-w-[450px]'>How we support our pratner all over the world</SectionHeader>
          <SectionDescription className='pt-5'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</SectionDescription>
        </div>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <PiPulseDuotone className='w-8 h-auto text-custom-green' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Publishing</h3>
                <SectionDescription className='max-w-[300px] '>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</SectionDescription>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <PiChartPieSliceDuotone className='w-8 h-auto text-custom-green' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Analytics</h3>
                <SectionDescription className='max-w-[300px] '>Analyze your performance and create goegeous report</SectionDescription>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <Image src='/assets/images/Review_icon.svg' width={20} height={20} className='w-8 h-auto text-custom-green' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Engagement</h3>
                <SectionDescription className='max-w-[300px] '>Quiuckly navigate you anda engage with your adience</SectionDescription>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection