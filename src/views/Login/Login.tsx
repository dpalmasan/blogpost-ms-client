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


    const handleLogin = async (e: any) => {
        e.preventDefault();
        await login(e.target.username.value, e.target.password.value);
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
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="text" name="username" placeholder="email@example.io" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Let me in.</button>
                </form>
            </div>
        </>
    );
};

export default Login;