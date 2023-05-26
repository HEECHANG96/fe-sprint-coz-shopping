import React from "react";

/**
 * Primary UI component for user interaction
 */
export const CircleMenu = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
