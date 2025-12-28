
import React from "react";
import IconBase from "../IconBase";

const HomeDoor = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4 12.5 12 5l8 7.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><rect x={10} y={14} rx={0.5} />
    </IconBase>
  );
};

export default HomeDoor;
