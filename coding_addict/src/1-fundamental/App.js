import React from 'react'
import { useState } from 'react'
import data from './data'
import Lists from './lists.js'
function App() {
  const [book, setBook] = useState(data)
  return (
    <>
      <h1>Amazon best seller</h1>
      <article>
        <Lists book={book} />
        <button onClick={() => setBook([])}>clear all</button>
      </article>
    </>
  )
}

export default App
