import { Link } from "react-router-dom";
import { Container } from "../layout/Container/Container.styled";
import { FooterWrap } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <p>
          made by{" "}
          <Link to="https://github.com/Daria-Zakharova" title="see github">
            Daria Zakharova
          </Link>
        </p>
        <p>
          <Link to="https://goit.global/">GoIt School</Link> Technical Boost
          homework
        </p>
      </Container>
    </FooterWrap>
  );
};
