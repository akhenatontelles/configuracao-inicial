import React from 'react'

export const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <button>
        <Link to={`/products/1`}>Produto</Link>
        </button>
    </div>
  )
}
