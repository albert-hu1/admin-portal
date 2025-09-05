import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Startups from './pages/Startups'
import AngelInvestors from './pages/AngelInvestors'
import VCFirm from './pages/VCFirm'
import Admins from './pages/Admins'
import Stacks from './pages/Stacks'
import Chat from './pages/Chat'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
           <Route path="/" element={<Startups />} />
          <Route path="/angel-inv" element={<AngelInvestors />} />
          <Route path="/vc-firm" element={<VCFirm />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
