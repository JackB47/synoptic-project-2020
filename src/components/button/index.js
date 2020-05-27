import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export default function Button({
  isRound,
  children,
  disabled,
  variant,
  type,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classnames("button", `button--${variant}`, {
        "button--round": isRound,
        "button--disabled": disabled,
      })}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  disabled: PropTypes.bool,
  isRound: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  isRound: false,
  type: "button",
  variant: "default",
}
