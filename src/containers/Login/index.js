import React from "react";
import { Stack } from "office-ui-fabric-react";
import LoginForm from "./components/LoginForm";
import OTPForm from "./components/OTPForm";
import { LoginStyler, LoginHeader } from "./style";
import { HeaderText } from "../../styles/common";
import { primaryColor } from "../../styles/variables";
import { useLoginData } from "../../hooks/loginHook";
import { ENUM } from "../../constants";

const LoginPage = () => {
  const stage = useLoginData(store => store.stage);

  return (
    <LoginStyler>
      <Stack
        className="login-panel"
        tokens={{
          childrenGap: 40
        }}
      >
        <div
          className={["d-flex", "flex-column", "align-items-center"].join(" ")}
        >
          <LoginHeader>M A K A</LoginHeader>
          <HeaderText colorHex={primaryColor} size="sm">
            -- For Administrator --
          </HeaderText>
        </div>
        {stage === ENUM.LOGIN_FORM_STAGE.LOGIN && <LoginForm />}
        {stage === ENUM.LOGIN_FORM_STAGE.OTP && <OTPForm />}
      </Stack>
    </LoginStyler>
  );
};

export default LoginPage;
