import React, {useState, createContext, useContext} from 'react'

const clickContext = createContext()
const toggleBackdropContext = createContext()



export const useClickState = () => useContext(clickContext)
export const useToggle = () => useContext(toggleBackdropContext);


function BackdropProvider({children}) {
  const [isClicked, setIsClicked] = useState(false);

 
  function toggleBackdrop(){
    setIsClicked(prevState => !prevState)
  }
  return (
    <clickContext.Provider value={isClicked}>
      <toggleBackdropContext.Provider value={toggleBackdrop}>
        {children}
      </toggleBackdropContext.Provider>
    </clickContext.Provider>
  )
}

export default BackdropProvider