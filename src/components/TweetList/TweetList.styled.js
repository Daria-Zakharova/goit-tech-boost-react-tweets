import styled from "styled-components";
import { mediaQuery } from "../../style/breakpoints";

export const TweetListWrap = styled.ul`
  margin-bottom: 50px;
  li {
    max-width: 380px;
    ${mediaQuery("mob")} {
      margin: 0 auto;

      &:not(:last-child) {
        margin-bottom: 48px;
      }
    }
    ${mediaQuery("tab")} {
      flex-basis: calc((100% - 48px) / 2);
    }
    ${mediaQuery("desk")} {
      flex-basis: calc((100% - (48px * 2)) / 3);
    }
  }

  ${mediaQuery("tab")} {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
  }
`;
