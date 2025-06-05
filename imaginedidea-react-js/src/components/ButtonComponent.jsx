import PropTypes from "prop-types";

const Button = ({ text, color, disabled }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "gray",
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
