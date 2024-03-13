import React from "react";

export default function ReportCardItem({
  icon,
  reportName,
  amount,
  date,
  color,
}) {
  return (
    <article className="bg-white shadow-md h-full p-4 rounded-lg">
      <div className="flex flex-rows justify-between">
        <div
          className="w-16 h-16 mt-[-35px] flex justify-center items-center text-white rounded-lg"
          style={{ background: color }}
        >
          {icon}
        </div>
        <div className="flex flex-col font-sans gap-2 mb-4 items-end">
          <h3 className="font-light text-gray-500">{reportName}</h3>
          <h3 className="font-bold  text-2xl">{amount}</h3>
        </div>
      </div>
      <div className="w-full bg-gray-700 h-px"></div>
      <p className="font-sans text-gray-500">{date}</p>
    </article>
  );
}
