import React, { useState } from "react"
import "./Main.css"

const Main = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const deccrement = () => {
        setCount(count - 1)
        minus()
    }

    const rest = () => {
        setCount(0)
    }
    const minus = () => {
        if (count===0) {
            setCount(0)
        }
    }

    return (
        <>
            <h1 className='main-count'>{count}</h1>
            <div className="buttons">
                <button className="all-btn" onClick={deccrement}>-</button>
                <button className="all-btn" onClick={increment}>+</button>
                <button className="all-btn" onClick={rest}>↻</button>
            </div>
        </>
    )
}

export default Main
