import React, { useEffect, useState } from 'react'
import '../MesComposants/style.css'
import { useDispatch } from 'react-redux'
import { addReservation } from './Actions'
import AjouterReservation from './AjouterReservation'
export default function Reservation() {
  const repretoire = './picturesProjet/'
  const imgg = './picturesProjet/reservation.jpg'
  const back = { background: "center url(" + imgg + ")" }

  const [reservation, setReservation] = useState()
  const dispatch = useDispatch()
  const changeV = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    })
  }


  const [isAdded, setIsAdded] = useState(false);

  const resetIsAdded = () => {
    setIsAdded(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      resetIsAdded();
    }, 2000);
    return () => clearTimeout(timer);
  }, [isAdded]);

  const addR = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservation));
  }


  return (
    <section className='sectionR1' style={back} id='reservation'>
      <div className="cont1R">
        <p>Quick Reservation</p>
        <span id='spR'>RESERVATION FOR YOUR COMFORT!</span>
        <div className="imageR">
          <img src={repretoire + 'star.svg'} alt="Star" />
        </div>
      </div>
      <div className='parent'>
      <form action="" onSubmit={addR}>
        <div className="row par1" >
          <input className='inpt1' type="date" name="date" id="date" placeholder='Date' onChange={changeV} />
          <input  type="time" name="time" id="time" placeholder='Time' onChange={changeV} />
          <input className='inpt' type="number" name="nbrPersonne" id="nbrPersonne" placeholder='No. of persons' onChange={changeV} />
        </div>
        {isAdded ? <AjouterReservation /> : null}
        <div className="row par2">
          <input className='inpt1' type="text" name="name" id="name" placeholder='Name' onChange={changeV} />
          <input  type="email" name="email" id="email" placeholder='Email' onChange={changeV} />
          <input className='inpt' type="text" name="phone" id="phone" placeholder='Phone' onChange={changeV} />
        </div> 
          <div id='dd'>
          <button id='btnReserver' onClick={() => setIsAdded(true)}>Reserver</button>
          </div>
      </form>
      </div>
      
    </section>
  )
}
