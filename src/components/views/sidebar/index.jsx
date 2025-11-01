import { Home, Settings, LogOut } from "lucide-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../../config/config";

export default function Sidebar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        
            signOut(auth)
            navigate('/login')
            toast.success('Loged Out')
        }
    
    const menuItems = [
        { name: "Dashboard", icon: <Home size={18} />, path: "/" },
        { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
    ];

    return (
        <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                MyApp
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-lg transition ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                            }`
                        }
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <button onClick={handleLogout } className="m-4 p-2 flex items-center gap-2 rounded-lg hover:bg-gray-800 transition">
                <LogOut size={18} /> Logout
            </button>
        </aside>
    );
}
