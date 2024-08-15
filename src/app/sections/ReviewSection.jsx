import React from 'react';
import { SectionDescription, SectionHeader } from '../components/SectionComponents';
import Card from '@/components-react-nex/Card/Card';
import CardBody from '@/components-react-nex/Card/CardBody';
import { PiPulseDuotone, PiChartPieSliceDuotone } from 'react-icons/pi';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

const ReviewSection = () => {
  const stars = [
    ...Array(4).fill({ color: '#FFC728' }),
    { color: 'gray' },
  ];

  const reviews = [
    { rating: 4.9, name: 'John Doe' },
    { rating: 4.9, name: 'Jane Smith' },
  ];

  return (
    <section className='py-8 pt-4 px-32 max-md:px-8'>
      <div className='grid grid-cols-2 items-center gap-8'>
        <div className='flex flex-col gap-8'>
          <div>
            <SectionHeader className='max-w-[450px]'>
              How we support our partners all over the world
            </SectionHeader>
            <SectionDescription className='pt-5'>
              SaaS has become a common delivery model for many business applications,
              including office software, messaging software, payroll processing software,
              DBMS software, management software.
            </SectionDescription>
          </div>
          <div className='flex flex-row gap-4'>
            {reviews.map((review, index) => (
              <Card key={index} className='!shadow-none'>
                <CardBody className='!mb-0 flex flex-col gap-2'>
                  <div className='flex flex-row gap-2'>
                    {stars.map((star, starIndex) => (
                      <IoIosStar key={starIndex} className={`w-6 h-6`} color={star.color} />
                    ))}
                  </div>
                  <div className='text-lg font-medium'>
                    {review.rating} / 5
                  </div>
                  <div className='text-sm text-gray-500'>
                    {review.name}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <PiPulseDuotone className='w-8 h-auto text-custom-green' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Publishing</h3>
                <SectionDescription className='max-w-[350px]'>
                  Plan, collaborate, and publish your content that drives meaningful
                  engagement and growth for your brand.
                </SectionDescription>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <PiChartPieSliceDuotone className='w-8 h-auto text-custom-green' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Analytics</h3>
                <SectionDescription className='max-w-[300px]'>
                  Analyze your performance and create gorgeous reports.
                </SectionDescription>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className='!mb-0 flex !flex-row gap-5'>
              <Image
                src='/assets/images/Review_icon.svg'
                width={20}
                height={20}
                className='w-8 h-auto text-custom-green'
                alt='Review Icon'
              />
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold'>Engagement</h3>
                <SectionDescription className='max-w-[300px]'>
                  Quickly navigate and engage with your audience.
                </SectionDescription>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
