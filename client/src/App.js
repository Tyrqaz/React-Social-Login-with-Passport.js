import Narbar from './components/Narbar';
import Home from './pages/Home';
import "./app.css"
import Post from './pages/Post';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"

function App() {
  const user = true;


  return (
    <BrowserRouter>
    <div>
      <Narbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login"/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
