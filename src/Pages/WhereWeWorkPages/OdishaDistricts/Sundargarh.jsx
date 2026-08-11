import ImpactSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Impact";
import DetailsSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Details";
import DetailsSundargarh2 from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Details2";
import LeadershipSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Leadership";
import SundargarhHero from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/SundargarhHero";
import SundargarhReports from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/SundargarhReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import { districtClients } from "../../../Components/WhereWeWork/districtClients";

const Sundargarh = () => {
  return (
    <div>
      <SundargarhHero />
      <ImpactSundargarh />
      <DetailsSundargarh />
      <ClientsMarquee district="CLIENTS" clients={districtClients.sundargarh} speed={30} />
      <DetailsSundargarh2 />
      <SundargarhReports />
      <LeadershipSundargarh />
    </div>
  );
};

export default Sundargarh;
