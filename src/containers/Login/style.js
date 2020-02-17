import styled from "styled-components";
import { Stack } from "office-ui-fabric-react";
import { primaryColor, brightTextColor } from "../../styles/variables";

export const LoginStyler = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${brightTextColor};
  color: ${primaryColor};
`;

export const LoginHeader = styled.div`
  color: ${primaryColor};
  font-size: 48px;
  font-weight: bold;
`;
