import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Hotels />} />
        {/* <Route path="/characters/:id" element={<Detail />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
