import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
// react-bootstrap=> get started=> css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
