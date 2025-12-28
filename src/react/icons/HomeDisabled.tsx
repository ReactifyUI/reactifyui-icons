
import React from "react";
import IconBase from "../IconBase";

const HomeDisabled = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase {...props}>
      <path strokeDasharray="3 2" d="m4 12 8-7 8 7v7a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />
    </IconBase>
  );
};

export default HomeDisabled;
