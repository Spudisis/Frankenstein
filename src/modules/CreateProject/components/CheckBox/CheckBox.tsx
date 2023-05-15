import React from "react";
import { PropsInputs } from "../Form";
import { CustomCheckBox, ErrorLabel } from "src/UI";

export const CheckBox = ({ register, errors }: PropsInputs) => {
  return (
    <CustomCheckBox error={errors.statusAccess?.message ? true : false}>
      <>
        <label title="Открытый проект">
          <input
            aria-invalid={errors.statusAccess?.type ? true : false}
            type="checkbox"
            {...register("statusAccess")}
          />
          <span>Открытый проект</span>
        </label>
        {errors.statusAccess?.message && (
          <ErrorLabel>{errors.statusAccess?.message}</ErrorLabel>
        )}
      </>
    </CustomCheckBox>
  );
};
