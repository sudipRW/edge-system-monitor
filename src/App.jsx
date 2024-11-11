import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin.jsx";
import ThemeContextProvider from "./context-api/ThemeContext.jsx";
import AuthContextProvider, {
  AuthContext,
} from "./context-api/AuthContext.jsx";
import { PortainerProvider } from "./context-api/PortainerContext.jsx";
import { AlertProvider } from "./context-api/AlertContext.jsx";

import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import EdgeSystemDashboard from "./pages/EdgeSystemDashboard.jsx";
import EdgeSystems from "./pages/EdgeSystems.jsx";
import AddEdgeSystem from "./pages/AddEdgeSystem.jsx";
import EdgeSystemInfo from "./pages/EdgeSystemInfo.jsx";
import Containers from "./pages/Containers.jsx";
import Images from "./pages/Images.jsx";
import Volumes from "./pages/Volumes.jsx";
import Stacks from "./pages/Stacks.jsx";
import Networks from "./pages/Networks.jsx";
import Groups from "./pages/Groups.jsx";
import Tags from "./pages/Tags.jsx";
import AddGroup from "./pages/AddGroup.jsx";
import AddStack from "./pages/AddStack.jsx";

const ProtectedRoute = ({ element, requiredRole }) => {
  const { token, role } = React.useContext(AuthContext);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const App = () => {
  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "visible") {
  //       window.location.reload();
  //     }
  //   };
  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <PortainerProvider>
          <AlertProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Signin />} />
                <Route
                  path="/"
                  element={<ProtectedRoute element={<Layout />} />}
                >
                  <Route
                    path="home"
                    element={<ProtectedRoute element={<Home />} />}
                  />
                  <Route
                    path="dashboard/:id"
                    element={
                      <ProtectedRoute element={<EdgeSystemDashboard />} />
                    }
                  />
                  <Route
                    path="dashboard/:id/containers"
                    element={<ProtectedRoute element={<Containers />} />}
                  />
                  <Route
                    path="dashboard/:id/images"
                    element={<ProtectedRoute element={<Images />} />}
                  />
                  <Route
                    path="dashboard/:id/volumes"
                    element={<ProtectedRoute element={<Volumes />} />}
                  />
                  <Route
                    path="dashboard/:id/stacks"
                    element={<ProtectedRoute element={<Stacks />} />}
                  />
                  <Route
                    path="dashboard/:id/networks"
                    element={<ProtectedRoute element={<Networks />} />}
                  />
                  <Route
                    path="edge-systems"
                    element={<ProtectedRoute element={<EdgeSystems />} />}
                  />
                  <Route
                    path="edge-systems/create"
                    element={<ProtectedRoute element={<AddEdgeSystem />} />}
                  />
                  <Route
                    path="edge-system/:id/info"
                    element={<ProtectedRoute element={<EdgeSystemInfo />} />}
                  />
                  <Route
                    path="groups"
                    element={<ProtectedRoute element={<Groups />} />}
                  />
                  <Route
                    path="groups/create"
                    element={<ProtectedRoute element={<AddGroup />} />}
                  />
                  <Route
                    path="tags"
                    element={<ProtectedRoute element={<Tags />} />}
                  />
                  <Route
                    path="stacks/create"
                    element={<ProtectedRoute element={<AddStack />} />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </AlertProvider>
        </PortainerProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
