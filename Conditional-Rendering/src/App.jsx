import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, seTshowbtn] = useState(false)
  const [todos, settodos] = useState([{
    title: "Hey",
    description: "I am a good todo."
  },
  {
    title: "Hey another todo",
    description: "I am a good todo too."
  },
  {
    title: "Hey I am a grocery todo ",
    description: "I am a good todo but I am a grocery todo."
  }
  ])
  const Todo = ({ todo }) => {
    // return (<>
    // <div className="m-4 border border-1 border-purple-400"></div>
    //   <div className="todo">{todo.title}</div>
    //   <div className="todo">{todo.description}</div>
    // </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>Show btn is True.</button> : "Show btn is false."}
      {/* {showbtn && <button>I will be shown only when another button clicked.</button>} */}
      {/* this line means if showbtn is true then show this otherwise not  */}
      {todos.map(todo => {
        // return <Todo key={todo.title}todo={todo}/>
        return (
          <div className="m-4 border border-1 border-purple-400" key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.description}</div>
          </div>
        )
      })}
      <div className="card">
        <button onClick={() => seTshowbtn(!showbtn)}>
          toggel showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
