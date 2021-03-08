
import React from 'react'
import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          tittle="Lowest Cost Solar Panels"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          tittle='Model S'
          desc='$69,420'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          tittle='Model 3'
          desc='Monedy-back guarantee'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          tittle='Model X'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          tittle='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          tittle='Solar for New Roofs'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          tittle='Accessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='More Information'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
