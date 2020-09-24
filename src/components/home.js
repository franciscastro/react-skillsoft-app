import React from 'react';

import Header from './header';
import Menu from './menu';
import MainContent from './maincontent';
import Footer from './footer';


function Home() {

  return (
    <div>
      <Header />
      <Menu />
      <MainContent />
      <div>
        You are on the home component
      </div>
      <Footer />
    </div>
  );

}


export default Home;
