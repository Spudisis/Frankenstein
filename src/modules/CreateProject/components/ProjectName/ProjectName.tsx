import React from "react";
import { PropsInputs } from "../Form";
import { AuthInput, ErrorLabel } from "src/UI";

export const ProjectName = ({ register, errors }: PropsInputs) => {
  const bool = errors.projectName?.message ? true : false;

  return (
    <AuthInput error={bool}>
      <label>
        Project name
        <input
          aria-invalid={bool}
          type="text"
          {...register("projectName")}
          placeholder="Shop"
        />
      </label>

      <>
        {errors.projectName?.message && (
          <ErrorLabel>{errors.projectName?.message}</ErrorLabel>
        )}
      </>
    </AuthInput>
  );
};
