import { useState } from "react";
export default


function Counter(){
    const [count, setCount] = useState(0);
    const handelAdd = () => {
       const newCount = count + 1;
       setCount(newCount);
    }
    const handelRemove = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return(
        <div>
            <h1>Count :{count}</h1>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>

        </div>
    )
}