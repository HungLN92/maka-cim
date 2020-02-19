import styled from "styled-components";
import {
  primaryColor,
  normalDepth,
  largeScrWidth
} from "../../styles/variables";

export const LoginStyler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .login-panel {
    margin: 20px;
    padding: 35px;
    width: 80%;
    box-shadow: ${normalDepth};
  }
  @media (min-width: ${largeScrWidth}) {
    .login-panel {
      width: 100%;
      max-width: 600px;
    }
  }
`;

export const LoginHeader = styled.div`
  margin-bottom: 15px;
  color: ${primaryColor};
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;
