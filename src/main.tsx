import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MultipleCustomHooks } from './03-examples/MultipleCostumeHooks';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>,
)
