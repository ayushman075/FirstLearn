import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import {Dashboard} from './pages/dashboard';
import Batch from './pages/batch.jsx'


function App() {
  return (
    <div className="App">
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/batch' element={<Batch batchname="3rd Sem EE 2026"/>}/>
      </Routes>
     </BrowserRouter>
    </>
    </div>
  );
}

export default App;
