import Home from "./pages/home"
import Headers from "./components/headers"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Notfound from "./pages/notfound";
import SignUp from "./pages/signup";


function App() {

  return (
    <div>
      <Router>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
