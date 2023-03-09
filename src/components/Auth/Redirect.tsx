import { observer } from "mobx-react-lite";

import { CheckAuthOrRegP, EmptyButton, WrapperAuth } from "../../UI";

import { useNavigate } from "react-router-dom";
import { Authorization, Registration } from "../../routes";
export enum FormType {
  "Auth",
  "Registration",
}

type Props = {
  text: string;
  textButton: string;
  Form: FormType;
};

export const RedirectToAuth = observer(({ text, textButton, Form }: Props) => {
  const navigate = useNavigate();

  return (
    <WrapperAuth>
      <CheckAuthOrRegP>
        <>
          {text}
          <EmptyButton
            fontSize="inherit"
            redirect
            onClick={() =>
              navigate(Form === FormType.Auth ? Registration : Authorization)
            }
          >
            <>{textButton}</>
          </EmptyButton>
        </>
      </CheckAuthOrRegP>
    </WrapperAuth>
  );
});
