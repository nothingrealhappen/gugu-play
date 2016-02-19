import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import qwest from 'qwest';

require('app.styl');

const App = React.createClass({
  getInitialState: function() {
    return {
      lock: false
    };
  },
  handleClick() {
    if(this.state.lock) return;
    this.setState({ lock: true });
    qwest.get('/print').then(() => {
      this.setState({ lock: false });
    });
  },
  render () {
    return (
      <div className="play-button" onClick={this.handleClick}>
        PLAY
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
