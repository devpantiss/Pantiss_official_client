/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  GraduationCap,
  HandCoins,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import Heading from "../Common/Heading";

export const bankingBenefits = [
  {
    slug: "health-hospitalisation",
    title: "Health and Hospitalization",
    image: "/assets/careers/benefits/generated/health-hospitalisation.jpg",
    Icon: HeartPulse,
    highlights: [
      "Employee and eligible family coverage option",
      "₹30 lakh base hospitalisation cover*",
      "Pre- and post-hospitalisation support",
    ],
    description:
      "Designed to help eligible employees and their families manage hospital-related expenses with greater confidence and timely support.",
  },
  {
    slug: "accidental-protection",
    title: "Accidental Protection",
    image: "/assets/careers/benefits/generated/accidental-protection.jpg",
    Icon: ShieldCheck,
    highlights: [
      "Accidental death cover of ₹5 lakh*",
      "Air-accident death cover of ₹25 lakh*",
    ],
    description:
      "Provides an additional financial safety net for eligible employees in the event of accidental death, including enhanced protection for air travel.",
  },
  {
    slug: "mdp-nirf-top-10-institutes",
    title: "MDP in NIRF Ranking 10 Institutes",
    image: "/assets/careers/benefits/IMG_20241120_122703579_HDR.jpg",
    Icon: GraduationCap,
    highlights: [
      "Management development programmes at leading institutes",
      "Learning opportunities through NIRF top-10 institutions*",
    ],
    description:
      "Supports eligible employees in strengthening their leadership and management capabilities through programmes at highly ranked institutions.",
  },
  {
    slug: "preferential-loan-facilities",
    title: "Preferential Loan",
    image: "/assets/careers/benefits/generated/preferential-loans.jpg",
    Icon: HandCoins,
    highlights: [
      "Personal, home and vehicle loan options*",
      "Consumer-durable, gold and property-backed loans*",
    ],
    description:
      "Makes a range of credit facilities available to qualifying employees, subject to the lender’s eligibility and approval requirements.",
  },
  {
    slug: "maternity-paternity-benefits",
    title: "Maternity & Paternity Benefits",
    image: "/assets/careers/benefits/pexels-william-fortunato-6392819.jpg",
    Icon: Baby,
    highlights: [
      "Support for new and growing families",
      "Inclusive maternity and paternity benefits*",
    ],
    description:
      "Helps eligible employees take meaningful time to care for and bond with a newborn or newly adopted child.",
  },
];

const BankingBenefitCard = memo(({ benefit, isLarge = false }) => {
  return (
    <Link
      to={`/benefits-at-pantiss/${benefit.slug}`}
      aria-label={`Explore ${benefit.title}`}
      className={`group relative isolate block overflow-hidden rounded-[1.75rem] bg-neutral-900 shadow-lg ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4 ${isLarge ? "h-[550px]" : "h-64"}`}
    >
      <img
        src={benefit.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <div
        className={`absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 sm:right-auto ${isLarge ? "p-5 sm:bottom-5 sm:left-5 sm:max-w-[85%] sm:p-6" : "p-4 sm:max-w-[calc(100%-1.5rem)]"}`}
      >
        <h3
          className={`font-semibold leading-tight text-red-600 ${isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
        >
          {benefit.title}
        </h3>
      </div>
    </Link>
  );
});

BankingBenefitCard.displayName = "BankingBenefitCard";

const BenefitsPantiss = () => {
  const [featuredBenefit, ...otherBenefits] = bankingBenefits;

  return (
    <section
      aria-labelledby="employee-benefits-heading"
      className="bg-white px-4 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <div id="employee-benefits-heading">
            <Heading
              text="EMPLOYEE BENEFITS"
              color="text-black"
              bgColor="bg-red-600"
            />
          </div>
          <p className="max-w-3xl text-left text-lg leading-8 text-gray-600">
            We support our people with meaningful health, protection, learning,
            financial, and family benefits.
          </p>
        </header>

        <div className="space-y-6 px-0 sm:px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <BankingBenefitCard benefit={featuredBenefit} isLarge />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {otherBenefits.map((benefit) => (
                <BankingBenefitCard key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-neutral-200 pt-6 text-xs leading-6 text-neutral-500">
          *Benefits, limits, memberships, offers, and eligibility are subject to the applicable bank, insurer, programme terms, and current corporate salary-account rules.
        </p>
      </div>
    </section>
  );
};

export default memo(BenefitsPantiss);
