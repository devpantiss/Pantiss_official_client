import ImpactKorba from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/Impact'
import DetailsKorba from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/Details'
import DetailsKorba2 from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/Details2'
import HeroKorba from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/HeroKorba'
import KorbaReports from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/KorbaReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'
// import LeadershipKorba from '../../../Components/WhereWeWork/Chhattisgarh/Districts/Korba/Leadership'

const Korba = () => {
  return (
    <div>
        <HeroKorba />
        <ImpactKorba />
        <DetailsKorba />
        <ClientsMarquee district="CLIENTS" clients={districtClients.korba} speed={30} />
        <DetailsKorba2 />
        <KorbaReports />
        {/* <LeadershipKorba /> */}
    </div>
  )
}

export default Korba
