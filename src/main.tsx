import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteConfig from '@/routes/index';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<RouteConfig />} />
         </Routes>
      </BrowserRouter>
   </StrictMode>
);
