import React, { Component } from 'react';

import { Observable } from 'rx';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  renderList() {
    return this.state.data.map(o => (
      <img
        src={o.avatar_url}
        key={o.avatar_url}
        style={{ width: 100, height: 100 }}
      />
    ));
  }

  render() {
    return <div className="App">{this.renderList()}</div>;
  }

  componentDidMount() {
    var requestStream = Observable.just('https://api.github.com/users');
    var responseStream = requestStream.flatMap(requestUrl =>
      Observable.fromPromise($.getJSON(requestUrl))
    );

    responseStream.subscribe(response => {
      this.setState({ data: response });
    });
  }
}

export default App;
