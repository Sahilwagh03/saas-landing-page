import React from 'react';
import { SectionDescription, SectionHeader } from '../components/SectionComponents';
import Button from '@/components-react-nex/Button/Button';
import HorizontalFeatureCard from '../components/HorizontalFeatureCard';

const Features = () => {
  const FeaturesList = [
    {
      featuresName: 'Collaboration Teams',
      description: 'Handle projects together with your team virtually.',
      image: '/assets/images/Features_1.png',
    },
    {
      featuresName: 'Cloud Storage',
      description: 'No need to worry about storage as we provide up to 2 TB.',
      image: '/assets/images/Features_2.png',
    },
    {
      featuresName: 'Daily Analytics',
      description: 'Receive useful information daily to make your work easier.',
      image: '/assets/images/Features_3.png',
    },
  ];

  return (
    <section className="py-8 pt-32 px-32 max-md:px-8">
      <div className='flex flex-col gap-4 items-start md:gap-0 md:flex-row md:items-center justify-between'>
        <SectionHeader className='max-w-[300px]'>
          Our Features You Can Get
        </SectionHeader>
        <SectionDescription className='max-w-[400px]'>
          We offer a variety of interesting features to help increase your productivity at work and manage your projects easily.
        </SectionDescription>
        <Button className='bg-custom-green rounded-full text-white text-nowrap w-fit h-fit'>
          Get Started
        </Button>
      </div>
      <div className='flex flex-col md:flex-row gap-4 pt-5'>
        {FeaturesList.map(({ featuresName, description, image }, idx) => (
          <HorizontalFeatureCard
            key={idx + featuresName}
            name={featuresName}
            description={description}
            src={image}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
