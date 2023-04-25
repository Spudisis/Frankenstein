import { observer } from "mobx-react-lite";
import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { Bgc, DefaultWrapper } from "src/UI";
import { Header } from "src/modules";
import { Payment as PaymentModule } from "src/modules";
import { main } from "src/routes/urlsPages";
import { AuthStore } from "src/store/Auth";
export const Payment = observer(() => {
  const { userId } = useParams();
  const id = AuthStore.user?.id;
  if (!userId || (userId && !(id === +userId))) {
    return <Navigate to={main} replace />;
  }
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <PaymentModule />
      </DefaultWrapper>
    </Bgc>
  );
});
