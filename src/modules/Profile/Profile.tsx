import React from "react";
import { useParams } from "react-router-dom";
import { StoreProfile } from "./store";
import { ActionUser, NamePage, PaymentPlan, UserInfo } from "./components";
import { Grid, SectionProfile } from "./Profile.styles";


export const Profile = () => {
  const { userId } = useParams();

  React.useEffect(() => {
    if (userId) StoreProfile.getUser(userId);
  }, [userId]);

  return (
    <SectionProfile>
      <NamePage />
      <Grid>
        <div>
          <UserInfo />
          <ActionUser />
        </div>
        <PaymentPlan />
      </Grid>
    </SectionProfile>
  );
};
