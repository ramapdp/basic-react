import { Route, Routes } from 'react-router-dom';
import App from '@/App';
import UseStatePage from '@/pages/UseStatePage';

const RouteConfig = () => {
   return (
      <Routes>
         <Route index element={<App />} />
         <Route path="/use-state" element={<UseStatePage />} />
      </Routes>
   );
};

export default RouteConfig;
