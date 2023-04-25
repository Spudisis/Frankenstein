import React from "react";
import { StoreProfile } from "../../store";
import { StyledButton, StyledWrapper } from "./ActionUser.styles";
import { STATUS_LOADING } from "src/domains";
import { observer } from "mobx-react-lite";

export const ActionUser = observer(() => {
  const loading = StoreProfile.loading === STATUS_LOADING.LOADING;
  
  return (
    <StyledWrapper>
      <StyledButton disabled={loading}>Редактировать</StyledButton>
      <StyledButton
        disabled={loading}
        color={"#5e0000"}
        onClick={() => StoreProfile.logout()}
      >
        Выйти
      </StyledButton>
    </StyledWrapper>
  );
});
