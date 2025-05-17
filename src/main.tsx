import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleFormCustomHook />
  </StrictMode>,
)
