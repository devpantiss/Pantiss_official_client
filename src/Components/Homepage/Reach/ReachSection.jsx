import React from 'react'
import Heading from '../../Common/Heading'
import ReachMap from './ReachMap'

const ReachSection = () => {
    return (
        <div className='bg-gray-100 py-4'>
            <section className='w-full'>
                <div className='container mx-auto w-full'>
                    <Heading text="OUR REACH" color="text-black" bgColor="bg-red-600" />
                </div>
                <div className='flex justify-center items-center'>
                    <ReachMap />

                </div>
            </section>
        </div>
    )
}

export default ReachSection