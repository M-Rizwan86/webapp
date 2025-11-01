import { useContext } from "react";
import { AuthContext } from "../../../context";

export default function Dashboard() {
   const { firebaseUser } = useContext(AuthContext)
    const {email} = firebaseUser || {}
    console.log(email)
return (
    <>
    
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-4">
          Welcome, "User" 👋
        </h2>
        <p className="text-gray-600">You’re now in your dashboard.</p>
      </div>
      
      </>
  );
}
