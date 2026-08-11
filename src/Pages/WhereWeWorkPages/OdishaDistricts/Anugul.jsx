import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import HeroAngul from "../../../Components/WhereWeWork/Odisha/Districts/Angul/HeroAngul";
import AngulImpact from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulImpact";
import AngulDetails from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulDetails";
import AngulDetails2 from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulDetails2";
import AngulReports from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulReports";
import AngulLeadership from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulLeadership";
import { districtClients } from "../../../Components/WhereWeWork/districtClients";

const Anugul = () => {
  return (
    <div>
      <HeroAngul />
      <AngulImpact />
      <AngulDetails />
      <ClientsMarquee
        district="CLIENTS"
        clients={districtClients.angul}
        speed={30}
      />
      <AngulDetails2 />
      <AngulReports />
      <AngulLeadership />
    </div>
  );
};

export default Anugul;
