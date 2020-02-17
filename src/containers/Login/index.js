import React from "react";
import _isEmpty from "lodash.isempty";
import {
  Stack,
  TextField,
  Button,
  PrimaryButton
} from "office-ui-fabric-react";
import { LoginStyler, LoginHeader } from "./style";
import { HeaderText } from "../../styles/common";
import { secondaryColor } from "../../styles/variables";
import { useLoginData } from "../../hooks/loginHook";

const LoginPage = () => {
  const { errors, inputs, updateErrors, updateInput } = useLoginData(store => ({
    errors: store.errors,
    inputs: store.inputs,
    updateErrors: store.updateErrors,
    updateInput: store.updateInput
  }));

  const handleValidateForm = () => {};

  const handleSubmitForm = () => {
    const errorList = handleValidateForm();
    if (!_isEmpty(errorList)) {
      updateErrors(errorList);
    } else {
      console.warn("Submitting...");
    }
  };

  return (
    <LoginStyler
      tokens={{
        childrenGap: 50
      }}
    >
      <LoginHeader>M A K A [Admin]</LoginHeader>
      <TextField label="Email:" required underlined />
      <PrimaryButton color={secondaryColor} onClick={handleSubmitForm}>
        Đăng Ký/Đăng Nhập
      </PrimaryButton>
    </LoginStyler>
  );
};

export default LoginPage;
