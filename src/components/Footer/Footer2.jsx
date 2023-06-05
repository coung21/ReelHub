import React from 'react'
import bg from '../../assets/bg.jpg'
import logo2 from '../../assets/logo2.png'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillWindows, AiFillApple, AiFillChrome, AiFillAndroid } from 'react-icons/ai'
import { FaLinux } from 'react-icons/fa'
import './Footer2.css'
export default function Footer2() {
    return (
        <>
            <div
                className='relative bg-top bg-cover bg-no-repeat pt-24 pb-3h-[674px] mt-9 px-8
       before:content-[""]
        before:absolute 
        before:bottom-0 
        before:left-0 
        before:w-full 
        before:h-full
        before:bg-overlay'
                style={{ backgroundImage: `url(${bg})`, height: "auto" }}
            >
                <div className='relative flex justify-between text-white border-b-[1px] border-[#717171] pb-[50px] mobile:flex-col mobile:gap-3'>
                    <div className='w-[40%] mobile:w-[100%]'>
                        <div className='flex items-center gap-2 hover:cursor-pointer'>
                            <img src={logo2} alt='logo' className='w-[50px] h-[50px]' />
                        </div>
                        <div className='my-3'>
                            <h1 className='text-white font-montserrat text-3xl font-bold'>
                                Reelhub
                            </h1>
                        </div>
                        <div className='grid grid-cols-footer-4'>
                            <div>
                                <h1 className='text-[#717171] text-sm'>Email</h1>
                                <p>hello@reelhub.com</p>
                            </div>
                            <div>
                                <h1 className='text-[#717171] text-sm'>Phone Number</h1>
                                <p>(+84)123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] mobile:w-[100%]'>
                        <h1 className='font-montserrat text-3xl font-bold'>Excellence in Every Experience, Tailored Just for You.</h1>
                        <div className='flex mt-5 '>
                            <button className='flex items-center justify-center w-[120px] h-[40px]  rounded-[20px] bg-red-500 outline-none mr-2'>Get Started</button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'> Donate</button>
                        </div>
                    </div>

                </div>
                <div className='relative flex text-white justify-between py-[50px] mobile:flex-col tablet:flex-col'>
                    <div className='flex items-center w-[30%] mobile:w-[100%] mobile:pb-5 tablet:pb-5'><AiFillCheckCircle className='mr-2' /> Available on all platforms</div>
                    <div className='flex w-[50%] mobile:w-[100%] tablet:w-[100%] overflow-hidden relative gap-1 tablet:gap-0'>
                        <div className='slide-track'>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillWindows className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Windows</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillApple className='mr-2 mobile:mr-0' /><span className='mobile:hidden'>macOs</span> </button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><FaLinux className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Linux</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'>< AiFillChrome className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Chrome</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillApple className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>iOS</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillAndroid className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Android</span></button>
                        </div>
                        <div className="slide-track">
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillWindows className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Windows</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillApple className='mr-2 mobile:mr-0' /><span className='mobile:hidden'>macOs</span> </button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><FaLinux className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Linux</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'>< AiFillChrome className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Chrome</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillApple className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>iOS</span></button>
                            <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'><AiFillAndroid className='mr-2 mobile:mr-0' /> <span className='mobile:hidden'>Android</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-red-500 h-2'>

            </div>
        </>

    )
}
