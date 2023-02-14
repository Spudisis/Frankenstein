import React from "react";
import { ButtonHideSideBar } from "../../components";
import { SideBar } from "../../UI/SideBar/SideBar";
import { Content } from "./Components/Content/Content";

export const LeftSideBar = () => {
  const [width, setWidth] = React.useState(250);
  const [deg, setDeg] = React.useState("180deg");
  const changeRight = () => {
    width ? setWidth(0) : setWidth(250);
    deg === "0deg" ? setDeg("180deg") : setDeg("0deg");
  };
  return (
    <SideBar width={width + "px"}>
      <ButtonHideSideBar changeVisible={changeRight} right="-40px" deg={deg} />
      <Content overflow={width ? "auto" : "hidden"} />
    </SideBar>
  );
};
