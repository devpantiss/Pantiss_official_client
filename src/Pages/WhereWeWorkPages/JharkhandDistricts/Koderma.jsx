import ImpactKoderma from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/Impact'
import DetailsKoderma from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/Details'
import DetailsKoderma2 from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/Details2'
import LeadershipKoderma from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/Leadership'
import HeroKoderma from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/HeroKoderma'
import KodermaReports from '../../../Components/WhereWeWork/Jharkhand/Districts/Koderma/KodermaReports'
import ClientsMarquee from '../../../Components/Common/ClientsMarquee'
import { districtClients } from '../../../Components/WhereWeWork/districtClients'

const Koderma = () => {
  return (
    <div>
      <HeroKoderma />
      <ImpactKoderma />
      <DetailsKoderma />
      <ClientsMarquee district="CLIENTS" clients={districtClients.koderma} speed={30} />
      <DetailsKoderma2 />
      <KodermaReports />
      <LeadershipKoderma />
    </div>
  )
}

export default Koderma
