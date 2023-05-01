import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";
import { SharedLayout } from "./layout/SharedLayout/SharedLayout";
import { GlobalStyle } from "../style/global-style";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/goit-tech-boost-react-tweets/" element={<SharedLayout />}>
      <Route path="/goit-tech-boost-react-tweets/" element={<Home />} />
      <Route path="/goit-tech-boost-react-tweets/tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
