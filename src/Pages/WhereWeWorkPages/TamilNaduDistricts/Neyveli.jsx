import ImpactNeyveli from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/Impact'
import DetailsNeyveli from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/Details'
import DetailsNeyveli2 from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/Details2'
import HeroNeyveli from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/HeroNeyveli'
import NeyveliReports from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/NeyveliReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipNeyveli from '../../../Components/WhereWeWork/TamilNadu/Districts/Neyveli/Leadership'

const Neyveli = () => {
  return (
    <div>
      <HeroNeyveli />
      <ImpactNeyveli />
      <DetailsNeyveli />
      <ClientsMarquee district="CLIENTS" clients={districtClients.neyveli} speed={30} />
      <DetailsNeyveli2 />
      <NeyveliReports />
      {/* <LeadershipNeyveli /> */}
    </div>
  )
}

export default Neyveli
