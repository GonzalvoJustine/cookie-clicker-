/**
 * Template of site Cookie Clicker
 */

import React from 'react';
import './style/style.scss';
import SectionLeft from './components/organismes/SectionLeft';
import SectionRight from './components/organismes/SectionRight';
import SectionMiddle from './components/organismes/SectionMiddle';

import icon1 from './images/images_clicks/buildings_01.png';
import icon2 from './images/images_clicks/buildings_05.png';
import image2 from './images/Grandmas.png';
import icon3 from './images/images_clicks/buildings_15.png';
import icon4 from './images/images_clicks/buildings_19.png';
import icon5 from './images/images_clicks/buildings_23.png';
import image5 from './images/DungeonFactory.png';
import icon6 from './images/images_clicks/buildings_27.png';
import icon7 from './images/images_clicks/buildings_31.png';

export default function App() {

  const [counter, setCounter] = React.useState({
    amount: 0,
    cookiesPerSeconds: 0,
  });
  const [upgrades, setUpgrades] = React.useState(generateUpgrades());

  React.useEffect(() => {
    const interval = setInterval(() => {
      refresh();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [])

  React.useEffect(() => {
    let cookiesPerSeconds = 0;

    upgrades.forEach(upgrade => {
      cookiesPerSeconds += upgrade.incrementPerSecond * upgrade.number;
    })

    // Mettre à jour les cookies par seconde en fonction du state des upgrades
    setCounter({...counter, cookiesPerSeconds});

  }, [upgrades]);

  return (
    <div className='App'>
      <SectionLeft
        onClick = {onIncrement}
        counterAmount = {counter.amount}
        counterPerSeconds = {counter.cookiesPerSeconds}
      />
      <SectionMiddle
        upgrades = {upgrades}
      />
      <SectionRight
        onClick = {onIncrement}
        counterAmount = {counter.amount}
        counterPerSeconds = {counter.cookiesPerSeconds}
        upgrades = {upgrades}
        recruit = {recruit}
      />
      <footer>
        <p className='App__version'>version 1.0</p>
      </footer>
    </div>
  );

  /**
   * Générer la liste des améliorations
   * @returns {undefined}
   */
  function generateUpgrades() {
    return [
      {
        icon: icon1,
        name: 'Cursor',
        number: 0,
        cost: 15,
        incrementPerSecond: 0.5
      },
      {
        icon: icon2,
        name: 'Grandmas',
        number: 0,
        cost: 100,
        incrementPerSecond: 1,
        image: image2,
        numberImage: 0
      },
      {
        icon: icon3,
        name: 'Farm',
        number: 0,
        cost: 150,
        incrementPerSecond: 1.5
      },
      {
        icon: icon4,
        name: 'Mine',
        number: 0,
        cost: 300,
        incrementPerSecond: 2
      },
      {
        icon: icon5,
        name: 'Factory',
        number: 0,
        cost: 350,
        incrementPerSecond: 2.5,
        image: image5,
        numberImage: 0
      },
      {
        icon: icon6,
        name: 'Bank',
        number: 0,
        cost: 700,
        incrementPerSecond: 3
      },
      {
        icon: icon7,
        name: 'Temple',
        number: 0,
        cost: 1000,
        incrementPerSecond: 7
      }
    ]
  }

  /**
   * Ajouter le nombre de grand-mères au compteur actuel
   */
  function refresh()  {
    setCounter(counter => {
      return {
        ...counter,
        amount: counter.amount + counter.cookiesPerSeconds / 10,
      }
    });
  }

  /**
   * Recruter une amélioration dont la position est passée via l'index
   * @param index Number
   */
  function recruit(index) {
    // Identifier l'amélioration à acheter
    const upgradesList = [...upgrades];
    const upgrade = {...upgradesList[index]};

    // Vérifier si on a assez d'argent
    if (counter.amount >= upgrade.cost) {

      const expense = counter.amount - upgrade.cost;

      upgrade.cost = Math.round(upgrade.cost * 1.2);
      upgrade.number++;

      upgradesList[index] = upgrade;

      // Mettre à jour le state pour :
      // Dépenser les cookies
      // Mettre à jour notre tableau d'améliorations.
      setUpgrades(upgradesList);
      setCounter({...counter, amount: expense});
    }
  }

  /**
   * Incrémenter le counter du state
   */
  function onIncrement() {
    setCounter({...counter, amount: counter.amount + 1});
  }
}
