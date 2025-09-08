import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Startups from './pages/Startups'
import AngelInvestors from './pages/AngelInvestors'
import Chats from './pages/Chats'
import Chat from './pages/Chat'
import StartupProfile from './pages/StartupProfile'
import FlowDeck from './pages/FlowDeck'
import Covenant from './pages/Covenant'
import Setting from './pages/Setting'
import Payment from './pages/Payment'
import Pitch from './pages/Pitch'
import './App.css'
import StartupCarousel from './pages/StartupDetails/StartupBio'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<FlowDeck />} />
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
      </Routes>
    </BrowserRouter>
  )
}
