import React from "react";


interface IAuthContext {
    authed: boolean,
    login(): Promise<void>,
    logout(): Promise<void>,
}



const authContext = React.createContext<IAuthContext>({
    authed: false,
    login: (): Promise<void> => { return new Promise<void>((res) => { res() }) },
    logout: (): Promise<void> => { return new Promise<void>((res) => { res() }) },

});

function useAuth(): IAuthContext {
    const [authed, setAuthed] = React.useState(false);

    return {
        authed,
        login() {
            return new Promise<void>((res) => {
                setAuthed(true);
                res();
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