
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisteInRailMadad from './components/Registration/Registartion.Rail';
import Home from './Pages/Home';
import Authoisation from './Pages/Authorisation';
import DashBoard from './Pages/DashbBoard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authoisation/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
