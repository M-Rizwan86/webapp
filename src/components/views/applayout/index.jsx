import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Footer from "../Footer";
import Navbar from "../navbar/index";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />

        {/* Main content grows to fill space between navbar and footer */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>

        {/* Footer always sticks at the bottom */}
        <Footer />
      </div>
    </div>
  );
}
