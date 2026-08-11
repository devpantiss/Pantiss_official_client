import ImpactDispur from '../../../Components/WhereWeWork/Assam/Dispur/Impact'
import DetailsDispur from '../../../Components/WhereWeWork/Assam/Dispur/Details'
import DetailsDispur2 from '../../../Components/WhereWeWork/Assam/Dispur/Details2'
import HeroDispur from '../../../Components/WhereWeWork/Assam/Dispur/HeroDispur'
import DispurReports from '../../../Components/WhereWeWork/Assam/Dispur/DispurReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipDispur from '../../../Components/WhereWeWork/Assam/Dispur/Leadership'

const Dispur = () => {
  return (
    <div>
      <HeroDispur />
      <ImpactDispur />
      <DetailsDispur />
      <ClientsMarquee district="CLIENTS" clients={districtClients.dispur} speed={30} />
      <DetailsDispur2 />
      <DispurReports />
      {/* <LeadershipDispur /> */}
    </div>
  )
}

export default Dispur
