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
  build,
  Authorization,
  Registration as RegistrationPath,
  RestorePassword,
  main,
  templates,
  PROFILE_LINK,
} from "./urlsPages";
import { ProtectedRoute } from "./PrivateRoute/PrivateRoute";
import { AuthStore } from "../store/Auth";

export const Routers = () => {
  const { auth } = AuthStore;
  return (
    <Routes>
      {/* не авторизован */}
      <Route
        path={HelloPage}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <StartPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={Authorization}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <Auth />
          </ProtectedRoute>
        }
      />
      <Route
        path={RegistrationPath}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <Registration />
          </ProtectedRoute>
        }
      />
      <Route
        path={RestorePassword}
        element={
          <ProtectedRoute redirectPath={main} auth={!auth}>
            <RestorePassPage />
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
        path={build}
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
};
