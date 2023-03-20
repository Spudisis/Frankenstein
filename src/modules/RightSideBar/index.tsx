import React from "react";
import { ButtonHideSideBar } from "../../components";
import { SideBar } from "../../UI";
import { Content } from "./Components/Content/Content";

export const RightSideBar = () => {
  const [width, setWidth] = React.useState(350);

  const changeRight = () => {
    width ? setWidth(0) : setWidth(350);
  };

  return (
    <SideBar width={width + "px"} right="0px">
      <ButtonHideSideBar
        changeVisible={changeRight}
        left="-25px"
        deg={"180deg"}
      />
      <Content overflow={width ? "auto" : "hidden"} />
    </SideBar>
  );
};
