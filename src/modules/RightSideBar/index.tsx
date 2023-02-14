import React from "react";
import { ButtonHideSideBar } from "../../components";
import { SideBar } from "../../UI";
import { Content } from "./Components/Content/Content";

export const RightSideBar = () => {
  const [width, setWidth] = React.useState(350);
  const [deg, setDeg] = React.useState("0deg");
  const changeRight = () => {
    width ? setWidth(0) : setWidth(350);
    deg === "0deg" ? setDeg("180deg") : setDeg("0deg");
  };

  return (
    <SideBar width={width + "px"} right="0px">
      <ButtonHideSideBar changeVisible={changeRight} left="-40px" deg={deg} />
      <Content overflow={width ? "auto" : "hidden"} />
    </SideBar>
  );
};
