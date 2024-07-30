import "./App.css";
import useAuthListener from "./utils/useAuthListener";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import AuthenticatedLayout from "./components/AuthenticatedLayout";

function App() {
  useAuthListener();

  const isAuthInitialized = useSelector(
    (state) => state.user.isAuthInitialized
  );

  return (
    <>
      {isAuthInitialized ? (
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AuthenticatedLayout />}>
                <Route path="/" element={<Welcome />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Welcome />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
