// 1 - criar context
import { createContext, useState } from 'react'

// eslint-disable-next-line no-undef
export const CounterContext = createContext()

// 2 - criar provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}