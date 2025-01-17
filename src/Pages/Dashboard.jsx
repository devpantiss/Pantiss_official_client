import React from 'react'
import DashHeader from '../Components/Dashboard/DashHeader'
import Row1 from '../Components/Dashboard/Row1'
import Row2 from '../Components/Dashboard/Row2'
import Row3 from '../Components/Dashboard/Row3'

const Dashboard = () => {
  return (
    <div className='container mx-auto'>
        <DashHeader />
        <Row1 />
        <Row2 />
        <Row3 />
    </div>
  )
}

export default Dashboard