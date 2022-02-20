import React from "react";
import axios from 'axios'


interface IAuthContext {
    authed: boolean,
    login(username: string, password: string): Promise<void>,
    logout(): Promise<void>,
}

const authContext = React.createContext<IAuthContext>({} as IAuthContext);

function useAuth(): IAuthContext {
    const [authed, setAuthed] = React.useState(false);

    return {
        authed,
        login(email, password) {
            return new Promise<void>(async (res) => {
                try {
                    const { data } = await axios.post("/jwt", {
                        email,
                        password
                    });
                    console.log(data);

                    if (data) {
                        setAuthed(true);
                        res();
                    } else {
                        throw new Error("Invalid credentials");
                    }
                } catch (error) {
                    console.error(error);
                }
            });
        },
        logout() {
            return new Promise<void>((res) => {
                setAuthed(false);
                res();
            });
        },
    };
}

export function AuthProvider({ children }: any) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}