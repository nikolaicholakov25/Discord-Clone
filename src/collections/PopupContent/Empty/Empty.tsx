import { TPopups } from "components";
import React, { RefObject, useState } from "react";

interface EmptyPopupProps {
  closePopup: (type?: TPopups) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const EmptyPopup: React.FC<EmptyPopupProps> = ({ ...props }) => {
  return null;
};
