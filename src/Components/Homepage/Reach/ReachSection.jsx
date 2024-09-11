import React from 'react'
import Heading from '../../Common/Heading'
import ReachMap from './ReachMap'

const ReachSection = () => {
    return (
        <div className='bg-gray-100 py-4'>
            <section className='container mx-auto w-full lg:mb-14'>
                <Heading text="OUR REACH" color="text-black" bgColor="bg-red-600" />
                <ReachMap />
            </section>
        </div>
    )
}

export default ReachSection