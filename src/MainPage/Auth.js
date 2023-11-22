import { Navigate, useNavigate } from "react-router-dom";
function RequireAuth({ children }) {
  const navigate = useNavigate();
  return window.localStorage.getItem("authenticated") === "true" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}
export default RequireAuth;
