import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import {Dashboard} from './pages/dashboard';



function App() {
  return (
    <div className="App">
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
    </div>
  );
}

export default App;
