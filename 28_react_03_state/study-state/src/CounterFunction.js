import { useState } from "react"

const CounterFunction = () => {
    const [number, setNumber] = useState(0);
    const Increase = () => setNumber(number + 1);
    const Decrease = () => setNumber(number - 2);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
        </>
    )
}

export default CounterFunction