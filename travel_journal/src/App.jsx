import { useState } from 'react'
import Navbar from "/src/components/Navbar"
import Cards from "/src/components/Cards"
import data from "./data"
import Card from './components/Cards'

export default function App() {
  const cards = data.map(item => {
    return (<Card
      key={item.id}
      item={item}/>
    )
  })
  return (
    <div className="App">
      <Navbar />
      <h1>hello</h1>
      <Cards />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}