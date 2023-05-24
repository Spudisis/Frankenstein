import React from "react";
import { InputStyles, Options, PropsInput } from "../Options.types";
import Select from "react-select";

export const SelectInput = <T,>({
  value,
  onChange,
  label,
  property,
  options,
}: InputStyles<T> & PropsInput<T> & Options) => {
  const find = options.filter((elem) => elem.value === value[property]);
  return (
    <div>
      {label}
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={find[0]}
        isClearable={false}
        name={property as string}
        options={options}
        onChange={(e) => onChange(e?.value as T[keyof T], property)}
      />
    </div>
  );
};
