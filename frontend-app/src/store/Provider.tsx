import React from 'react'

export type ContextType = {
  placeholder?: null
}

const Context = React.createContext<ContextType>(undefined!)

const Provider = ({children}: any): any => {
  return (
    <Context.Provider
      value={
        {
          // values
          // functions
        }
      }
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
