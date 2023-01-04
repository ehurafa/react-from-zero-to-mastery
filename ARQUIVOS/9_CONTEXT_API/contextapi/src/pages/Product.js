import React from 'react'
import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext'

import ChangeCounter from '../components/ChangeCounter'

const Product = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Produto</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o valor do context */}
      <ChangeCounter />
    </div>
  )
}

export default Product