import { observer } from "mobx-react-lite";

import { PicturesRows } from "../PicturesRows/PicturesRows";
import React from "react";
import { PicturesTypeStore } from "../../store/store";

export const Pictures = observer(
  ({ type, store }: { type: string; store: PicturesTypeStore }) => {
    console.log(type);
    React.useEffect(() => {
      store.getTemplates(type);
    }, [store, type]);

    return (
      <>
        {store.templates.length > 0 && (
          <PicturesRows type={type} masImg={store.templates} store={store} />
        )}
      </>
    );
  }
);
