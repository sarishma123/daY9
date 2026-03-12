import React, { useState, createContext, useContext } from "react";

const MessageContext = createContext();

const UseContent = () => {
    const [msg, setMsg] = useState("Hello, this is from UseContent component");

    return (
        <div>
            <h1>UseContent Hook Example</h1>
            
            {/* 2. Context Provider */}
            <MessageContext.Provider value={msg}>
                <ComponentA />
            </MessageContext.Provider>
        </div>
    );
};

export default UseContent;

const ComponentA = () => {
    return (
        <div>
            <h1>Component A</h1>
            <ComponentB />
        </div>
    );
};


const ComponentB = () => {
    const msg = useContext(MessageContext); 
    return (
        <div>
            <h1>Component B</h1>
            <p>{msg}</p>
        </div>
    );
};