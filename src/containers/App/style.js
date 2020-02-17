import styled from "styled-components";
import { mediumScrWidth } from "../../styles/variables";

export const AppStyler = styled.div`
  position: relative;
  max-width: 100%;
  @media (min-width: ${mediumScrWidth}) {
    margin-left: 15vw;
    width: 70vw;
  }
`;

export const PageContentStyler = styled.div`
  margin-top: 60px;
  width: 100%;
`;
