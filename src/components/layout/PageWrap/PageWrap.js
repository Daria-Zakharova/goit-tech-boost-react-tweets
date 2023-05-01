import { Page, PageTitle } from "./PageWrap.styled";

export const PageWrap = ({ titleText, children }) => {
  return (
    <Page>
      {titleText && <PageTitle>{titleText}</PageTitle>}
      {children}
    </Page>
  );
};
