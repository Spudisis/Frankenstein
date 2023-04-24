import React from "react";

import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { Routers } from "src/routes/Routes";
import "src/UI/theme.css";
import "src/UI/resize.css";
import { AuthStore } from "src/store/Auth";
function App() {
  const { i18n } = useTranslation();
  const locale = navigator.language;
  React.useEffect(() => {
    if (localStorage.getItem("token")) AuthStore.checkAuth();
  }, []);
  React.useLayoutEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
