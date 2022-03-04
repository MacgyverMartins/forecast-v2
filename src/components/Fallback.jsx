import styled from "styled-components";
import { theme } from "../assets/theme";

const FallbackMsg = styled.div`
  color: ${theme.colors.white};
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Fallback() {
  return <FallbackMsg>Pick a day to see the full forecast</FallbackMsg>;
}

export default Fallback;
