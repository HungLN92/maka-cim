import React from "react";
import styled from "styled-components";
import { smallFont, largeFont, normalFont, xLargeFont } from "./variables";

export const ColorText = styled(
  ({ bold, children, colorHex, size, ...remains }) => (
    <span {...remains}>{children}</span>
  )
)`
  ${({ colorHex }) => colorHex && `color: ${colorHex};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ size }) => {
    if (size === "sm") {
      return `font-size: ${smallFont};`;
    } else if (size === "lg") {
      return `font-size: ${largeFont};`;
    }
    return `font-size: ${smallFont};`;
  }}
`;

export const HeaderText = styled(({ children, colorHex, size, ...remains }) => (
  <div {...remains}>{children}</div>
))`
  ${({ colorHex }) => colorHex && `color: ${colorHex};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ size }) => {
    if (size === "sm") {
      return `font-size: ${normalFont};`;
    } else if (size === "lg") {
      return `font-size: ${xLargeFont};`;
    }
    return `font-size: ${largeFont};`;
  }}
`;
