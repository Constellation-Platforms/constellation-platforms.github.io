import React from "react";
import "tailwindcss/tailwind.css";
// import Star from "../components/Star";

function Home(){
    const features = [
        {
          title: "Unify your data",
          description: "Connect and centralize all your data sources",
          icon: "/images/chart.svg",
        },
        {
          title: "Improve operations",
          description: "Make data-driven decisions with real-time insights",
          icon: "/images/trophy.svg",
        },
        {
          title: "Enhance governance",
          description: "Ensure compliance and data quality across your organization",
          icon: "/images/book.svg",
        },
        {
          title: "Scale seamlessly",
          description: "Easily manage and expand your data infrastructure",
          icon: "/images/database.svg",
        },
        {
          title: "Faster time to value",
          description: "Rapidly deploy and start using our platform",
          icon: "/images/clock.svg",
        },
        {
          title: "Scalable for any business",
          description: "Grow with your data and business needs",
          icon: "/images/users.svg",
        },
        {
            title: "Global reach",
            description: "Access our platform from anywhere in the world",
            icon: "/images/globe.svg",
          },
          {
            title: "Real-time insights",
            description: "Analyze and visualize your data in seconds",
            icon: "/images/chart.svg",
          },
          {
            title: "Security and compliance",
            description: "Stay secure with industry-leading practices",
            icon: "/images/shield.svg",
          },
          {
            title: "Cost efficiency",
            description: "Optimize your spending with tailored solutions",
            icon: "/images/money.svg",
          },
      ];
  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#111218] dark:group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
        {/* {Array.from({ length: 15 }).map((_, index) => (
                <Star key={index} />
            ))} */}
      <div className="layout-container flex h-full flex-col">
        <div className="px-5 md:px-10 lg:px-20 xl:px-40 flex justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div>
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div
                  className="flex flex-col min-h-[320px] sm:min-h-[480px] gap-6 sm:gap-8 items-start justify-end bg-cover bg-center bg-no-repeat rounded-xl px-4 sm:px-10 pb-10"
                //   pink
                //   https://i.imgur.com/dGsdjFs.png

                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://i.imgur.com/Bp2B8fA.png')",
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                      Unlock the power of your business data with Constellation
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                      Constellation is a leader in business intelligence and analytics. Our products help businesses streamline operations, improve decision-making, and achieve scalable growth.
                    </h2>
                  </div>
                  <button className="flex items-center justify-center w-full sm:w-auto h-10 sm:h-12 px-4 sm:px-5 bg-[#f6edd5] text-black text-sm sm:text-base font-bold rounded-xl">
                    <span>Book a Consultation</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-6">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-[720px]">
                  Transform your business with Constellation
                </h1>
                <p className="text-white text-base font-normal max-w-[720px]">
                  Our cloud-based platform provides a suite of powerful tools for data integration, processing, analysis, and governance, enabling you to unlock the full potential of your business data and drive better outcomes.
                </p>
                {/* <button className="flex items-center justify-center w-full sm:w-auto h-10 sm:h-12 px-4 sm:px-5 bg-[#304fe8] text-white text-sm sm:text-base font-bold rounded-xl">
                  <span>Get a Demo</span>
                </button> */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-3 p-4 bg-[#1c1e26] border border-[#3c4053] rounded-lg">
                    <div className="text-white">
                      <img src={feature.icon}/>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">{feature.title}</h2>
                      <p className="text-[#9da2b8] text-sm font-normal leading-normal">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
              Why Constellation Platforms?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
              {[
                { title: "Faster time to value", description: "Rapidly deploy and start using our platform", icon: "Clock" },
                { title: "Scalable for any business", description: "Grow with your data and business needs", icon: "Users" },
                { title: "Global reach", description: "Access data and insights from anywhere", icon: "Globe" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col gap-3 p-4 bg-[#1c1e26] border border-[#3c4053] rounded-lg">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      data-icon={benefit.icon}
                    >
                      {/* Add corresponding SVG paths based on the icon */}
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">{benefit.title}</h2>
                    <p className="text-[#9da2b8] text-sm font-normal leading-normal">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

