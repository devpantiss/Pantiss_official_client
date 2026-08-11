import ImpactJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Impact";
import DetailsJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Details";
import DetailsJharsuguda2 from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Details2";
import LeadershipJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Leadership";
import JharsugudaHero from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/JharsugudaHero";
import JharsugudaReports from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/JharsugudaReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import { districtClients } from "../../../Components/WhereWeWork/districtClients";

const Jharsuguda = () => {
  return (
    <div>
      <JharsugudaHero />
      <ImpactJharsuguda />
      <DetailsJharsuguda />
      <ClientsMarquee district="CLIENTS" clients={districtClients.jharsuguda} speed={30} />
      <DetailsJharsuguda2 />
      <JharsugudaReports />
      <LeadershipJharsuguda />
    </div>
  );
};

export default Jharsuguda;
