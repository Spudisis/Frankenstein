import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { TypeLoad } from "./LoadingProfile.types";

export const LoadingTiers = ({ children, loading }: TypeLoad) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#2f2f2f">
      {loading ? <Skeleton height={400} borderRadius={10} /> : <>{children}</>}
    </SkeletonTheme>
  );
};
