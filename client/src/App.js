import Narbar from './components/Narbar';
import Home from './pages/Home';
import "./app.css"
import Post from './pages/Post';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Narbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
