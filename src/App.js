import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<Detail />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
