import Card from '@/components-react-nex/Card/Card';
import CardBody from '@/components-react-nex/Card/CardBody';
import { CardDescription, CardTitle } from '@/components-react-nex/Card/CardComponets';
import Image from 'next/image';
import React from 'react';

const HorizontalFeatureCard = ({ name, description, src }) => {
  return (
    <Card className='min-w-[300px]'>
      <CardBody className='!mb-0 flex flex-col items-center '>
        <Image
          src={src}
          alt={`${name}`}
          width={300}
          height={300}
          className="w-[300px] h-[330px] object-cover"
        />
        <div className="">
          <CardTitle className='!mb-2'>{name}</CardTitle>
          <CardDescription className='!mb-0'>{description}</CardDescription>
        </div>
      </CardBody>
    </Card>
  );
};

export default HorizontalFeatureCard;
