
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Authoisation from './Pages/Authorisation';
import DashBoard from './Pages/DashbBoard';
import FlowChart from './Pages/FlowChart';

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authoisation/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='src/assets/flowchart' element={<FlowChart/>}/>
      </Routes>
    </div>
  );
}

export default App;
