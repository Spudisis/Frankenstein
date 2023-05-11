import React from "react";
import { StoreProfile } from "../../store";
import { StyledButton, StyledWrapper } from "./ActionUser.styles";
import { STATUS_LOADING } from "src/domains";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CHANGE_PROFILE } from "src/routes/urlsPages";

export const ActionUser = observer(() => {
  const loading = StoreProfile.loading === STATUS_LOADING.LOADING;

  return (
    <StyledWrapper>
      <Link to={CHANGE_PROFILE}>
        <StyledButton disabled={loading}>Редактировать</StyledButton>
      </Link>
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
