import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import RootLayout from './layouts/RootLayout';
import Startups from './pages/Startups';
import AngelInvestors from './pages/AngelInvestors';
import Chats from './pages/Chats';
import Chat from './pages/Chat';
import StartupProfile from './pages/StartupProfile';
import FlowDeck from './pages/FlowDeck';
import Covenant from './pages/Covenant';
import Setting from './pages/Setting';
import Payment from './pages/Payment';
import Pitch from './pages/Pitch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import StartupCarousel from './pages/StartupDetails/StartupBio';
import './App.css';
function AppRoutes() {
  const { token } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route 
        path="/login" 
        element={!token ? <Login /> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/signup" 
        element={!token ? <Signup /> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/verify-email" 
        element={!token ? <VerifyEmail /> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/forgot-password" 
        element={!token ? <ForgotPassword /> : <Navigate to="/" replace />} 
      />
      
      {/* Protected routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<FlowDeck />} />
        <Route path="/covenant" element={<Covenant />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/start-up-profile/:id" element={<StartupProfile />} />
        <Route path="/angel-inv" element={<AngelInvestors />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pitch/:id" element={<Pitch />} />
        <Route path="/start-up/:id" element={<StartupCarousel />} />
        <Route path="/logout" element={<div>Logout Page</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;