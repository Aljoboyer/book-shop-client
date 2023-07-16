import Home from "./pages/home"
import Headers from "./components/headers"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Notfound from "./pages/notfound";
import SignUp from "./pages/signup";
import Footers from "./components/footers";
import AddBook from "./pages/addBook";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import AllBooks from "./pages/allBook";
import BookDetails from "./pages/bookDetails";
import EditBook from "./pages/editBook";

function App() {

  return (
    <div className="">
      <Router>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/AllBooks" element={<AllBooks />} />
          <Route path="/BookDetails/:id" element={<BookDetails />} />
          <Route path="/EditBook/:id" element={<EditBook />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footers/>
      </Router>
    </div>
  )
}

export default App
