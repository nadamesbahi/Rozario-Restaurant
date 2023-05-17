import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommande, updateQuantité } from './Actions'
import AjouterSuccess from './AjouterSuccess';

export default function Menu() {
    const repretoire = './picturesProjet/'

    const dataC = useSelector(state => state.dataCommande)
    const [qtc, setQtc] = useState(0)
    const dispatch = useDispatch()

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
        <section className='sectionM' id='menu'>

            <span>OUR MENU</span>
            <div className="imageM">
                <img src={repretoire + 'menuT.svg'} alt="Menu" />
            </div>

            <article className='articleM'>
                <div className='titre'>
                    <span>Tasty Startes</span>
                    <div className='test'>
                    {
                        dataC.filter(c => c.type == 'tasty').map(t => {
                            return (<div>
                                <p className='pjr'>{t.description} <span className='spP2'>{t.prix} DH</span> </p>
                                <p className='pjD'>{t.sousDes}</p>
                                <button className='btnPlus' id='btnP' onClick={() => { setQtc(qtc + 1); dispatch(addCommande({ id: t.id, description: t.description, prix: t.prix, qtc: qtc })); setIsAdded(true); dispatch(updateQuantité({ id: t.id, qtc: qtc })); }}>+</button>
                            </div>)
                        })
                    }
                    </div>
                    {isAdded ? <AjouterSuccess /> : null}
                </div>
                <div className='imageTasty'>
                    <img src={repretoire + 'mn1.jpg'} alt="Tasty" />
                </div>
            </article>

            <article className='articleM'>
                <div className='imageDessert'>
                    <img src={repretoire + 'mn2.jpg'} alt="Dessert" />
                </div>
                <div className='titre'>
                    <span>Sweet Dessert</span>
                    {
                        dataC.filter(c => c.type == 'dessert').map(t => {
                            return (<div>
                                <p className='pjr'>{t.description} <span className='spP2'>{t.prix} DH</span> </p>
                                <p className='pjD'>{t.sousDes}</p>
                                <button className='btnPlus' id='btnP2' onClick={() => { setQtc(qtc + 1); dispatch(addCommande({ id: t.id, description: t.description, prix: t.prix, qtc: qtc })); setIsAdded(true); }}>+</button>
                            </div>)
                        })
                    }
                    {isAdded ? <AjouterSuccess /> : null}

                </div>
            </article>

            <article className='articleM'>
                <div className='titre'>
                    <span>Flavour Drinks</span>
                    {
                        dataC.filter(c => c.type == 'derink').map(t => {
                            return (<div>
                                <p className='pjr'>{t.description} <span className='spP2'>{t.prix} DH</span> </p>
                                <p className='pjD'>{t.sousDes}</p>
                                <button className='btnPlus' id='btnP3' onClick={() => { setQtc(qtc + 1); dispatch(addCommande({ id: t.id, description: t.description, prix: t.prix, qtc: qtc })); setIsAdded(true); }}>+</button>
                            </div>)
                        })
                    }
                    {isAdded ? <AjouterSuccess /> : null}
                </div>
                <div className='imageDrink'>
                    <img src={repretoire + 'mn3.jpg'} alt="Derink" />
                </div>
            </article>

        </section>
    )
}
