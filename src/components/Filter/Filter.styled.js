import styled, { css } from "styled-components";
import { mediaQuery } from "../../style/breakpoints";
import { transition } from "../../style/transition";

export const SearchSelectWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;

  ${mediaQuery("tab")} {
    gap: 30px;
  }
`;

export const SearchSelect = styled.div`
  width: 150px;
  border-radius: var (--border-rad-btn);
  ${mediaQuery("tab")} {
    width: 175px;
  }
`;

export const SelectLabel = styled.span`
  color: var(--color-accent);
  ${mediaQuery("mob")} {
    display: none;
  }
`;

export const SelectHead = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 35px;
  padding: 8px 14px;
  border-radius: ${({ isOpen }) =>
    isOpen
      ? "var(--border-rad-btn) var(--border-rad-btn) 0 0"
      : "var(--border-rad-btn)"};
  text-transform: uppercase;
  font-size: 18px;
  color: var(--color-txt-btn);
  background-color: var(--color-btn-sec);
  transition: ${transition("border-radius")};

  ${mediaQuery("tab")} {
    height: 40px;
    font-size: 20px;
  }
`;

export const SelectUnfoldBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  aspect-ratio: 1;
  height: 35px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-accent);

  ${mediaQuery("tab")} {
    height: 40px;
  }

  &:hover {
    backdrop-filter: brightness(1.1);
  }

  svg {
    transition: ${transition("transform", "backdrop-filter")};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const SelectDropdown = styled.form`
  overflow: hidden;
`;

export const SelectOptionsList = styled.ul`
  position: relative;
  background-color: var(--color-btn);
  border: 1px solid var(--color-accent);
  border-radius: 0 0 var(--border-rad-btn) var(--border-rad-btn);
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: ${transition("transform")};
`;

export const SelectOptionStyled = styled.li`
  color: var(--color-txt-btn);
  label {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 35px;
    padding: 8px 14px;
    text-transform: capitalize;
    &:hover {
      background-color: var(--color-btn-sec);
    }

    ${mediaQuery("tab")} {
      height: 40px;
    }
  }
  input {
    width: 0;
    height: 0;
  }
  input:checked + label {
    font-weight: 500;
    backdrop-filter: contrast(1.3);
  }
  &:last-child {
    border-radius: 0 0 var(--border-rad-btn) var(--border-rad-btn);
  }
`;
