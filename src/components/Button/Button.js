import { Btn } from "./Button.styled";

export const Button = ({ isActive = false, btnTxt, onClick }) => {
  return (
    <Btn type="button" isActive={isActive} onClick={onClick}>
      {btnTxt}
    </Btn>
  );
};
