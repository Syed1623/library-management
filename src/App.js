import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/Admin/adminLogin';
import AdminPortal from './Components/Admin/adminPortal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>
          <Route path="/adminPortal/*" element={<AdminPortal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
