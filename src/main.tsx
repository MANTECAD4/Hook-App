import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <StrictMode>
      <div className='m-4'>
        <MainApp/>
      </div>
    </StrictMode>
  </BrowserRouter>
)
