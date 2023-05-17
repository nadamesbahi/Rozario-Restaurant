import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Reservation from './Reservation'

export default function NavbarAbout() {
  const repretoire = './picturesProjet/'
  const imgg = './picturesProjet/slide1.jpg'
  const back = { background: "url(" + imgg + ")" }
  const pan = useSelector(state => state.panier)

  return (
    <div>
      <nav className='navAbout' style={back}>
        <div className="row mt-3">
          <div className="col">
            <nav className="navbar navbar-expand-lg">
              <img className="navbar-brand" src={repretoire + 'logo.svg'} alt="Logo" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#m">
                <span className="navbar-toggler-icon">
                  <i className="bi bi-list h2"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="m">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item px-4"><Link to={'/'} className="nav-link">Home</Link></li>
                  <li className="nav-item px-4"><a href="#about" className="nav-link">About</a></li>
                  <li className="nav-item px-4"><a href="#menu" className="nav-link">Menu</a></li>
                  <li className="nav-item px-4"><a href="#reservation" className="nav-link">Reservation</a></li>
                  <li className="nav-item px-4"><Link to={'/panier'} className="nav-link">Panier ({pan.length})</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row mt-5" id='r1'>
          <div className="col" id='r2'>
            <span id='sp1'>Welcome To</span>
            <p id='p3'><span id='sp2'>The </span> <span id='sp3'> Rozario</span></p>
            <p id='p1'>WE HAVE THE DELICIOUS BEGINNING IN RESTAURANT</p>
          </div>
        </div>
      </nav>
      <section className='sectionA' id='about'>
        <div className="c1">
          <img src={repretoire + 'about.jpg'} alt="About" />
        </div>
        <div className="c2">
          <span>The Rozario History</span>
          <div className="image">
            <img src={repretoire + 'starA.svg'} alt="Star" />
          </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles - tias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </div>
      </section>
      <Menu />
      <Reservation />
    </div>
  )
}
