import styled from "styled-components";
import { lightenDarkenColor } from "../../utils/style";
import { blackColor } from "../../styles/variables";

export const UserPageStyler = styled.div`
  .user-action-bar {
    margin-top: 50px;
    .ms-CommandBar {
      padding: 0px;
      .ms-OverflowSet-item {
        // &:not(:last-child) {
        border-bottom: 1px solid ${lightenDarkenColor(blackColor, 180)};
        // }
      }
    }
  }
`;
