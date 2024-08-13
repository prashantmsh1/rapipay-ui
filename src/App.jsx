import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "flowbite-react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className=" text-center">
            <h1>{count}</h1>
            <Button className=" mx-auto" onClick={() => setCount((count) => count + 1)}>
                Increment
            </Button>
        </div>
    );
}

export default App;
