import styled from "styled-components";
import { transition } from "../../style/transition";
import { mediaQuery } from "../../style/breakpoints";

export const NavWrap = styled.nav`
  ul {
    display: flex;
    gap: 20px;

    ${mediaQuery("tab")} {
      gap: 80px;
    }
  }

  li {
    align-items: baseline;
  }

  a {
    width: fit-content;
    padding: 20px 10px;
    display: flex;
    gap: 40px;
    transition: ${transition(
      "letter-spacing",
      "color",
      "font-weight",
      "opacity"
    )};

    &:hover:not(.active) {
      opacity: 0.8;
    }
  }

  a.active {
    color: var(--color-btn-sec);
    letter-spacing: 2px;
    font-weight: 500;
  }
`;
