import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginView from './pages/loginView.jsx';
import RegisterView from './pages/registerView.jsx';
import Home from './pages/Home.jsx';

//import Container from '@mui/material/Container';

//TODO: 
//Header

function App() {
  return (
    <div>
     
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth/login" element={<LoginView />}></Route>
          <Route path="/auth/register" element={<RegisterView />}></Route>
      </Routes>

</div>
  );
}

export default App;
