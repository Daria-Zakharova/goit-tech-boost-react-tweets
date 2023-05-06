import styled from "styled-components";
import { mediaQuery } from "../../style/breakpoints";

export const ScrollTop = styled.button`
  display: none;

  ${mediaQuery("tab")} {
    position: sticky;
    bottom: 50px;

    margin: -50px 40px auto auto;
    padding: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid currentColor;
    background: #fff;
    color: var(--color-accent);
    animation: appear 350ms linear;

    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
