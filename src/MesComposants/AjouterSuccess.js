import React from 'react';

function AjouterSuccess() {
  return (
    <div className="container position-fixed text-center justify-content-center" style={{ backgroundColor: 'white', top: '200px', right: '400px', width: '40%', height: '200px', zIndex: '9999' }}>
      <div className="row justify-content-center">
        <img src={'./picturesProjet/suucc.svg'} style={{ marginTop: '50px', marginBottom: '20px' }} alt="succes" />
      </div>
      <strong >Produit ajouté au panier avec succès !</strong>
    </div>
  );
}

export default AjouterSuccess;
