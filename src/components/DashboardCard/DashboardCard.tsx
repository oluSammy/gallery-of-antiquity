import React from "react";

type props = {
  title: string;
  data: string;
  icon: React.ReactNode;
  change: string | React.ReactNode;
  color: string;
};

const DashboardCard = (props: props) => {
  return (
    <div
      className="rounded-lg lg:mt-0 mt-3 md:mr-4 text-[#1C1C1C] p-4 w-full lg:w-52"
      style={{
        backgroundColor: props.color,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-sm mt-4">{props.title}</p>
        {props.icon}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">{props.data}</p>
        <p className="text-sm">{props.change}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
