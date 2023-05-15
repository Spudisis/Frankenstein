import { FieldErrors, UseFormRegister } from "react-hook-form";
import { OptionCreate, STATUS_LOADING } from "src/domains";

export type FormType = {
  AddProject: ({ projectName, statusAccess }: OptionCreate) => void;
  statusLoading: STATUS_LOADING;
};
export type PropsInputs = {
  register: UseFormRegister<OptionCreate>;
  errors: FieldErrors<OptionCreate>;
};
