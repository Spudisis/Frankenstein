import React from "react";
import { InputStyles, Options, PropsInput } from "../Options.types";
import Select from "react-select";
import { StyledComponent, StyledSelect } from "./SelectInput.styles";
export const SelectInput = <T,>({
  value,
  onChange,
  label,
  property,
  options,
}: InputStyles<T> & PropsInput<T> & Options) => {
  const find = options.filter((elem) => elem.value === value[property]);
  return (
    <StyledComponent>
      {label}
      <StyledSelect>
        <Select
        
          className="basic-single"
          classNamePrefix="select"
          defaultValue={find[0]}
          isClearable={false}
          name={property as string}
          options={options}
          onChange={(e) => onChange(e?.value as T[keyof T], property)}
        />{" "}
      </StyledSelect>
    </StyledComponent>
  );
};
