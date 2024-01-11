import React from 'react';
import './App.css';

import { default as Blog} from './containers/blog/Blog';
import { default as Features} from './containers/features/Features.jsx';
import { default as Header} from './containers/header/Header';
import { default as Footer} from './containers/footer/Footer';
import { default as Possibility} from './containers/possibility/Possibility';
import { default as WhatGPT3} from './containers/whatGPT3/WhatGPT3';

import  {default as Brand} from './components/brand/Brand.jsx';
import  {default as CTA} from './components/cta/CTA.jsx';
import  {default as Navbar} from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className='App' >
    <div className='gradient__bg'>
      <Navbar />
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>   
    </div>
  );
}

export default App;
