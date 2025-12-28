
import React from "react";
import IconBase from "../IconBase";

const HomeSimple = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5 12 12 6l7 6v7H5z" fill="none" stroke="currentColor" />
    </IconBase>
  );
};

export default HomeSimple;
