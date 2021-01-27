import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon: IconComponent.Function = ({ icon, ...rest }) => (
  <FontAwesomeIcon icon={icon} {...rest} />
);

export default Icon;
