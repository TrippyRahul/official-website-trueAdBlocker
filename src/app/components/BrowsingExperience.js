"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import background from "../../../public/3.png";
import Background from "../../../public/faqBackground.png";
import styles from "../styles/browsing.module.scss";
import Line from '../../../public/line.png'

const BrowsingExperience = ({browsingData}) => {
    const [state,setState]=useState()
    return (
        <div className={styles.experience}>
            <Image src={background} quality={100} className={styles.background} alt="bg" />
            <Image
                src={Background}
                className={styles.BrowsingBackground}
                alt="faqBackground"
                quality={100}
            />
            <div className={styles.container}>
                <div className='bg-[#101010] px-16 py-8 rounded-3xl'>
                    <p className='bg-gradient-to-r from-[#E2C9FF] border-b border-[#A1A1A1] border-opacity-30 pb-2 to-[#4F07AA] text-transparent bg-clip-text text-[2.5rem]'>Say hello to a more pleasant browsing experience today!</p>
                </div>
                {

                    browsingData?.map((item, ind) => (
                        <div key={ind} className='grid pt-10 md:pt-20 grid-cols-12 md:gap-x-10'>
                            <div className={`col-span-12 md:col-span-6 ${ind%2===1?'order-1 md:order-2':'order-1'}`}>
                                <div className={`${ind%2===1?'md:text-end':'text-start'} text-[4rem] pb-3 bg-gradient-to-r from-[#E2C9FF] to-[#4F07AA] text-transparent bg-clip-text`}>{item.heading}</div>
                                <Image src={Line} quality={100} alt="bg" className={`${ind%2===1?'md:ml-auto md:rotate-180':'mr-auto'} `}/>
                            </div>
                            <div className={`col-span-12 md:col-span-6 pt-8 md:pt-0 text-[1.7rem] ${ind%2===1?'order-1 md:order-1':'order-2'}`}>
                                <p className='pb-3 transition-all'>{state===ind?item.desc:item.desc.substring(0,300)}..</p>
                                <button onClick={()=>setState(ind)} className='bg-black border border-white text-white text-[1.2rem] px-6 py-3 rounded-full '>Read More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BrowsingExperience
