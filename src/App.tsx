import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { MyServices } from './layout/sections/myServices/MyServices';
import { Price } from './layout/sections/price/Price';
import { Recommendations } from './layout/sections/recommendations/Recommendations';
import { Education } from './layout/sections/education/Education';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { Works } from './layout/sections/works/Works';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Bar } from './layout/sections/bar/Bar';
import { Blog } from './layout/sections/blog/Blog';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Logos } from './layout/sections/logos/Logos';
import { Footer } from './layout/footer/Footer';
import Maps from './layout/sections/maps/Maps';
import { Particle } from './components/particle/Particle';

function App() {
  return (
    <div className="App">
      <Particle />
      <GlobalStyles />
      <Bar />
      <Header />
      <MyServices />
      <Price />
      <Recommendations />
      <Education />
      <Works />
      <Portfolio />
      <Blog />
      <Contacts />
      <Maps />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
