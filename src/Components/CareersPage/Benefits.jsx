/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  CreditCard,
  Crown,
  Gift,
  HandCoins,
  Headphones,
  HeartPulse,
  Landmark,
  Plane,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Heading from "../Common/Heading";

export const bankingBenefits = [
  {
    slug: "health-hospitalisation",
    title: "Health & Hospitalisation",
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
    slug: "zero-balance-salary-account",
    title: "Zero-Balance Salary Account",
    image: "/assets/careers/benefits/generated/zero-balance-salary-account.jpg",
    Icon: Landmark,
    highlights: [
      "No minimum balance with regular salary credit",
      "Instant account-opening kit",
      "Free statements and passbook facility",
    ],
    description:
      "A convenient salary account intended to make everyday banking simpler without a regular minimum-balance requirement when qualifying salary credits continue.",
  },
  {
    slug: "premium-debit-card",
    title: "Premium Debit Card",
    image: "/assets/careers/benefits/generated/premium-debit-card.jpg",
    Icon: CreditCard,
    highlights: [
      "Daily ATM withdrawal limit up to ₹50,000",
      "Daily shopping limit up to ₹3.5 lakh",
    ],
    description:
      "An eligible salary-account debit card offering useful daily withdrawal and shopping limits for greater payment flexibility.",
  },
  {
    slug: "airport-lounge-access",
    title: "Airport Lounge Access",
    image: "/assets/careers/benefits/generated/airport-lounge-access.jpg",
    Icon: Plane,
    highlights: [
      "One complimentary airport lounge visit per quarter*",
      "Available through the eligible salary-account debit card",
    ],
    description:
      "Eligible employees can enjoy periodic domestic airport lounge access through the qualifying salary-account debit card.",
  },
  {
    slug: "family-banking-benefits",
    title: "Family Banking Benefits",
    image: "/assets/careers/benefits/generated/family-banking.jpg",
    Icon: UsersRound,
    highlights: [
      "Zero-balance salary family account*",
      "Debit card for the primary family-account holder",
    ],
    description:
      "Extends selected banking conveniences to an eligible family member through a linked family salary-account programme.",
  },
  {
    slug: "cashback-lifestyle-rewards",
    title: "Cashback & Lifestyle Rewards",
    image: "/assets/careers/benefits/generated/cashback-lifestyle-rewards.jpg",
    Icon: Gift,
    highlights: [
      "Cashback benefits up to ₹4,800 annually*",
      "Up to 10% cashback through SmartBuy*",
    ],
    description:
      "Offers eligible employees opportunities to earn cashback and access lifestyle savings on qualifying purchases and partner platforms.",
  },
  {
    slug: "free-ott-entertainment",
    title: "Free OTT Entertainment",
    image: "/assets/careers/benefits/generated/ott-entertainment.jpg",
    Icon: Clapperboard,
    highlights: [
      "Complimentary annual OTT membership*",
      "Options may include Amazon Prime, SonyLIV or ZEE5*",
    ],
    description:
      "Adds entertainment value to the eligible salary programme through a complimentary annual membership from selected OTT services.",
  },
  {
    slug: "preferential-loan-facilities",
    title: "Preferential Loan Facilities",
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
    slug: "investment-wealth-building",
    title: "Investment & Wealth Building",
    image: "/assets/careers/benefits/generated/investment-wealth-building.jpg",
    Icon: TrendingUp,
    highlights: [
      "Mutual funds, fixed deposits and tax-saving deposits",
      "First-year Demat AMC waiver*",
      "Digi Gold and guided digital investment options",
    ],
    description:
      "Brings together accessible saving and investment options that can help eligible employees plan for short- and long-term financial goals.",
  },
  {
    slug: "dedicated-banking-support",
    title: "Dedicated Banking Support",
    image: "/assets/careers/benefits/generated/dedicated-banking-support.jpg",
    Icon: Headphones,
    highlights: [
      "Relationship-manager support for eligible employees",
      "Dedicated service assistance",
      "Access to HDFC Bank branches and ATMs nationwide",
    ],
    description:
      "Provides eligible employees with assisted service channels for routine banking needs and salary-account support.",
  },
  {
    slug: "speciale-platinum",
    title: "Speciale Platinum",
    image: "/assets/careers/benefits/generated/speciale-platinum.jpg",
    Icon: Crown,
    highlights: [
      "Luxury hotel experiences worth ₹5,000",
      "₹2,500 Amazon or Flipkart benefit",
      "₹1,000 Ola or Uber voucher",
    ],
    description:
      "A premium collection of travel, shopping and mobility privileges available to qualifying employees under the programme.",
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
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const firstGroup = bankingBenefits.slice(0, 5);
  const secondGroup = bankingBenefits.slice(5, 10);
  const finalGroup = bankingBenefits.slice(10);

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
            More than a salary—eligible employees can access protection, convenient banking, lifestyle rewards, credit facilities, and wealth-building privileges through the corporate salary programme.
          </p>
        </header>

        <div className="space-y-6 px-0 sm:px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <BankingBenefitCard benefit={firstGroup[0]} isLarge />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {firstGroup.slice(1).map((benefit) => (
                <BankingBenefitCard key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>

          <div id="additional-benefits">
            {showAllBenefits && (
              <div className="animate-in space-y-6 fade-in slide-in-from-top-3 duration-500">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
                  {secondGroup.slice(1).map((benefit) => (
                    <BankingBenefitCard key={benefit.title} benefit={benefit} />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <BankingBenefitCard benefit={secondGroup[0]} isLarge />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {finalGroup.map((benefit) => (
                  <BankingBenefitCard
                    key={benefit.title}
                    benefit={benefit}
                    isLarge
                  />
                ))}
              </div>
              </div>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="button"
              aria-expanded={showAllBenefits}
              aria-controls="additional-benefits"
              onClick={() => setShowAllBenefits((current) => !current)}
              className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4"
            >
              {showAllBenefits ? "Show less" : "Show more"}
              {showAllBenefits ? (
                <ChevronUp aria-hidden="true" className="h-5 w-5" />
              ) : (
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
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
