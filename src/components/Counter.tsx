
import {useState} from 'react';

export const Counter = () => {

  const  [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="p-4">{count}</h1>
            <div className="flex gap-4">
                <div>
                    <button className="bg-green-600 text-white p-2" onClick={()=>setCount(count + 1)}>Increment</button>
                </div>
                <div>
                    <button className="bg-blue-600 text-white p-2" onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
        </div>
    );
};


