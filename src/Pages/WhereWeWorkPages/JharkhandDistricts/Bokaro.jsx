import ImpactBokaro from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/Impact'
import DetailsBokaro from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/Details'
import DetailsBokaro2 from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/Details2'
import HeroBokaro from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/HeroBokaro'
import BokaroReports from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/BokaroReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipBokaro from '../../../Components/WhereWeWork/Jharkhand/Districts/Bokaro/Leadership'

const Bokaro = () => {
  return (
    <div>
      <HeroBokaro />
      <ImpactBokaro />
      <DetailsBokaro />
      <ClientsMarquee district="CLIENTS" clients={districtClients.bokaro} speed={30} />
      <DetailsBokaro2 />
      <BokaroReports />
      {/* <LeadershipBokaro /> */}
    </div>
  )
}

export default Bokaro
