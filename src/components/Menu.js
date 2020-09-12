import React from 'react'

const Menu = ({ picture, name, budget, cuisine, rating }) => {
  var arrRating = []
  for (let i = 0; i < rating; i++) {
    arrRating.push('*')
  }
  return (
    <div style={{ width: 200, height: 100 }}>
      <img src={picture} height={'50%'} alt="" width='100%' />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>{name}</div>
        <div>{budget}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>{cuisine}</div>
        <div>
          {arrRating}
        </div>
      </div>
    </div>
  )
}

export default Menu;