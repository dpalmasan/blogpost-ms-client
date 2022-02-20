import React from 'react';
import { AuthProvider } from './hooks/Auth';
import { AppRoutes } from './routes';

export default class App extends React.Component {
    render() {
        return (
            <AuthProvider><AppRoutes /></AuthProvider>
        );
    }
}
