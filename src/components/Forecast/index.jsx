import styled from "styled-components";
import { theme } from "../../assets/theme";

const Fallback = styled.div`
  color: ${theme.colors.white};
  font-size: 26px;
`;

const ForecastWrapper = styled.div``;

function Forecast() {
  return <Fallback>Pick a day to see the full forecast</Fallback>;
}

export default Forecast;
