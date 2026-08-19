import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Heading from "../../Common/Heading";

const DistrictLeadershipHeader = () => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <Heading
        text="District Leadership"
        color="text-black"
        bgColor="bg-red-600"
      />
      <Link
        to="/whoweare/team"
        aria-label="Explore the Pantiss team"
        className="group inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        Explore
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
};

export default DistrictLeadershipHeader;
