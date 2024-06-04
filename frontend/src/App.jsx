import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/Signin'
import AdminDashboard from './pages/AdminDashboard'


function App() {
  return (
    <>
        <div className='text-center font-serif  bg-green-100 py-3 font-medium'>Cab Booking App</div>
        <BrowserRouter>
              <Routes>
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/Admin/dashboard" element={<AdminDashboard/>} />
                    {/* <Route path="/send" element={<SendMoney />} /> */}
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
