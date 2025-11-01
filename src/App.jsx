import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/views/login";
import Signup from "./pages/views/signup";
import Dashboard from "./pages/views/dashboard";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./provider/protected-route";
import PublicRoute from "./provider/public-route";
import AppLayout from "./components/views/applayout/index";
import  Settings  from "./components/views/setting/index";
export default function App() {

  return (

    <div className="flex flex-col min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />


      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings   /> </ProtectedRoute>} />

          </Route>
        </Routes>
      </div>

    </div>
  );
}
