import './App.css';
import LoginContainer from './pages/LoginContainer';
import RegisterPage from './pages/RegisterPage'
import Reset from './pages/Reset'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
   
      {/* <LoginContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/reset" element={<Reset/>} />
        </Routes>

      </BrowserRouter>
      

    </div>
  );
}

export default App;
