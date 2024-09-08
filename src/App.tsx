
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Authoisation from './Pages/Authorisation';
import DashBoard from './Pages/DashbBoard';

function App() {
  return (
    <div className="bg-gradient-to-br from-white to-red-400 h-full">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authoisation/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
