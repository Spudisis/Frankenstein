import { Authorization, SelectLanguage } from "../../modules";
import { ApplicationWrapperStyled, Bgc } from "../../UI";

export const Auth = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <SelectLanguage />
        <Authorization />
      </ApplicationWrapperStyled>
    </Bgc>
  );
};
