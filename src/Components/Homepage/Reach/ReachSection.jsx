import React from 'react'
import Heading from '../../Common/Heading'
import ReachMap from './ReachMap'

const ReachSection = () => {
    return (
        <section className='w-full flex flex-col justify-center lg:mb-14 items-center'>
            <Heading text="OUR REACH" color="text-black" bgColor="bg-[#2A675C]" />
            <ReachMap />
        </section>
    )
}

export default ReachSection