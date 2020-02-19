import React, { Fragment, useEffect } from "react";
import { MaskedTextField } from "office-ui-fabric-react";
import { useGlobalData } from "../../../hooks/globalHook";
import { useLoginData } from "../../../hooks/loginHook";

const OTPForm = () => {
  const setLoading = useGlobalData(store => store.setLoading);
  const { errors, inputs, updateInput, callVerifyOTP } = useLoginData(
    store => ({
      errors: store.errors,
      inputs: store.inputs,
      updateInput: store.updateInput,
      callVerifyOTP: store.callVerifyOTP
    })
  );

  const maskFormat = {
    "*": /[0-9]/
  };

  useEffect(() => {
    if (
      inputs.otp &&
      inputs.otp.replace(/ /g, "").replace(/_/g, "").length === 4
    ) {
      try {
        setLoading(true);
        callVerifyOTP().then(() => {
          updateInput("otp", "");
        });
        setLoading(false);
      } catch (ex) {
        setLoading(false);
      }
    }
  }, [inputs.otp, setLoading, callVerifyOTP, updateInput]);

  return (
    <Fragment>
      <MaskedTextField
        label="Vui lòng nhập mã OTP vừa được gửi về email của bạn:"
        mask="* * * *"
        maskFormat={maskFormat}
        maskChar="_"
        value={inputs.otp}
        onChange={(_, value) => updateInput("otp", value)}
        errorMessage={(errors.otp || []).join(" | ")}
      />
    </Fragment>
  );
};

export default OTPForm;
