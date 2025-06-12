import { useContext } from "react";
import { AuthContext } from "./Authcontent";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
}
