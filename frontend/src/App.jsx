import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/Signin'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import Journey from './pages/Journey'


function App() {
  return (
    <>
        <div className='text-center font-serif  bg-green-100 py-3 font-medium'>Cab Booking App</div>
        <BrowserRouter>
              <Routes>
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/signin" element={<Signin/>} />
                      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
                    <Route path="/user/dashboard" element={<UserDashboard />} />
                    <Route path="/book/ride" element={<Journey />} />
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
