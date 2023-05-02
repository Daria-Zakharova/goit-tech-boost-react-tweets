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
    <Route path="/" element={<SharedLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Route>
  ),
  { basename: "/goit-tech-boost-react-tweets" }
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
