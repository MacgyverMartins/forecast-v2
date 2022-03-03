import styled from "styled-components";

export const MainViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ForeCastView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 50%;
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  margin-top: auto;
`;
