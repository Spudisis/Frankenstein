import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MinHeight } from "./item.constant";

export const SkeletonItem = () => {
  return (
    <div style={{ lineHeight: 1 }}>
      <SkeletonTheme baseColor="#202020" highlightColor="#2f2f2f">
        <Skeleton count={1} borderRadius={10} height={MinHeight} />
      </SkeletonTheme>
    </div>
  );
};
