import React from "react";
import ContentLoader from "react-content-loader";

export const CaptchaLoader = () => (
  <ContentLoader
    rtl
    speed={2}
    width={300}
    height={75}
    viewBox="0 0 300 75"
    backgroundColor="#3b3b3b"
    foregroundColor="#696969"
  >
    <rect x="0" y="0" rx="3" ry="3" width="300" height="75" />
  </ContentLoader>
);
