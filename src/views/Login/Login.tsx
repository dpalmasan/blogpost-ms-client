import { useNavigate, useLocation } from "react-router-dom";
import AuthConsumer from "../../hooks/Auth";

import './Login.css';

interface LocationState {
    state: {
        path: string | undefined;
    }
}

const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthConsumer();
    const { state } = useLocation() as LocationState;


    const handleLogin = async () => {
        await login();
        navigate(state?.path || "/about");
    };

    return (
        <>
            <div className="loginHeader">
                <h2>Unauthenticated User</h2>
                <p>You are trying to access protected content. To continue, please authenticate with your credentials.</p>
            </div>
            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" name="u" placeholder="Username" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" name="p" placeholder="Password" required />
                    <button type="submit">Let me in.</button>
                </form>
            </div>
        </>
    );
};

export default Login;