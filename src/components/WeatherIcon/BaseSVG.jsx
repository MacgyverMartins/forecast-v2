import { StyledSVG } from "./styled";

export default function BaseSVG({ children, fill }) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="140"
      height="140"
      viewBox="-3 -3 30 30"
      fill={fill}
    >
      {children}
    </StyledSVG>
  );
}
