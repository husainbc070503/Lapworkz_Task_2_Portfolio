import { Typography } from "@mui/material";
import React from "react";

const SectionHeading = ({ title, mb }) => {
  return (
    <Typography fontSize={44} className="Typography section-heading" mb={mb}>
      {title}
    </Typography>
  );
};

export default SectionHeading;
