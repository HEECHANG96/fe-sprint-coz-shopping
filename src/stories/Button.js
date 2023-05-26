import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const changeBookmarkedData = () => {
    setIsBookmarked(!isBookmarked);
  };
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <>
      {isBookmarked ? (
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#ffea00" }}
          onClick={changeBookmarkedData}
        />
      ) : (
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#f1f2f3" }}
          onClick={changeBookmarkedData}
        />
      )}
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
