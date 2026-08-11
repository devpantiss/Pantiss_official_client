import ImpactGuwahati from '../../../Components/WhereWeWork/Assam/Guwati/Impact'
import DetailsGuwahati from '../../../Components/WhereWeWork/Assam/Guwati/Details'
import DetailsGuwahati2 from '../../../Components/WhereWeWork/Assam/Guwati/Details2'
import HeroGuwahati from '../../../Components/WhereWeWork/Assam/Guwati/HeroGuwati'
import GuwahatiReports from '../../../Components/WhereWeWork/Assam/Guwati/GuwahatiReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipGuwahati from '../../../Components/WhereWeWork/Assam/Guwati/Leadership'

const Guwahati = () => {
  return (
    <div>
        <HeroGuwahati />
        <ImpactGuwahati />
        <DetailsGuwahati />
        <ClientsMarquee district="CLIENTS" clients={districtClients.guwahati} speed={30} />
        <DetailsGuwahati2 />
        <GuwahatiReports />
        {/* <LeadershipGuwahati /> */}
    </div>
  )
}

export default Guwahati
