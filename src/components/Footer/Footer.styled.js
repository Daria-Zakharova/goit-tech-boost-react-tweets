import styled from "styled-components";

export const FooterWrap = styled.footer`
  padding: 20px;
  border-top: 1px solid var(--color-accent);
  font-size: 16px;
  background-color: var(--color-btn-sec);

  p {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  a {
    font-weight: 600;
    color: var(--color-accent);
  }
`;
