import React from 'react'
// import './styles/index.css'

const CardProp = ({title, color, list}) => {

   // console.log(color)

   const objectColor = {
      color: 'white',
      backgroundColor: color,
   }

   // const objectCard = {
   //    color: 'yellow',
   // }

  return (
   <section className='card__prop' style={objectColor}>
    <h2 className="title">{title}</h2>
    <ul className='ul__prop' /*style={objectCard}*/>
      <li>{list[0]}</li>
      <li>{list[1]}</li>
      <li>{list[2]}</li>
      <li>{list[3]}</li>
    </ul>
   </section>
  )
}

export default CardProp