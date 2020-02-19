import styled from "styled-components";
import {
  brightTextColor,
  blackColor,
  mediumScrWidth
} from "../../styles/variables";

export const SideBarStyler = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 70px;
  height: 100vh;
  padding: 70px 10px 10px 10px;
  background-color: ${brightTextColor};
  i {
    padding-top: 10px;
    padding-left: 10px;
    color: ${blackColor};
    transform: scale(2.5);
    cursor: pointer;
  }
  @media (min-width: ${mediumScrWidth}) {
    display: block;
  }
`;
