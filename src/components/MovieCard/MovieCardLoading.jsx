import React from 'react'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

export default function MovieCardLoading() {
    return (
        <div className='hover:cursor-pointer duration-300 hover:scale-95 w-[100%] rounded-xl bg-[#1F1F1F] p-3 h-fit text-white'>
            <div className='w-[100%] h-[100%]'>
                <div className='w-[100%] h-[250px] mb-2'>
                    <LoadingSkeleton className='w-[100%] h-[100%] mb-2 rounded-xl' />
                </div>
                <LoadingSkeleton className='w-full h-[40px] rounded-xl' />
            </div>
        </div>
    )
}
