import { useEffect, useState } from "react"
import "./useeffect.css"

const UseEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [todos, setTodos] = useState([]);

    // runs once when component mounts
    useEffect(() => {
        console.log("useEffect called only once when the component renders for the first time");

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setTodos(data));

    }, []);

    // runs on every render
    useEffect(() => {
        console.log("effect called when the component renders");
    });

    // runs when count changes
    useEffect(() => {
        console.log("useEffect called only when the count state changes");
    }, [count]);

    return (
        <div class="content">
            <h1><strong>UseEffect Component</strong></h1>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>

            {
                todos.map((todo, index) => {
                    return (
                        <div key={todo.id}>
                            <p>{index + 1}. {todo.title}</p>
                            <b>Completed: {todo.completed.toString()}</b>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default UseEffectComponent;