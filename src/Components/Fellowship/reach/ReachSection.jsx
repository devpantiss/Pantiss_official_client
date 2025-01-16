import React from 'react'
import Heading from '../../Common/Heading'
import ReachMap from './ReachMap'

const ReachSection = () => {
    return (
        <div className='bg-red-600 py-12'>
            <section className='w-full'>
                <div className='container mx-auto flex justify-center items-center w-full'>
                    <Heading text="FELLOWSHIP LOCATIONS" color="text-white" bgColor="bg-white" />
                </div>
                <div className='flex justify-center items-center'>
                    <ReachMap />

                </div>
            </section>
        </div>
    )
}

export default ReachSection;