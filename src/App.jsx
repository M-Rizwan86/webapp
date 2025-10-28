import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/views/dashboard/index'
import Login from "./pages/views/login";
import Signup from "./pages/views/signup";
import Dashboard from "./pages/views/dashboard";
import { ToastContainer} from 'react-toastify';

export default function App() {

  return (
   
    <div className="flex flex-col min-h-screen">
       <ToastContainer/>
       
            <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={<Dashboard />}/>
        </Routes>
      </div>
      
    </div>
  );
}
