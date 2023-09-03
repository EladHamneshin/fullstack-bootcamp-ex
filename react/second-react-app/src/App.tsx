// import { useState } from 'react'
// import './App.css'
// import Text from './components/Text'
// import Card from './components/Card'
// import Select from './components/Select'
// import AddColor from './components/AddColor'


// function App() {
  //   const [visability, setVisability] = useState(true)
  //   const [color, setColor] = useState('red')
  //   const [colotToAdd, setColotToAdd] = useState<string>()
  
  //   return (
    //     <>
    //       <Text isVisible={visability} />
    //       <button onClick={() => setVisability((prev) => !prev)}>
    //         click me
    //       </button>
    //       <Card color = {color} />
    //       <Select changeColor={(event)=> setColor(event.target.value)} colorToAdd={colotToAdd}/>
    //       <AddColor addColor={(color) => setColotToAdd(color)} />
    //     </>
    //   )
    // }
    
    
import UsersFromServer from "./useEffect/UsersFromServer"

function App(){
  return <>
  <UsersFromServer/>
  </>
}

export default App
