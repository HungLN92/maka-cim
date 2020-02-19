import styled from "styled-components";
import { mediumScrWidth } from "../../styles/variables";

export const AppStyler = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  @media (min-width: ${mediumScrWidth}) {
    margin-left: 15vw;
    width: 70vw;
  }
`;

export const PageContentStyler = styled.div`
  padding: 30px;
  width: 100%;
  @media (min-width: ${mediumScrWidth}) {
    padding-top: 70px;
    padding-left: 90px;
  }
`;
