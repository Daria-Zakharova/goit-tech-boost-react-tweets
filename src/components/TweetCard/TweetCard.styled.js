import styled, { css } from "styled-components";
import bgImage from "../../img/card-bg.png";
import rateBgImage from "../../img/gold-crown.png";
import { transition } from "../../style/transition";
import { mediaQuery } from "../../style/breakpoints";

export const TweetCardWrap = styled.div`
  max-width: calc(100vw - 20px);
  min-height: 460px;
  padding: 20px;

  border-radius: var(--border-rad-card);
  box-shadow: var(--shd-card);

  background-image: url(${bgImage}), var(--bg-card);
  background-repeat: no-repeat;
  background-position: top 28px center, center;

  transition: ${transition("filter")};

  ${({ variant }) =>
    variant === "rating" &&
    css`
      background-image: url(${rateBgImage}), var(--bg-rate-card);
      animation: rotate-scale-up 0.5s linear backwards;
      background-position: top 28px center, center, center;
      background-size: 60%, 120%, 120%;

      ${mediaQuery("tab")} {
        width: 380px;
      }

      @keyframes rotate-scale-up {
        0% {
          opacity: 0;
          transform: scale(0.2) rotateZ(0);
        }
        50% {
          opacity: 0.3;
          transform: scale(1.2) rotateZ(180deg);
        }
        100% {
          opacity: 1;
          transform: scale(1) rotateZ(360deg);
        }
      }
    `}

  &:hover {
    filter: brightness(1.09);
  }

  &:before {
    content: "";
    display: block;
    height: 8px;
    width: calc(100% + 40px);
    margin: 194px -20px -202px;
    box-shadow: var(--shd-separator);
    background-color: var(--color-btn);
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 136px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: var(--shd-avatar-border);

  background-color: var(--color-btn);

  img {
    border-radius: 50%;
  }
`;

export const CardTxt = styled.div`
  padding: 26px 20px;

  text-align: center;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;

  color: var(--color-txt);

  p:not(:last-child) {
    margin-bottom: 16px;
  }
`;
