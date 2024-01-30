import Navbar from "./NavBar";
import Contact from "./pages/Contact";
import Meniu from "./pages/Meniu";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom" 
import SignUpForm from "./pages/SignUpForm";
import Login from "./pages/Login";
import SpecialPage from "./pages/SpecialPage";



function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meniu" element={<Meniu />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/specialpage" element={<SpecialPage />} />
       
      </Routes>
    </div>
  </>
  )
}

export default App;
