import { PulseLoader } from "react-spinners";

import { Btn } from "./Button.styled";

export const Button = ({
  isActive = false,
  isLoading = false,
  btnTxt,
  onClick,
}) => {
  return (
    <Btn
      type="button"
      isActive={isActive}
      onClick={onClick}
      disabled={isLoading}
    >
      <span>{btnTxt}</span>
      {isLoading && (
        <PulseLoader
          color="currentColor"
          margin={3}
          size={3}
          speedMultiplier={0.4}
        />
      )}
    </Btn>
  );
};
