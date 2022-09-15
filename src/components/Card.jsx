import React from 'react'

const Card = () => {

   const me = {
      name: "Benjamin Flores",
      age: "30 años",
      favoriteMovie: "Forest Gump",
      favoriteMusic: "Cueca",
   }

   return (
      <ul className='card'>
         <li className='card__li'>
            <span className='card__span'>Nombre: </span>{me.name}
         </li>
         <li className='card__li'>
            <span className='card__span'>Edad: </span>{me.age}
         </li>
         <li className='card__li'>
            <span className='card__span'>Pelicula favorita: </span>{me.favoriteMovie}
         </li>
         <li className='card__li'>
            <span className='card__span'>Musica favorita: </span>{me.favoriteMusic}
         </li>
      </ul>
   )
}

export default Card