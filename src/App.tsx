import React from "react";
import json from "./example.json";
import { Header } from "./modules";
import { Auth, CreateApplication, Registration, StartPage } from "./pages";
import { Routes, Route, redirect } from "react-router-dom";
import {
  HelloPage,
  main,
  Authorization,
  Registration as RegistrationPath,
} from "./routes";

function App() {
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    auth ? redirect(main) : redirect(HelloPage);
  }, [auth]);

  return (
    <div className="App">
      {window.location.pathname !== HelloPage &&
        window.location.pathname !== Authorization &&
        window.location.pathname !== RegistrationPath && <Header />}

      <Routes>
        <Route path={HelloPage} element={<StartPage />} />
        <Route path={main} element={<CreateApplication />} />
        <Route path={Authorization} element={<Auth />} />
        <Route path={RegistrationPath} element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
