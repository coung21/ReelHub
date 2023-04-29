import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Buttongoup() {

    const [showButton, setShowButton] = useState(false)

    const toggleGottoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            // nếu cuộn thanh xuống hơn 200px thì xử lý
            if (window.scrollY >= 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        // khi cuộn lên cuộn xuống thì sự kiện sẽ đc kích hoạt và gọi là ị handleScroll
        window.addEventListener('scroll', handleScroll)

        console.log(window.scrollY)
        // Cleanip function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {showButton &&
                <button
                    className='fixed right-20 border-2 border-red-500 top-[650px] bg-red-500 rounded-3xl z-20 text-white py-[7px] px-[12px]
                    hover:bg-transparent 
                    hover:border-2 
                    hover:border-solid 
                    hover:border-white
                    transition-all
                    duration-500'
                    onClick={toggleGottoTop}
                >Go on</button>
            }
        </div >
    )
}
