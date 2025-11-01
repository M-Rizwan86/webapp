import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/config";
import { toast } from "react-toastify";
import { AuthContext,AuthProvider} from "../../context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const { firebaseUser } = useContext(AuthContext)
  const { email } = firebaseUser || {}
  // Example user data — in real app, this could come from Firebase Auth
  const user = {
    email: email || 'user is not found',
  };

  const handleLogout = () => {
    if(email){signOut(auth)
    navigate('/login')
    toast.success('Loged Out')}
    else{
      navigate('/login')
    }

  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">ReactApp</h1>

      <div className="space-x-4 flex items-center">
        <NavLink to="/" className="hover:underline">
          Dashboard
        </NavLink>





        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-blue-700 px-3 py-1 rounded-full hover:bg-blue-800"
          >
            <span className="mr-2">{user.email}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-2 border-b">
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-500">User</p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {email ? "logout" : 'Login'}
              </button>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
