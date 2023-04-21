import { ReactElement } from "react";

export type PrivateRouteType = {
  children: ReactElement;
  auth: boolean;
  redirectPath?: string;
};
