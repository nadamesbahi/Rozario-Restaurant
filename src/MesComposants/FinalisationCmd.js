import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clientCommander } from './Actions';
import ConfirmationStyle from './ConfirmationStyle';
import NavbaPanRev from './NavbaPanRev'

export default function FinalisationCmd() {
  const dispatch=useDispatch()
  const repretoire = './picturesProjet/'
  const [info,setInfo]=useState()
  const changeV = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const ClientCmd = (e) => {
    e.preventDefault();
    // dispatch(clientCommander({name:info.name,email:info.email,phone:info.phone,ville:info.ville,livraison:info.livraison,paiement:info.paiement,idCommande:id}))
  };

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


  return (
    <div>
      <NavbaPanRev />
      <section className='sectionR1' id='reservation'>

        <div className="cont1R">

          <p>Finalisation de Commande</p>

          <div className="imageR">
            <img src={repretoire+'star.svg'} alt="Star" />
          </div>
        </div>

        <form action="" onSubmit={ClientCmd}>
          
          <div className="rs4">
          <div className="row rs1">
            <input type="text" name="name" id="name" placeholder='Name' onChange={changeV}/>
            <input type="email" name="email" id="email" placeholder='Email' onChange={changeV}/>
            <input type="text" name="phone" id="phone" placeholder='Phone' onChange={changeV}/>
          </div>

          <div className="row rs2">
            <input list="region" name="region" placeholder='Region' onChange={changeV} />
            <datalist id="region">
              <option value="Tanger-Tétouan" />
              <option value="Rabat-Salé" />
              <option value="Casablanca-Settat" />
            </datalist>
            <input list="vl" name="ville" placeholder='Ville' onChange={changeV}/>
            <datalist id="vl">
              <option value="Tanger" />
              <option value="Assilah" />
              <option value="Casablanca" />
            </datalist>
            {isAdded ? <ConfirmationStyle /> : null}
          </div>
          
          <div className="row rs2">
            <input list="mdp" name="paiement" placeholder='Mode de Paiement' onChange={changeV}/>
            <datalist id="mdp">
              <option value="Carte bancaire" />
            </datalist>
            <input type="text" name="livraison" placeholder='Mode de Livraison' onChange={changeV}/>
          </div>
          </div>
          <div className='text-center'>
          <button id='btnReserver' onClick={() => setIsAdded(true)}>Confirmer</button>
          </div>
        </form>
      </section>
    </div>
  )
}
