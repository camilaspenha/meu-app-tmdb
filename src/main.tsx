import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.tsx'
import Favoritos from './pages/Favoritos.tsx';

const SITE_URL = import.meta.env.SITE_URL

  
createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={SITE_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  </BrowserRouter>
)
