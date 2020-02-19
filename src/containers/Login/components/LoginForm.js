import React, { Fragment } from "react";
import _isEmpty from "lodash.isempty";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
import { useLoginData } from "../../../hooks/loginHook";
import { isValidEmail } from "../../../utils/validation";
import { secondaryColor } from "../../../styles/variables";
import { useGlobalData } from "../../../hooks/globalHook";

const LoginForm = () => {
  const { errors, inputs, updateErrors, updateInput, callLogin } = useLoginData(
    store => ({
      errors: store.errors,
      inputs: store.inputs,
      updateErrors: store.updateErrors,
      updateInput: store.updateInput,
      updateStage: store.updateStage,
      callLogin: store.callLogin
    })
  );
  const setLoading = useGlobalData(store => store.setLoading);

  const handleValidateForm = () => {
    const errorList = {};

    if (!inputs.email) {
      errorList.email = ["Vui lòng nhập địa chỉ email"];
    }
    if (inputs.email && !isValidEmail(inputs.email)) {
      errorList.email = ["Địa chỉ email không hợp lệ"];
    }

    return errorList;
  };

  const handleSubmitForm = () => {
    const errorList = handleValidateForm();

    updateErrors(errorList);
    if (_isEmpty(errorList)) {
      try {
        setLoading(true);
        callLogin();
        setLoading(false);
      } catch (ex) {
        setLoading(false);
      }
    }
  };

  return (
    <Fragment>
      <TextField
        label="Email:"
        required
        placeholder="vd: <tên_của_bạn>@tomochain.com"
        errorMessage={(errors.email || []).join(" | ")}
        onChange={(_, value) => updateInput("email", value)}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            handleSubmitForm();
          }
        }}
        value={inputs.email}
      />
      <PrimaryButton color={secondaryColor} onClick={handleSubmitForm}>
        Đăng Ký/Đăng Nhập
      </PrimaryButton>
    </Fragment>
  );
};

export default LoginForm;
