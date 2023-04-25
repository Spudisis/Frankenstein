import React from "react";
import { useParams } from "react-router-dom";
import { StoreProfile } from "./store";
import {
  ActionUser,
  LoadingProfile,
  NotFoundPerson,
  PaymentPlan,
  UserInfo,
} from "./components";
import { Grid, SectionProfile } from "./Profile.styles";
import { AuthStore } from "src/store/Auth";
import { observer } from "mobx-react-lite";
import { STATUS_LOADING } from "src/domains";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LoadingTiers } from "./components";
export const Profile = observer(() => {
  const { userId } = useParams();

  React.useLayoutEffect(() => {
    if (userId) {
      StoreProfile.getUser(userId);
      StoreProfile.idUser = userId;
      StoreProfile.userSelf = StoreProfile.idUser
        ? AuthStore.user?.id === +StoreProfile.idUser
        : false;
    }
  }, [userId]);
  const loading = StoreProfile.loading === STATUS_LOADING.LOADING;

  if (StoreProfile.loading === STATUS_LOADING.ERROR) {
    return <NotFoundPerson />;
  }
  return (
    <SectionProfile>
      <Grid>
        <LoadingProfile loading={loading}>
          <UserInfo />
          <>{StoreProfile.userSelf && <ActionUser />}</>
        </LoadingProfile>
        <LoadingTiers loading={loading}>
          <PaymentPlan />
        </LoadingTiers>
      </Grid>
    </SectionProfile>
  );
});
