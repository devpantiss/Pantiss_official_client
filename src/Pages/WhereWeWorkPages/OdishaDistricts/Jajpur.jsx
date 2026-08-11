import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import JajpurHero from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurHero'
import JajpurImpact from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurImpact'
import JajpurDetails from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurDetails'
import JajpurDetails2 from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurDetails2'
import JajpurLeadership from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurLeadership'
import JajpurReports from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurReports'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'

const Jajpur = () => {
  return (
    <div>
      <JajpurHero />
      <JajpurImpact />
      <JajpurDetails />
      <ClientsMarquee
        district="CLIENTS"
        clients={districtClients.jajpur}
        speed={30}
      />
      <JajpurDetails2 />
      <JajpurReports />
      <JajpurLeadership />
    </div>
  )
}

export default Jajpur
