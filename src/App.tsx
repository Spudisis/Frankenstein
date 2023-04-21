import React from "react";

import { useTranslation } from "react-i18next";

import { Routers } from "./routes/Routes";

function App() {
  const { i18n } = useTranslation();
  const locale = navigator.language;

  React.useLayoutEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
