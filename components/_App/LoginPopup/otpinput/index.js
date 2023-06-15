import PinInput from "react-pin-input";

const OtpInput = ({ fn }) => {
  

 
  return (
    <PinInput
      initialValue={""}
      placeholder="-"
      length={6}
      type="string"
      onChange={fn}
      // inputMode="number"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        // textTransform: 'unset'
        
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
                textTransform: 'lowercase'
      }}
      inputFocusStyle={{
        color: "#6469E4",
        borderColor: "#6469E4",
           textTransform: 'none'
      }}
      // autoSelect={true}
      
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default OtpInput;
