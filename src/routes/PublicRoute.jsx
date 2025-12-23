import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
      const { isAuthenticated } = useSelector((state) => state.auth);
      const location = useLocation();

      if (isAuthenticated && location.pathname === "/login") {
            return <Navigate to="/" replace />;
      }

      return children;
};

export default PublicRoute;
