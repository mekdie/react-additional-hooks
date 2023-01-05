import React from "react";
import { useState, useEffect, useRef } from "react";
const UseRefExample2 = () => {
    const renders = useRef(1);

    const [name, setName] = useState("");
    const prevName = useRef("");
    useEffect(() => {
        //this runs multiple times everytime name is changing is because state is updating
        renders.current += 1;
        prevName.current = name;
    }, [name]);
    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Previous name state: {prevName.current}</h2>
            <input
                type="text"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default UseRefExample2;
