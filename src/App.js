import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from './Page/Register';
import Login from './Page/Login';
import Error404 from './Page/Error404';

//RFC
function App() {
  //1. State/Hook Variable

  //2. Functions/Function

  //3. Return Statement JSX
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Register />  } />
          <Route path="/register" element={ <Register />  } />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={ <Error404 /> } />
        </Routes>
    </Router>
  );
}

export default App;
