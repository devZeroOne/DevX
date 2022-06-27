import './App.css';
import Home from './components/client/pages/Home/Home';
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/client/pages/login/Login';
import MainDeshboard from './components/deshboard/MainDashboard/MainDeshboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ff" element={<Home />}/>
          <Route path="/fff" element={<Home />}/>
          <Route path="/ffff" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<MainDeshboard />}/>
          <Route path="/dashboard" element={<MainDeshboard />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
