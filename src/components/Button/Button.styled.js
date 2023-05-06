import styled from "styled-components";
import { transition } from "../../style/transition";

export const Btn = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 196px;
  height: 50px;
  margin: 0 auto;
  padding: 14px;

  font-weight: 600;
  text-transform: uppercase;

  border-radius: var(--border-rad-btn);
  box-shadow: var(--shd-btn);

  color: var(--color-txt-btn);
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-btn-sec)" : "var(--color-btn)"};

  transition: ${transition("box-shadow", "filter")};

  &:hover {
    box-shadow: var(--shd-btn-hover);
    filter: saturate(2);
  }
`;
