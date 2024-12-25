import User from './pages/User';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
