import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './scss/style.scss';
import Post from "./pages/Post";
export default function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
    </Routes>
    </>
  )
}


