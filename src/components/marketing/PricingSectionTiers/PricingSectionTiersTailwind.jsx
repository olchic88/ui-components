import { useState } from "react";

export default function PricingSectionTiersTailwind({
  supportingText,
  title,
  subtitle,
  pricingSectionTiersData,
  plan,
}) {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [activePlan, setActivePlan] = useState("standard");

  function formatPrice(amount, currency, fractionDigits = 2) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: fractionDigits,
    }).format(amount);
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] p-4">
      <div
        className="flex flex-col gap-10
        px-3 py-12
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]

        md:py-16 md:px-4
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        [@media(min-width:90rem)]:p-[96px]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md"
      >
        <div className="flex flex-col gap-3 w-full">
          <p className="text-center text-base font-semibold text-[var(--color-brand-primary)]">
            {supportingText}
          </p>
          <div className="flex flex-col gap-5">
            <h3
              className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl"
            >
              {title}
            </h3>
            <p
              className="text-center text-lg font-normal text-[var(--color-secondary)]
              md:text-xl"
            >
              {subtitle}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center gap-12
        md:gap-16"
        >
          {/* segmented controls / segmented buttons */}
          <div
            className="flex justify-center gap-4 w-full
          md:gap-8"
          >
            {["monthly", "annually"].map((period) => {
              return (
                <button
                  key={period}
                  className={`inline-flex items-center justify-center 
                    rounded-sm !font-medium w-full
                    outline-none
                    transition-colors transition-shadow duration-300
                    focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]
                    
                    h-[44px] px-[15px] py-[9px] text-base

                    disabled:bg-[var(--bg-disabled)] disabled:text-[var(--color-disabled)] disabled:shadow-none disabled:shadow-none
                    
                    border-[0.5px] border-[#e6e6e6]
                    text-[var(--color-primary)] bg-[var(--bg-primary)] 
                    shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]

                    hover:bg-[var(--bg-primary-hover)]
                    hover:border
                    hover:border-[#e6e6e6]

                    focus:bg-[var(--bg-primary-hover)]
                    focus:border
                    focus:border-[#e6e6e6]
                    focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]

                   flex-1

                   md:flex-none md:w-[140px]
                    ${
                      billingPeriod === period
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-secondary)] border-[0.5px] border-white shadow-none bg-transparent"
                    }`}
                  aria-pressed={billingPeriod === period}
                  onClick={() => setBillingPeriod(period)}
                >
                  {period === "monthly" ? "Monthly" : "Annually"}
                </button>
              );
            })}
          </div>
          <div
            className="grid grid-cols-4 gap-8 w-full
          md:grid-cols-6
          md:landscape:grid-cols-12"
          >
            {pricingSectionTiersData[billingPeriod].map((tier) => {
              const planMeta = plan[tier.plan];
              return (
                <div
                  key={tier.plan}
                  className={`col-span-4 p-[15px] rounded-lg
                    bg-[var(--bg-primary)] 
                    flex flex-col gap-8
                ${
                  activePlan === tier.plan
                    ? "border border-[var(--border-brand-solid)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                    : "border border-[var(--border-primary)] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                }
                    md:col-span-6
                    md:min-h-[532px]
                    md:p-[31px]
                    md:landscape:col-span-4
                    
                    [@media(min-width:90rem)]:min-h-[676px]`}
                  onClick={() => setActivePlan(tier.plan)}
                >
                  {tier.popular && (
                    <p
                      className="h-[60px] py-4 mt-[-15px] mr-[-15px] mb-[0px] ml-[-15px]
                  rounded-t-lg rounded-r-lg text-center text-xl text-[var(--color-brand-primary)] font-bold
                  bg-[var(--bg-brand-subtle)]
                  md:h-15 md:mt-[-31px] md:mr-[-31px] md:mb-[0px] md:ml-[-31px]"
                    >
                      Most popular
                    </p>
                  )}
                  <div className="flex flex-col gap-2 text-[var(--color-primary)] text-base font-normal">
                    <h4 className="text-2xl font-semibold">{planMeta.title}</h4>
                    <p>{planMeta.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 text-base font-normal">
                    <p
                      className={`${
                        activePlan === tier.plan
                          ? "text-[var(--color-brand-primary)]"
                          : ""
                      }`}
                    >
                      <span
                        className={`${
                          activePlan === tier.plan
                            ? "text-[var(--color-brand-primary)]"
                            : ""
                        } text-5xl font-semibold`}
                      >
                        {formatPrice(tier.price, tier.currency, 2)}
                      </span>{" "}
                      / month
                    </p>
                    <p className="text-[var(--color-secondary)]">
                      {billingPeriod === "monthly"
                        ? "Billed monthly"
                        : `Billed annually (${formatPrice(
                            tier.price * 12,
                            tier.currency,
                            0
                          )})`}
                    </p>
                  </div>
                  <ul
                    className="flex flex-col gap-5 flex-1
                  list-none p-0
                  text-base font-normal
                  text-[var(--color-secondary)]"
                  >
                    {planMeta.features.map((feature) => {
                      return (
                        <li className="flex items-center gap-3" key={feature}>
                          <svg
                            className="flex-shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                              fill="#EEF2FF"
                            />
                            <path
                              d="M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z"
                              fill="#6366F1"
                              stroke="#6366F1"
                            />
                          </svg>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`inline-flex items-center justify-center 
                    rounded-sm !font-medium w-full
                    outline-none
                    transition-colors transition-shadow duration-300
                    focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]

                     h-[48px] px-5 py-3 text-base

                    disabled:bg-[var(--bg-disabled)] disabled:text-[var(--color-disabled)] disabled:shadow-none disabled:shadow-none

                    ${
                      activePlan === tier.plan
                        ? `text-[var(--color-primary-invert)] bg-[var(--bg-brand-primary)]
                        shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]
                        hover:bg-[var(--bg-brand-primary-emphasize)]
                        focus:bg-[var(--bg-brand-primary-emphasize)]`
                        : `border-[0.5px] border-[#e6e6e6]
                        text-[var(--color-primary)] bg-[var(--bg-primary)] 
                        shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]
                    
                        hover:bg-[var(--bg-primary-hover)]
                        hover:border
                        hover:border-[#e6e6e6]

                        focus:bg-[var(--bg-primary-hover)]
                        focus:border
                        focus:border-[#e6e6e6]
                        focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]`
                    }
                    `}
                  >
                    Buy now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
