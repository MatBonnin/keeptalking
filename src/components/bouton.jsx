import React, { useState } from 'react';

const ButtonComponent = () => {
  const [buttonColor, setButtonColor] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [numBatteries, setNumBatteries] = useState(0);
  const [indicator, setIndicator] = useState('');
  const [instructions, setInstructions] = useState('');
  const [stripColor, setStripColor] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {

    
    const relacher = () =>{
      if (stripColor === 'bleu') {
        return '4';
      } else if (stripColor === 'jaune') {
        return '5';
      } else {
        return '1 ';
      }
    }
    
    e.preventDefault();
    let tempInstructions = '';

    if (
      (numBatteries > 1 && buttonText === 'Exploser') ||
      (numBatteries > 2 && indicator === 'FRK') ||
      (buttonColor === 'rouge' && buttonText === 'Maintenir')
    ) {
      tempInstructions = 'Appuyer et immédiatement relâcher le bouton.';
    } else {
      if(!show){
        setShow(true);
      }else{
        tempInstructions = 'Maintenir le bouton appuyé et Relâcher lorsque le compte à rebours affiche un'+ relacher();
      }
  
    }

    

    setInstructions(tempInstructions);
  };

  return (
    <div>
      <h1>À propos du Bouton</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Couleur du bouton:
          <select value={buttonColor} onChange={(e) => setButtonColor(e.target.value)}>
            <option value="">Sélectionner une couleur</option>
            <option value="bleu">Bleu</option>
            <option value="blanc">Blanc</option>
            <option value="jaune">Jaune</option>
            <option value="rouge">Rouge</option>
          </select>
        </label>
        <br />
        <label>
          Texte du bouton:
          <select value={buttonText} onChange={(e) => setButtonText(e.target.value)}>
            <option value="">Sélectionner un texte</option>
            <option value="Annuler">Annuler</option>
            <option value="Exploser">Exploser</option>
            <option value="Maintenir">Maintenir</option>
          </select>
        </label>
        <br />
        { show ?  <div>
          <label>
            Nombre de piles:
            <input input
              type="number"
              value={numBatteries}
              onChange={(e) => setNumBatteries(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <label>
            Indicateur :
            <select value={indicator} onChange={(e) => setIndicator(e.target.value)}>
              <option value="">Sélectionner un indicateur</option>
              <option value="AUTRE">autre</option>
              <option value="FRK">FRK</option>
            </select>
          </label>
          <br />
        </div> : null}
        
        
        <button type="submit">Vérifier</button>
      </form>
      <div>
        <h2>Instructions:</h2>
        <p>{instructions}</p>
      </div>
   
    </div>
  );
};

export default ButtonComponent;