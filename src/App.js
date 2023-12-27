import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/Admin/adminLogin';
import AdminPortal from './Components/Admin/adminPortal';
import UserLogin from './Components/users/UserLogin';
import UserPortal from './Components/users/UserPortal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>
          <Route path="/adminPortal/*" element={<AdminPortal />}></Route>
          <Route path="/userLogin" element={<UserLogin />}></Route>
          <Route path="/userPortal/*" element={<UserPortal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;