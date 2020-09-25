import React from 'react';
import { Component } from 'react';

import Header from './header';
import Menu from './menu';
import Footer from './footer';

class EnterWeight extends Component {

  constructor() {
    super();

    this.state = {
      empName: "",
      empWeight: ""
    };
  }

  changeHandler = (anevent) => {
    this.setState({
      [anevent.target.name]: anevent.target.value
    });
  }

  submitHandler = (anevent) => {
    anevent.preventDefault(); // Prevent page from reloading
    console.log(this.state);
  }

  render() {

    const {empName, empWeight} = this.state;

    return (
      <div>
        <Header />
        <Menu />

        <div>
          You are on the enterweight component
          <main>
            <h2>Enter your info</h2>

            <form onSubmit={this.submitHandler}>

              <div>
                <label for="empName">Your Name </label>
                <input
                  id="empName"
                  name="empName"
                  type="text"
                  value={empName}
                  onChange={this.changeHandler}
                />
              </div>

              <div>
                <label for="empWeight">Your Weight today </label>
                <input
                  id="empWeight"
                  name="empWeight"
                  type="text"
                  value={empWeight}
                  onChange={this.changeHandler}
                />
              </div>

              <button type="submit">Enter weight</button>

            </form>

          </main>
        </div>

        <Footer />
      </div>
    );

  }


}


export default EnterWeight;
