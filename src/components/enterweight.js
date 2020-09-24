import React from 'react';

import Header from './header';
import Menu from './menu';
import Footer from './footer';

function EnterWeight() {

  return (
    <div>
      <Header />
      <Menu />

      <div>
        You are on the enterweight component
        <main>
          <h2>Enter your info</h2>
          <form>

            <div>
              <label for="empName">Your Name </label>
              <input id="empName" name="empName" type="text"/>
            </div>

            <div>
              <label for="empWeight">Your Weight today </label>
              <input id="empWeight" name="empWeight" type="text"/>
            </div>

          </form>
        </main>
      </div>

      <Footer />
    </div>
  );

}


export default EnterWeight;
