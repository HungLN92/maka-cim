import styled from "styled-components";
import { blackColor } from "../../styles/variables";
import { lightenDarkenColor } from "../../utils/style";

export const OfferPageStyler = styled.div`
  .status-filter-bar {
    margin-top: 50px;
    // border-bottom: 1px solid ${lightenDarkenColor(blackColor, 180)};
    .ms-CommandBar {
      padding: 0px;
      height: 25px;
      .ms-OverflowSet-item {
        height: 25px;
        &:not(:last-child) {
          border-right:1px solid ${lightenDarkenColor(blackColor, 180)};
        }
      }
    }
  }
`;
