import React from "react";
import { ChildrenProp } from "../../../UI/ChildrenProp";
import s from "./Header.module.scss";
export const HeaderWrapper = ({ children }: ChildrenProp) => {
  return <header className={s.header}>{children}</header>;
};
