import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/Signin'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import Journey from './pages/Journey'
import Wallet from './pages/Wallet'
import Profile from './pages/Profile'
import Ride from './pages/Ride'
import AddRide from './pages/AddRide'
import EditUser from './pages/EditUser'

function App() {
  return (
    <>
        <div className='text-center font-serif  bg-green-100 py-3 font-medium'>Cab Booking App</div>
        <BrowserRouter>
              <Routes>
                    <Route path="/signup" element={<Signup text={"user"}/>} />
                    <Route path="/admin/signup" element={<Signup text={"admin"}/>} />
                    <Route path="/signin" element={<Signin text={"user"}/>} />
                    <Route path="/admin/signin" element={<Signin text={"admin"}/>} />
                      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
                    <Route path="/user/dashboard" element={<UserDashboard />} />
                    <Route path="/book/ride" element={<Journey />} />
                    <Route path="/wallet/topup" element={<Wallet />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit/ride" element={<Ride />} />
                    <Route path="/add/ride" element={<AddRide />} />
                    <Route path="/edit/user" element={<EditUser />} />
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
