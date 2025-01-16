import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './scss/style.scss';
import Post from "./pages/Post";
import Select from "./pages/Select";
export default function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
      <Route path="/select" element={<Select/>}></Route>
    </Routes>
    </>
  )
}


