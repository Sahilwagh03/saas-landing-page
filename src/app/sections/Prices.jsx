import React from 'react'
import { SectionDescription, SectionHeader } from '../components/SectionComponents'
import Button from '@/components-react-nex/Button/Button'
import { PriceCard } from '../components/PriceCard'

const pricingPlans = [
    {
        title: 'Free',
        description: 'Have a go and test your superpowers',
        price: '0',
        benefits: [
            '2 Users',
            '2 Files',
            'Public Share & Comments',
            'Chat Support',
            'New income apps'
        ],
        buttonLabel: 'Signup for free',
    },
    {
        title: 'Pro',
        description: 'Experiment the power of infinite possibilities',
        price: '8',
        additionalInfo: 'Save $50 a year',
        benefits: [
            '4 Users',
            'All apps',
            'Unlimited editable exports',
            'Folders and collaboration',
            'All incoming apps'
        ],
        buttonLabel: 'Go to pro',
    },
    {
        title: 'Business',
        description: 'Unveil new superpowers and join the Design League',
        price: '16',
        benefits: [
            'All the features of pro plan',
            'Account success Manager',
            'Single Sign-On (SSO)',
            'Co-conception program',
            'Collaboration-Soon'
        ],
        buttonLabel: 'Goto Business',
    },
]


const Prices = () => {
    return (
        <section className='py-5 md:py-16 px-32 max-md:px-8 flex flex-col gap-10'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <SectionHeader className='text-center max-w-[430px]'>Choose Plan That&apos;s Right For You</SectionHeader>
                <SectionDescription className='text-center'>Choose plan that works best for you, feel free to contact us</SectionDescription>
                <div className='flex flex-row gap-5'>
                    <Button className='rounded-md border'>Bill Monthly</Button>
                    <Button className='rounded-md border bg-custom-green text-white'>Bill Yearly</Button>
                </div>
            </div>
            <div className='flex flex-row gap-4'>
                {pricingPlans.map((plan, idx) => (
                    <PriceCard key={idx} {...plan} />
                ))}
            </div>
        </section>
    )
}


export default Prices
