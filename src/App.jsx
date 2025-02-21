import { useEffect, useState } from "react"
import Counter from "./components/Counter"
import CounterControllers from "./components/CounterControllers"
import ExampleProps from "./components/ExampleProps"

function App() {
  // state
  const [number, setNumber] = useState(0)
  const [auth, setAuth] = useState(false)
  const [watchList, setWatchList] = useState([])

  const name = 'Carlitos'
  const lastName = 'Acosta'
  const message = () => (<p>Message from daddy 😎</p>)

  // antes return
  useEffect(() => {
    console.log('El componente está montado 👌')
    if (auth) {
      console.log('Authenticated user 👍🏻')
    }
  }, [auth])

  return (
    <>
      <ExampleProps
        name={name}
        lastName={lastName}
        message={message()}
      />

      <Counter number={number} />
      <CounterControllers setNumber={setNumber} />

      <button
        onClick={() => { setAuth(!auth) }}
        className='px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition cursor-pointer mt-10'
      >
        {auth ? `Logout -> auth: [${auth}]` : `Loggin -> auth: [${auth}]`}

      </button>

    </>
  )
}

export default App
