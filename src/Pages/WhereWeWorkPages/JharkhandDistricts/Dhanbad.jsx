import ImpactDhanbad from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/Impact'
import DetailsDhanbad from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/Details'
import DetailsDhanbad2 from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/Details2'
import HeroDhanbad from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/HeroDhanbad'
import DhanbadReports from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/DhanbadReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipDhanbad from '../../../Components/WhereWeWork/Jharkhand/Districts/Dhanbad/Leadership'

const Dhanbad = () => {
  return (
    <div>
      <HeroDhanbad />
      <ImpactDhanbad />
      <DetailsDhanbad />
      <ClientsMarquee district="CLIENTS" clients={districtClients.dhanbad} speed={30} />
      <DetailsDhanbad2 />
      <DhanbadReports />
      {/* <LeadershipDhanbad /> */}
    </div>
  )
}

export default Dhanbad
