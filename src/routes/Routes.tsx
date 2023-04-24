import {
  Auth,
  CreateApplication,
  Registration,
  RestorePassPage,
  StartPage,
  MainPage,
  TemplatesPage,
  Profile,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import {
  HelloPage,
  BUILD,
  Authorization,
  Registration as RegistrationPath,
  RestorePassword,
  main,
  templates,
  PROFILE_LINK,
} from "./urlsPages";
import { ProtectedRoute } from "./PrivateRoute/PrivateRoute";
import { AuthStore } from "../store/Auth";
import { observer } from "mobx-react-lite";
import { ModalAccessEmail } from "src/components";
import { STATUS_LOADING } from "src/domains";
import { Loader } from "src/modules";

export const Routers = observer(() => {
  const { auth } = AuthStore;
  
  return (
    <Routes>
      {/* не авторизован */}

      <Route
        path={HelloPage}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <>
              {AuthStore.modal && <ModalAccessEmail />}
              <StartPage />
            </>
          </ProtectedRoute>
        }
      />
      <Route
        path={Authorization}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <>
              {AuthStore.modal && <ModalAccessEmail />}
              <Auth />
            </>
          </ProtectedRoute>
        }
      />
      <Route
        path={RegistrationPath}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <>
              {AuthStore.modal && <ModalAccessEmail />}
              <Registration />
            </>
          </ProtectedRoute>
        }
      />
      <Route
        path={RestorePassword}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <>
              {AuthStore.modal && <ModalAccessEmail />}
              <RestorePassPage />
            </>
          </ProtectedRoute>
        }
      />
      {/* авторизован */}
      <Route
        path={main}
        element={
          <ProtectedRoute auth={auth}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={BUILD}
        element={
          <ProtectedRoute auth={auth}>
            <CreateApplication />
          </ProtectedRoute>
        }
      />
      <Route
        path={templates}
        element={
          <ProtectedRoute auth={auth}>
            <TemplatesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={PROFILE_LINK}
        element={
          <ProtectedRoute auth={auth}>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
});
