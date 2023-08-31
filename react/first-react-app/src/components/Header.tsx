import { useState } from 'react'
import Title from '../Title'

export default function Header() {
  let [count, setCount] = useState(0)

  return (
    <header style={{display: 'flex'}}>
      <Title text="header text"/>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
    </header>

  )
}

