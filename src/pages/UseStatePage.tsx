import { useState } from 'react';

const UseStatePage = () => {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Ini UseState Page</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
         </div>
      </>
   );
};

export default UseStatePage;
