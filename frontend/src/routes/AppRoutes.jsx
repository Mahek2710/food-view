import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import ChooseRegister from '../pages/auth/ChooseRegister'   // ✅ added
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import Home from '../pages/general/Home'
import Saved from '../pages/general/Saved'                 // ✅ added
import BottomNav from '../components/BottomNav'           // ✅ added
import CreateFood from '../pages/food-partner/CreateFood'
import Profile from '../pages/food-partner/Profile'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<ChooseRegister />} />      {/* missing in your version */}
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<><Home /><BottomNav /></>} />      {/* added BottomNav */}
        <Route path="/saved" element={<><Saved /><BottomNav /></>} /> {/* new route */}
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/food-partner/:id" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
