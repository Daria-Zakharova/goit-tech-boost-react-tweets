import { Outlet } from "react-router-dom";
import { Header } from "../../Header/Header";
import { Container } from "../Container/Container.styled";
import { Footer } from "../../Footer/Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
