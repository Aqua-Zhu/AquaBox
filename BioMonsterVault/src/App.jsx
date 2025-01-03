import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './scss/style.scss';
export default function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </>
  )
}


