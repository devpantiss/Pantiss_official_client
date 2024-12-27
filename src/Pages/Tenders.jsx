import React from 'react'
import TenderSection from '../Components/TenderPage/TenderCards'
import TendersListing from '../Components/TenderPage/Listing'
import DetailSection from '../Components/TenderPage/DetailSection'

const Tenders = () => {
  return (
    <div>
      <TenderSection />
      <DetailSection />
      <TendersListing />
    </div>
  )
}

export default Tenders