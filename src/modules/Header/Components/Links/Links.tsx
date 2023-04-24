import React from "react";
import { Link } from "react-router-dom";
import { BUILD, PROFILE } from "src/routes/urlsPages";
import { AuthStore } from "src/store/Auth";
import { Button } from "../ButtonHead/ButtonHead";
import { observer } from "mobx-react-lite";

export const Links = observer(() => {
  return (
    <>
      <Link to={BUILD}>
        <Button text={"Build"} />
      </Link>
      <Link to={PROFILE + AuthStore.user.id}>
        <Button text={"Profile"} />
      </Link>
    </>
  );
});
