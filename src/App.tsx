import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Favoritos from "./pages/Favoritos"
import Inicio from "./pages/Inicio"
import './styles/custom.css'
import {SITE_URL} from './constants/dados'

function App() {
  return (
    <Router basename={SITE_URL}>
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
    </Router>
  )
}

export default App
