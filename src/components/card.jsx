import React, { useEffect, useRef, useState } from "react";
import ReportCardItem from "./items/reportCardItem";
import { SiGoogleanalytics } from "react-icons/si";

const colors = [
  "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
  "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
  "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
  "linear-gradient(0deg, rgba(255,143,0,1) 0%, rgba(255,201,127,1) 100%)",
];

export default function Card() {
  const elementRef = useRef(null);
  const [width, setWidth] = useState("grid-cols-4");

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current.offsetWidth < 900) {
        setWidth("grid-cols-3");
      } else if (elementRef.current.offsetWidth > 900) {
        setWidth("grid-cols-4");
      } else if (elementRef.current.offsetWidth < 700) {
        setWidth("grid-cols-2");
      } else if (elementRef.current.offsetWidth > 700) {
        setWidth("grid-cols-3");
      }
    };

    console.log(elementRef.current.offsetWidth);

    handleResize(); // ilk o'lchamini olish
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={`grid ${width} mt-6 gap-4`} ref={elementRef}>
      <ReportCardItem
        icon={<SiGoogleanalytics size={25} />}
        reportName={"Today's Users"}
        amount={2300}
        color={colors[0]}
        date={"last-update"}
      />
      <ReportCardItem
        icon={<SiGoogleanalytics size={25} />}
        reportName={"Today's Users"}
        amount={2300}
        color={colors[1]}
        date={"last-update"}
      />
      <ReportCardItem
        icon={<SiGoogleanalytics size={25} />}
        reportName={"Today's Users"}
        amount={2300}
        color={colors[2]}
        date={"last-update"}
      />
      <ReportCardItem
        icon={<SiGoogleanalytics size={25} />}
        reportName={"Today's Users"}
        amount={2300}
        color={colors[3]}
        date={"last-update"}
      />
    </div>
  );
}
