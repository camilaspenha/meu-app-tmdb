import {Routes, Route } from "react-router-dom"
import Favoritos from "./pages/Favoritos"
import Inicio from "./pages/Inicio"
import './styles/custom.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  )
}

export default App
