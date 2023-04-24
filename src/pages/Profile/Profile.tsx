import React from "react";
import { useParams } from "react-router-dom";
import { Bgc, DefaultWrapper } from "src/UI";
import { Header } from "src/modules";
import { AuthStore } from "src/store/Auth";

export const Profile = () => {
  const { userId } = useParams();
  console.log(userId);

  return (
    <div>
      <Bgc>
        <Header />
        <DefaultWrapper>Profile: {userId}</DefaultWrapper>
        <button onClick={() => AuthStore.logout()}>выйти</button>
      </Bgc>
    </div>
  );
};
