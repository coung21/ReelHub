import React from 'react'
import Button from '../Button/Button';
import LoadingSkeleton from '../Loading/LoadingSkeleton';
export default function HeroSlideItemLoading() {
    return (
        <>
            <div
                className='bg-[#1F1F1F] w-[100%] h-[600px] pt-16'
            >
                <div className='flex justify-center items-center relative px-4 sm:px-12 h-full'>
                    <div className='w-full md:w-1/2 px-2 sm:px-12'>
                        <h2 className='font-montserrat text-white font-bold text-3xl sm:text-4xl text-center md:text-left'>

                            <LoadingSkeleton className='w-full h-[40px] rounded-xl' />
                        </h2>
                        <div className='  mt-7 md:mt-12 text-center '>
                            <LoadingSkeleton className='w-full h-[170px] rounded-xl' />
                        </div>
                        <div className='mt-7 md:mt-12 flex justify-center md:justify-start gap-5'>
                            <button
                                className=''
                            >
                                <LoadingSkeleton className='w-[140px] h-[36px] rounded-2xl' />
                            </button>
                            <button
                                className=' '
                            >
                                <LoadingSkeleton className='w-[140px] h-[36px] rounded-2xl' />
                            </button>
                        </div>
                    </div>
                    <div className='md:flex-1 flex justify-center items-start'>

                        <LoadingSkeleton className='hidden md:inline-block w-[320px] h-[480px] rounded-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}
