import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormWrapper } from "./Form.styles";
import { FormType } from "./Form.types";
import { OptionCreate, STATUS_LOADING } from "src/domains";
import { RESOLVER } from "./Form.schema";
import { CheckBox } from "../CheckBox";
import { ProjectName } from "../ProjectName";
import { DefaultButton } from "src/UI";
import { observer } from "mobx-react-lite";
export const Form = observer(({ AddProject, statusLoading }: FormType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<OptionCreate>({
    mode: "onBlur",
    resolver: RESOLVER,
  });

  const loading = statusLoading === STATUS_LOADING.LOADING;

  const onSubmit: SubmitHandler<OptionCreate> = (data) => AddProject(data);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ProjectName register={register} errors={errors} />
      <CheckBox register={register} errors={errors} />
      <DefaultButton
        text="Add"
        padding="5px 15px"
        fontSize={24}
        margin="0"
        padding1800="5px 15px"
        disabled={loading}
      />
    </FormWrapper>
  );
});
