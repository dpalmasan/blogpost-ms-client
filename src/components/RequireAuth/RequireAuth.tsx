import { Navigate, useLocation } from "react-router-dom";
import AuthConsumer from "../../hooks/Auth";

function RequireAuth({ children }: any) {
    const { authed } = AuthConsumer();
    const location = useLocation();
    return authed === true ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default RequireAuth;