import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export default function Input({
  className,
  isCentered,
  min,
  type,
  defaultValue,
  value,
  onChange,
}) {
  const attrProps = { min, type, defaultValue, value, onChange }
  return (
    <input
      className={classnames(`input ${className}`, {
        "input--centered": isCentered,
      })}
      {...attrProps}
    />
  )
}

Input.propTypes = {
  isCentered: PropTypes.bool,
  min: PropTypes.number,
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  isCentered: false,
  min: 0,
  type: "text",
  defaultValue: 0,
  value: 0,
}
