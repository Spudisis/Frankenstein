import React from "react";
import { ButtonHideSideBar, Debounce, useThrottle } from "src/components";
import { SideBar } from "src/UI";
import { Content } from "./Components";

export const LeftSideBar = () => {
  const widthLocalStorage = localStorage.getItem("widthLeftSideBar");
  const itemStorage = widthLocalStorage ? +widthLocalStorage : 250;

  const [width, setWidth] = React.useState(itemStorage);
  const [section, setSection] = React.useState(true);
  const [isDown, setIsDown] = React.useState(false);
  const [changeStatus, setChangeStatus] = React.useState(false);

  const changeRight = React.useCallback(() => {
    if (!changeStatus || !isDown) {
      width ? setWidth(0) : setWidth(250);
    }
    setChangeStatus(false);
    setIsDown(false);
  }, [width, changeStatus]);

  const handleMouseDown = React.useCallback(() => {
    setIsDown(true);
  }, []);

  const handleMouseUp = React.useCallback((e: MouseEvent) => {
    setIsDown(false);
    setChangeStatus(true);
    e.stopPropagation();
  }, []);

  const handleMove = React.useCallback((e: MouseEvent) => {
    if (e.clientX < 580 && e.clientX > 250) {
      throttledFunc(e.clientX);
    }
    if (e.clientX >= 580) {
      throttledFunc(580);
    }
    if (e.clientX <= 250) {
      throttledFunc(250);
    }
  }, []);

  const changeWidth = React.useCallback((widthSidebar: number) => {
    setWidth(widthSidebar);
    setChangeStatus(true);
  }, []);

  const throttledFunc = useThrottle(changeWidth, 100);
  const debounceFunc = Debounce(width, 1000);

  React.useEffect(() => {
    if (isDown) {
      document.body.addEventListener("mousemove", handleMove);
      document.body.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDown]);

  React.useEffect(() => {
    localStorage.setItem("widthLeftSideBar", JSON.stringify(width));
  }, [debounceFunc]);

  return (
    <SideBar width={width + "px"}>
      <ButtonHideSideBar
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        changeVisible={changeRight}
        right="-25px"
        deg={"0deg"}
      />
      <Content
        overflow={width ? "auto" : "hidden"}
        section={section}
        setSection={setSection}
      />
    </SideBar>
  );
};
