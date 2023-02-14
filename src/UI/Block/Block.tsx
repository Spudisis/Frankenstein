import React from "react";
import { ChildrenProp } from "../ChildrenProp";
import s from './Block.module.scss'
export const Block = ({ children }: ChildrenProp) => {
  return <div className={s.block}>{children}</div>;
};
