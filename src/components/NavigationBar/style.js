import React from "react";
import styled from "styled-components";
import {
  primaryColor,
  whiteColor,
  largeFont,
  mediumScrWidth,
  normalFont,
  smallScrWidth
} from "../../styles/variables";

export const NavigationBarStyler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${primaryColor};
  .sidebar-toggler {
    margin-left: 10px;
    padding: 0px;
    width: 50px;
    height: 50px;
    min-width: 0px;
    visibility: visible;
  }
  .profile-btn {
    padding: 0px;
    min-width: 60px;
    color: ${whiteColor};
    &:hover {
      color: ${whiteColor};
    }
    svg {
      width: 30px;
      height: auto;
    }
    i {
      color: ${whiteColor};
    }
  }
  @media (min-width: ${mediumScrWidth}) {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    margin-left: 15vw;
    width: 70vw;
    .sidebar-toggler {
      padding: 10px 15px;
      visibility: hidden;
    }
    .profile-btn {
      padding: 10px 15px;
    }
  }
`;

export const LogoStyler = styled.div`
  color: ${whiteColor};
  font-size: ${largeFont};
  font-weight: bold;
`;

export const MobileSideBarStyler = styled(
  ({ children, isOpen, ...remains }) => <div {...remains}>{children}</div>
)`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
  background-color: ${primaryColor};
  color: ${whiteColor};
  overflow: hidden;
  transition: 0.3s ease-out height;
  .menu-item {
    display: flex;
    align-items: center;
    position: relative;
    float: left;
    margin: 10px;
    padding: 10px 20px;
    width: calc(100% - 20px);
    border: 2px solid ${whiteColor};
    font-size: ${normalFont};
    font-weight: bold;
    cursor: pointer;
    i {
      margin-right: 30px;
      transform: scale(2);
    }
  }
  @media (min-width: ${smallScrWidth}) {
    height: ${({ isOpen }) => (isOpen ? "120px" : "0px")};
    .menu-item {
      margin: 20px;
      padding: 20px;
      width: calc((100vw / 2) - 50px);
    }
  }
  @media (min-width: ${mediumScrWidth}) {
    display: none;
  }
`;
