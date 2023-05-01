import { Container } from "../layout/Container/Container.styled";
import { Nav } from "../Nav/Nav";
import { HeaderWrap } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <Nav />
      </Container>
    </HeaderWrap>
  );
};
