import React, { createContext } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({Children}) => {
  return (
    <PageContext.Provider value={"Hello World"}>
        {Children}
    </PageContext.Provider>
  )
}

export default PageContextProvider;

// Steps
// 1. Create the context.
// 2. Pass in the value you want to use.
// 3. Export and use the context.