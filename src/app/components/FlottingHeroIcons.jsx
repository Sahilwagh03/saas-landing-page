import Image from 'next/image'
import React from 'react'

const FlottingHeroIcons = () => {
    return (
        <>
            <div className='absolute -left-10 top-1 lg:top-10'>
                <Image
                    src='/assets/images/Hero_flotting_img_5.svg'
                    alt='credit card'
                    width={250}
                    height={250}
                    className=''
                />
            </div>
            <div className='absolute -left-5 bottom-4 lg:bottom-5 lg:left-10'>
                <Image
                    src='/assets/images/Hero_flotting_img_1.svg'
                    alt='anlaytics'
                    width={100}
                    height={100}
                    className='lg:w-full h-auto'
                />
            </div>

            <div className='absolute -bottom-9 right-10'>
                <Image
                    src='/assets/images/Hero_flotting_img_2.svg'
                    alt='message'
                    width={50}
                    height={50}
                    className='w-full h-auto'
                />
            </div>

            <div className='absolute top-9 -right-8'>
                <Image
                    src='/assets/images/Hero_flotting_img_3.svg'
                    alt='database'
                    width={50}
                    height={50}
                    className='w-full h-auto'
                />
            </div>

            <div className='absolute -right-14 bottom-5 lg:-right-28'>
                <Image
                    src='/assets/images/Hero_flotting_img_4.svg'
                    alt='credit card'
                    width={146}
                    height={188}
                    className='lg:w-full h-auto'
                />
            </div>

        </>
    )
}

export default FlottingHeroIcons