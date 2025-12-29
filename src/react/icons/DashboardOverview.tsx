
import React from "react";
import IconBase from "../IconBase";

const DashboardOverview = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase viewBox="0 0 64 64" {...props}>
      <rect x={4.5} y={4.5} width={55} height={55} rx={7.5} stroke="currentColor" fill="none" /><path stroke="currentColor" d="M32.5 4v28M4 31.5h55" fill="none" />
    </IconBase>
  );
};

export default DashboardOverview;
