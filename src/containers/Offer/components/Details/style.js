import styled from "styled-components";
import {
  mediumScrWidth,
  greenColor,
  redColor,
  whiteColor,
  primaryColor,
  largeFont
} from "../../../../styles/variables";
import { lightenDarkenColor } from "../../../../utils/style";
import { Modal } from "office-ui-fabric-react";

export const DetailsStyler = styled.div`
  .details-container {
    margin: 20px 0px;
    .details-info-row {
      display: flex;
      justify-content: space-between;
    }
  }
  .winner-choices {
    .ms-ChoiceField {
      margin-right: 0px;
      width: 100%;
      &.buyer {
        background-color: ${greenColor};
        color: ${whiteColor};
      }
      &.seller {
        background-color: ${redColor};
        color: ${whiteColor};
      }
      .ms-ChoiceField-wrapper {
        width: 100%;
        .ms-ChoiceField-labelWrapper {
          max-width: 100%;
        }
      }
    }
  }
  .chatbox {
    display: none;
  }
  .chatbox-toggler {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 30px;
    border: none;
    border-radius: 50%;
    background-color: ${primaryColor};
    box-shadow: 0px 2px 3px 1px ${lightenDarkenColor(primaryColor, 60)};
    i {
      color: ${whiteColor};
      font-size: ${largeFont};
    }
  }
  @media (min-width: ${mediumScrWidth}) {
    .details-container {
      display: flex;
      > * {
        padding: 10px 20px;
        width: 50%;
      }
    }
    .winner-choices {
      .ms-ChoiceField {
        margin-right: 4px;
        width: calc(50% - 4px);
        .ms-ChoiceField-wrapper {
          width: 100%;
          .ms-ChoiceField-labelWrapper {
            max-width: 100%;
          }
        }
      }
    }
    .chatbox {
      display: block;
      width: 50%;
      height: 60vh;
      iframe {
        height: 80vh;
      }
    }
    .chatbox-toggler {
      display: none;
    }
  }
`;

export const DialogModalStyler = styled(Modal)`
  .ms-Dialog-main {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    .ms-Modal-scrollableContent {
      display: flex;
      flex-direction: column;
      height: 100%;
      .modal-chatbox {
        flex-grow: 1;
      }
    }
  }
  @media (min-width: ${mediumScrWidth}) {
    display: none;
  }
`;
