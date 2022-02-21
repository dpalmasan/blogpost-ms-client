import { Home } from './views/Home';
import { About } from './views/About';
import { NavBar } from './components/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './views/Login';
import { Blogs } from './views/Blogs';
import { BlogDetail } from './views/BlogDetail';

export const AppRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/about" element={<RequireAuth>
                    <About />
                </RequireAuth>} />
                <Route path="/blogs/:blogId" element={<BlogDetail />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </div>
    );
};