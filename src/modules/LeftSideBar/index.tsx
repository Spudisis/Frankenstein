import React from "react";
import { ButtonHideSideBar } from "../../components";
import { SideBar } from "../../UI";
import { Content } from "./Components/Content/Content";

export const LeftSideBar = () => {
  const [width, setWidth] = React.useState(250);

  const changeRight = () => {
    width ? setWidth(0) : setWidth(250);
  };
  return (
    <SideBar width={width + "px"}>
      <ButtonHideSideBar
        changeVisible={changeRight}
        right="-25px"
        deg={"0deg"}
      />
      <Content overflow={width ? "auto" : "hidden"} />
    </SideBar>
  );
};
