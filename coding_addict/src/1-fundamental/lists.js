import React from 'react'

function Lists({ book }) {
  return (
    <div>
      {book.map((books) => {
        const { id, title, author, img } = books
        return (
          <div>
            <article key={id}>
              <img src={img} alt={author} />
              <h1>{title}</h1>
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default Lists
