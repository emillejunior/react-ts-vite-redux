import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './app/features/counter/counterSlice'

function App() {

  // const [count, setCount] = useState(0)
  const [localCount, setLocalCount] = useState(0)
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()

  const incrementCounter = ()=>{
    console.log("The Increment Button is Clicked")

    console.log(increment())
    // this increment function will return an object with two properties
    // the type of the action which is a string, and the payload
    
    // That object is what we need to send to the store to modify our state
    dispatch(increment())

    // This works too
    // dispatch({
    //   type: "counter/increment"
    // })
  }

  const decrementCounter = ()=>{
    console.log("The Decrement Button is Clicked")
    dispatch(decrement())
  }

  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" className="logo redux" alt="Redux logo" />
      </div>

      <h1>Vite + React + Redux (RTK)</h1>

      <div className="card">
        <p>count is <b>{count}</b></p>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <button onClick={incrementCounter}>
          {`Increment (+1)`}
        </button>
        {/* <button onClick={() => setCount((count) => count - 1)}> */}
        <button onClick={decrementCounter} style={{marginLeft: '8px'}}>
          {`Decrement (-1)`}
        </button>
      </div>

    </div>
  )
}

export default App
