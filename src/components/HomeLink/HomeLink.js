import { Link } from "react-router-dom";
import { ButtonHome } from "./HomeLink.styled";
import { IoHomeOutline, IoArrowBackOutline } from "react-icons/io5";

export const HomeLink = () => {
  return (
    <ButtonHome as={Link} to="/">
      <IoHomeOutline />
      <IoArrowBackOutline />
    </ButtonHome>
  );
};
