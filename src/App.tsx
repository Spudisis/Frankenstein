import React from "react";
import { Header, SelectLanguage } from "./modules";
import { Trans, useTranslation } from "react-i18next";
import {
  Auth,
  CreateApplication,
  Registration,
  RestorePassPage,
  StartPage,
  MainPage,
  TemplatesPage,
} from "./pages";
import { Routes, Route, redirect } from "react-router-dom";
import {
  HelloPage,
  build,
  Authorization,
  Registration as RegistrationPath,
  RestorePassword,
  main,
  templates,
} from "./routes";

function App() {
  const [auth, setAuth] = React.useState(false);
  const { i18n } = useTranslation();
  const locale = navigator.language;

  React.useEffect(() => {
    auth ? redirect(build) : redirect(HelloPage);
  }, [auth]);

  React.useLayoutEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <div className="App">
      {window.location.pathname !== HelloPage &&
      window.location.pathname !== Authorization &&
      window.location.pathname !== RestorePassword &&
      window.location.pathname !== RegistrationPath ? (
        <Header />
      ) : (
        <SelectLanguage />
      )}

      <Routes>
        <Route path={HelloPage} element={<StartPage />} />
        <Route path={Authorization} element={<Auth />} />
        <Route path={RegistrationPath} element={<Registration />} />
        <Route path={RestorePassword} element={<RestorePassPage />} />
        <Route path={main} element={<MainPage />}></Route>
        <Route path={build} element={<CreateApplication />} />
        <Route path={templates} element={<TemplatesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
