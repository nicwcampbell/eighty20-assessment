import "./App.css";
import useAuthListener from "./utils/useAuthListener";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

function App() {
  useAuthListener();

  const isAuthInitialized = useSelector(
    (state) => state.user.isAuthInitialized
  );

  return (
    <>
      {isAuthInitialized ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Welcome />
                    </ProtectedRoute>
                  }
                />
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Welcome />} />
              </Routes>
            </Router>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
