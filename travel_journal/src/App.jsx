import { useState } from 'react'
import Navbar from "/src/components/Navbar"
import Card from "/src/components/Card"
import data from "./data.jsx"

export default function App() {
  const cards = data.map(item => {
    return (<Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}