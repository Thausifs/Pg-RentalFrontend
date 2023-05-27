import * as React from "react";

type Props = {
  className: string;
  text: string;
  prefix?: object;
  suffix?: object;
  type?: any;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Buttonlink: React.FC<Props> = (props) => {
  const { className, prefix, text, onClick, suffix, loading, disabled, type } =
    props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}>
      {loading ? (
        <p>loader</p>
      ) : (
        <>
          {prefix}
          {text}
          {suffix}
        </>
      )}
    </button>
  );
};

export default Buttonlink;
