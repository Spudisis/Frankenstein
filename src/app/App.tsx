import React from "react";

import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "src/routes/Routes";
import "src/UI/theme.css";
import "src/UI/resize.css";
import { AuthStore } from "src/store/Auth";
import { observer } from "mobx-react-lite";
import { STATUS_LOADING } from "src/domains";
import { Loader } from "src/modules";

const App = observer(() => {
  const { i18n } = useTranslation();
  const locale = navigator.language;
  React.useEffect(() => {
    if (localStorage.getItem("token")) AuthStore.checkAuth();
  }, []);
  React.useLayoutEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const fibonacci = (length: number) => {
    let a = 0,
      b = 1;
    let res = 0;
    for (let i = 2; i <= length; i++) {
      res = a + b;
      a = b;
      b = res;
    }

    return res;
  };

  console.log(fibonacci(10));

  const loading = AuthStore.loading === STATUS_LOADING.LOADING;

  return (
    <BrowserRouter>
      {loading && !AuthStore.auth ? <Loader /> : <Routers />}
    </BrowserRouter>
  );
});

export default App;
