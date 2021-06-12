import React, { useCallback } from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ name, label, setValue, options, value }) => {
  const handleOptionClick = useCallback(
    (value) => {
      setValue(name, value, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [name, setValue]
  );

  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((option) => (
        <label key={`radio_${name}_option_${option.value}`}>
          <input
            type="radio"
            name="importancia_salud_ocular"
            value={option.value}
            defaultChecked={value === option.value}
            onChange={(e) => handleOptionClick(e.currentTarget.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
};

RadioGroup.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
};

export { RadioGroup };
