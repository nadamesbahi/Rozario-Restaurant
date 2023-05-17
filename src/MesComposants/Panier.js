import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCommande, deleteCommande, updateQuantité } from './Actions'
import NavbaPanRev from './NavbaPanRev'

export default function Panier() {
  const pan = useSelector(state => state.panier)
  const ppp=pan.map(p=>p.id)
  console.log(ppp);
  const repretoire = './picturesProjet/'
  const dispatch = useDispatch()
  const dataC = useSelector(state => state.dataCommande)
  const [qtc, setQtc] = useState(1)

  const getTotalPanier = () => {
    let total = 0
    pan.forEach(item => {
      total += (parseFloat(item.prix) * parseInt(item.qtc))
    })
    return total
  }
  return (
    <section id='sectionPn' className='container-fluid'>
      <NavbaPanRev />
      <article className='row'>
        <div className="col-md-8 col-sm-6" id='p'>
          <span className='spanP'>Panier ({pan.length})</span>
          <hr />
          <div className="row">
            <div className="col-8 ">
              <p> {
                pan.map(p => {
                  const dat = dataC.find(d => d.id == p.id)
                  return (<div>
                    <p>{p.description} DH{p.prix}<img id='imgD' src={repretoire + 'delete.svg'} alt="Delete" onClick={() => dispatch(deleteCommande(p.id))} />
                      <button className='btnPlus' id='btnP' onClick={() => { setQtc(qtc + 1); dispatch(addCommande({ id: dat.id, description: dat.description, prix: dat.prix, qtc: qtc })); dispatch(updateQuantité({ id: dat.id, qtc: qtc })); }}>+</button></p>
                  </div>)
                })
              }</p>
            </div>
          </div>
        </div>
        <div className='col-md-4  col-sm-6' id='r'>
          <span className='spanP'> Resume de panier</span>
          <hr />
          <div className="row">
            <div className="col" >
              <p id='pPrx'>Sous-Total
                {<span id='s'>DH {getTotalPanier() || 0}</span>} </p>
              <div className="row">
                <div className="col" id='pPn'>
                  <p>Frais de livraison non inclus à ce stade.</p>
                  <p>Il manque 21.00 Dhs pour profiter de la livraison gratuite </p>
                </div>
              </div>
              <Link to={'/finaliserC'}><button className='btnComm'>Commander</button></Link>
            </div>
          </div>

        </div>
      </article>
    </section>
  )
}
