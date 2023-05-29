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
import { ACCEPT_FILES } from "src/constants";
import { FileUploader } from "src/components";

export const Form = observer(({ AddProject, statusLoading }: FormType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<OptionCreate>({
    mode: "onBlur",
    resolver: RESOLVER,
  });

  const loading = statusLoading === STATUS_LOADING.LOADING;

  const onSubmit: SubmitHandler<OptionCreate> = (data) => {
    const Files = data.miniature;
    console.log(Files);
    if (Files && Files.length > 0) {
      if (Files.length > 1) {
        return setError("miniature", {
          type: "length",
          message: "1 image only",
        });
      }
      const checkTypeFile = ACCEPT_FILES.every(
        (type) => Files[0].type !== type
      );
      if (checkTypeFile) {
        return setError("miniature", {
          type: "type",
          message: "wrong type image, only .png .jpg",
        });
      }
    }

    AddProject(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ProjectName register={register} errors={errors} />
      <CheckBox register={register} errors={errors} />
      <FileUploader
        register={register}
        errors={errors}
        nameProperty={"miniature"}
        watch={watch}
        acceptFiles={ACCEPT_FILES}
      />
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
