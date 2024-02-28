import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import Admin from '../src/components/Admin';
import User from '../src/components/User';

function App() {
  

  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
         </Routes>

      </BrowserRouter>
   
    </>
  )
}

export default App
