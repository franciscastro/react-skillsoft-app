import React from 'react';

import Aside from './aside';

//import {useState} from 'react';
//import {Component} from 'react';
//import PropTypes from 'prop-types';  // For strong-typing


function MainContent() {

  return (

    <div id="container">
      <main>
        <h2>How to Participate in the Program</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere eleifend nulla non tempor. Aenean viverra sapien tellus, a ultricies ante convallis vel. Nullam enim nibh, cursus tincidunt efficitur in, scelerisque in tortor. Ut fringilla fermentum lectus non pretium. Donec egestas tellus ornare massa iaculis aliquet. Nam et tristique ligula, id condimentum felis. Phasellus vel condimentum augue. Aliquam ut neque et odio viverra rhoncus. Etiam metus ligula, consequat sed mattis ac, pretium id arcu. Nulla mattis mauris in libero maximus egestas. Suspendisse potenti. Integer dictum diam a orci gravida condimentum.
        </p>

        <p>
          Sed vestibulum lectus vitae risus dictum pretium. Cras facilisis in orci in gravida. Nunc sit amet posuere tortor. Fusce eu tristique velit, blandit egestas lectus. Cras a leo fringilla, efficitur enim pharetra, pretium quam. Nunc at arcu vitae eros dignissim pulvinar sed nec urna. In nibh erat, consectetur vitae imperdiet vel, vulputate at augue. Etiam eu suscipit velit.
        </p>

        <p>
          Maecenas vulputate, lacus vel facilisis egestas, ipsum diam porta dolor, non cursus sapien enim eu quam. Sed gravida posuere vestibulum. Fusce pharetra lobortis quam, vel rutrum turpis. Donec cursus cursus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vitae enim eget magna euismod fringilla. Curabitur ut ultrices nulla. Integer semper sagittis lacus, non dictum tellus convallis pulvinar. Curabitur at accumsan neque, ac ullamcorper elit. Donec nec magna vitae turpis finibus vulputate et at augue. Etiam aliquam augue nibh, ut vehicula augue vehicula sit amet. Praesent molestie leo est.
        </p>

      </main>

      <Aside />

    </div>
  );

}

/*
class MainContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.pageTitle,
      count: this.props.numTopics
    };
  }

  onClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <maincontent>
        This is the main content
        <h2>{this.state.title}</h2>
        <p>This is the number of topics: {this.state.count}</p>
        <button onClick={this.onClick}>
          Increase number of topics
        </button>
      </maincontent>
    );
  }

}

// Set types of props values
MainContent.propTypes = {
  pageTitle: PropTypes.string
}
*/

export default MainContent;
