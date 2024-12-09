import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const App = () => {
   const navigate = useNavigate();

   return (
      <>
         <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Learn Basic React</h1>
         <div className="flex gap-2 mt-5">
            <button onClick={() => navigate('/use-state')}>UseState</button>
            <button onClick={() => navigate('/use-state')}>UseEffect</button>
            <button onClick={() => navigate('/use-state')}>UseContext</button>
            <button onClick={() => navigate('/use-state')}>UseRef</button>
            <button onClick={() => navigate('/use-state')}>UseReducer</button>
            <button onClick={() => navigate('/use-state')}>UseCallback</button>
            <button onClick={() => navigate('/use-state')}>UseMemo</button>
            <button onClick={() => navigate('/use-state')}>Custom Hooks</button>

         </div>
      </>
   );
};

export default App;
