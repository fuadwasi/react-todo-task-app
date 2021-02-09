import React from "react";
import PropTypes from "prop-types";
const onClick = (e) => {
  // console.log("click")
};
const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
        className="btn"
      >
        {props.text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Default",
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
