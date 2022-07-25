import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import PageLogin from './pages/loginPage';
import Pageregister from './components/Register/register';
import PageHome from './pages/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<PageLogin />} />
        <Route path="/register" element={<Pageregister />} />
        <Route path="/home" element={<PageHome />} />

        <Route exact path="*" element={<PageLogin />} />

      </Routes>
    </Router>
  );
}

export default App;
