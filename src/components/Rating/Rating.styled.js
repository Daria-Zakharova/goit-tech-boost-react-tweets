import styled from "styled-components";
import bgImage from "../../img/bg.png";
import { mediaQuery } from "../../style/breakpoints";

export const RatingWrap = styled.div`
  padding: 20px;
  background-image: var(--bg-rating), url(${bgImage});

  ${mediaQuery("tab")} {
    padding: 100px;
  }
`;