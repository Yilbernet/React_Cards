import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import CardProp from './components/CardProp'
import './styles/index.css'

function App() {

  const Hobbies = ['Musica', 'Ir a la playa', 'Videojuego', 'Peliculas'];
  const Food = ['Porotos con riendas', 'Cazuela', 'Fideos con salsa', 'Completo o As'];
  const Tech = ['HTML', 'CSS', 'Sass', 'React'];

  return (
    <main className="App">
      <Card/>
      <CardProp
        title='Hobbies'
        color='#0C2EF3'
        list = {Hobbies}
      />
      <CardProp
        title='Mi comida favorita'
        color='#7D170E'
        list = {Food}
      />
      <CardProp
        title='Mi stack tech'
        color='#2C6218'
        list = {Tech}
      />
    </main>
  )
}

export default App
