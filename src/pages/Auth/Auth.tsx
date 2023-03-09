import { Authorization } from "../../modules";
import { ApplicationWrapperStyled, Bgc } from "../../UI";

export const Auth = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <Authorization />
      </ApplicationWrapperStyled>
    </Bgc>
  );
};
