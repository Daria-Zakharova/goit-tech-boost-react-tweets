import { PuffLoader } from "react-spinners";
import { LoaderText, LoaderWrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrap>
      <PuffLoader speedMultiplier={0.9} color="var(--color-accent)" />
      <LoaderText> Loading...</LoaderText>
    </LoaderWrap>
  );
};
