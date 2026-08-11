import ImpactKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Impact";
import DetailsKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Details";
import DetailsKeonjhar2 from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Details2";
import LeadershipKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Leadership";
import HeroKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/HeroKeonjhar";
import KeonjharReports from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/KeonjharReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import { districtClients } from "../../../Components/WhereWeWork/districtClients";

const Keonjhar = () => {
  return (
    <div>
      <HeroKeonjhar />
      <ImpactKeonjhar />
      <DetailsKeonjhar />
      <ClientsMarquee district="CLIENTS" clients={districtClients.keonjhar} speed={30} />
      <DetailsKeonjhar2 />
      <KeonjharReports />
      <LeadershipKeonjhar />
    </div>
  );
};

export default Keonjhar;
