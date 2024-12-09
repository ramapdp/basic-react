import { Route, Routes } from 'react-router-dom';
import App from '@/App';

const RouteConfig = () => {
   return (
      <Routes>
         <Route index element={<App />} />
      </Routes>
   );
};

export default RouteConfig;
