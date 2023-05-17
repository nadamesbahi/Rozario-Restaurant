import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function NavbaPanRev() {
    const repretoire = './picturesProjet/'
    const imgg = './picturesProjet/navPR.jpg'
    const back = { backgroundImage: "url(" + imgg + ")" }
    const pan = useSelector(state => state.panier)

    return (
        <nav className='navPR' style={back}>
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
                                <li className="nav-item px-4"><Link to={'/'}><a href="#about" className="nav-link">About</a></Link></li>
                                <li className="nav-item px-4"><Link to={'/'}><a href="#menu" className="nav-link">Menu</a></Link></li>
                                <li className="nav-item px-4"><Link to={'/'}><a href="#reservation" className="nav-link">Reservation</a></Link></li>
                                <li className="nav-item px-4"><Link to={'/panier'} className="nav-link">Panier ({pan.length})</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}
