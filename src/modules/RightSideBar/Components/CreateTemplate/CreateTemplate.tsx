import { observer } from "mobx-react-lite";
import React from "react";
import App from "src/store/Application";
import { StorePictures } from "../../store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTemplateType, STATUS_LOADING } from "src/domains";
import { RESOLVER } from "./CreateTemplate.schema";
import {
  Button,
  CheckBox,
  CustomSelect,
  IconHide,
  InputText,
  Label,
  StyledForm,
  Wrapper,
} from "./CreateTemplate.styles";

import { SelectValues } from "../../RightSideBar.constant";

export const CreateTemplate = observer(() => {
  const statusOpenLocalStorage = localStorage.getItem("CreateTemplate");
  const [view, setView] = React.useState(
    statusOpenLocalStorage ? JSON.parse(statusOpenLocalStorage) : true
  );

  const changeVisibleCreateTemplate = () => {
    setView(!view);
    localStorage.setItem("CreateTemplate", JSON.stringify(!view));
  };

  const target = App.target;
  const {
    register,
    setValue,

    handleSubmit,
  } = useForm<CreateTemplateType>({
    mode: "onBlur",
    resolver: RESOLVER,
  });

  React.useEffect(() => {
    StorePictures.statusLoading = STATUS_LOADING.SUCCESS;
  }, []);

  React.useEffect(() => {
    setValue("layout", JSON.stringify(target));
  }, [setValue, target]);

  const onSubmit: SubmitHandler<CreateTemplateType> = (data) =>
    StorePictures.createTemplate(data);

  const handleChangeType = (value: string) => {
    setValue("type", value);
  };

  return (
    <>
      {target.namePrivate && (
        <Wrapper>
          <IconHide onClick={changeVisibleCreateTemplate}>
            Create template
          </IconHide>

          <StyledForm onSubmit={handleSubmit(onSubmit)} view={view}>
            <Label>
              Name template
              <InputText type="text" {...register("name")} />
            </Label>
            <Label>
              Private
              <CheckBox type="checkbox" {...register("privateStatus")} />
            </Label>
            <Label>
              Type
              <CustomSelect
                className="basic-single"
                classNamePrefix="select"
                defaultValue={SelectValues[0]}
                isClearable={false}
                name={"type"}
                options={SelectValues}
                menuPlacement={"top"}
                onChange={(e: any) => handleChangeType(e?.value || "")}
              />
            </Label>
            <Button
              disabled={StorePictures.statusLoading === STATUS_LOADING.LOADING}
            >
              Create template
            </Button>
          </StyledForm>
        </Wrapper>
      )}
    </>
  );
});
