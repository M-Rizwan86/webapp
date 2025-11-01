import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <User size={20} />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}
