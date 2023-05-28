import PinInput from "react-pin-input";

const OtpInput = () => {
  return (
    <PinInput
      initialValue={""}
      placeholder="-"
      length={6}
      type="numeric"
      inputMode="number"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
      }}
      inputStyle={{
        width: "72px",
        height: "72px",
        color: "#6469E4",
        fontSize: "30px",
        borderWidth: "1px",
        borderRadius: "8px",
        borderColor: "#D0D5DD",
        margin: 0,
      }}
      inputFocusStyle={{
        color: "#6469E4",
        borderColor: "#6469E4",
      }}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default OtpInput;
