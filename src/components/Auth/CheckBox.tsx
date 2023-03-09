import React from "react";
import { CustomCheckBox, ErrorLabel } from "../../UI";
import { PropsEmailInput } from "./Email";

export const CheckBox = ({ register, errors }: PropsEmailInput) => {
  return (
    <CustomCheckBox error={errors.checkBox?.message ? true : false}>
      <>
        <label title="Согласие на обработку личных данных">
          <input
            aria-invalid={errors.checkBox?.type ? true : false}
            type="checkbox"
            {...register("checkBox")}
            
          />
          <span>Согласен на обработку личных данных</span>
        </label>
        {errors.checkBox?.message && (
          <ErrorLabel>{errors.checkBox?.message}</ErrorLabel>
        )}
      </>
    </CustomCheckBox>
  );
};
