import { NavLink } from "react-router-dom";
import { NavWrap } from "./Nav.styled";
import logo from "../../img/bg.png";

export const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <NavLink to="/goit-tech-boost-react-tweets/" end>
            <img src={logo} alt="logo" style={{ maxHeight: "30px" }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/goit-tech-boost-react-tweets/tweets/">Tweets</NavLink>
        </li>
      </ul>
    </NavWrap>
  );
};
