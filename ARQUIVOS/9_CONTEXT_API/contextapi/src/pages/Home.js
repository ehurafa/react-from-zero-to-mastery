// import { useContext } from 'react'

// import { CounterContext } from '../context/CounterContext'

import ChangeCounter from '../components/ChangeCounter'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext()

  console.log('color ', color)

  // 6 - alterando o state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }

  return (
    <div>
      <h1 style={ { color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o valor do context */}
      <ChangeCounter />
      {/* 6 - alterando o state complexo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home