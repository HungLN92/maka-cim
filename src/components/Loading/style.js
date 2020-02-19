import React from "react";
import styled from "styled-components";
import { blackColor, textColor } from "../../styles/variables";

export const LoadingStyler = styled(({ children, loading, ...remains }) => (
  <div {...remains}>{children}</div>
))`
  display: ${({ loading }) => (loading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: ${blackColor};
  opacity: 0.6;
  .spinner {
    width: 70px;
    height: 70px;
    color: ${textColor};
  }
`;
