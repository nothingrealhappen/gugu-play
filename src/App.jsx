import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import qwest from 'qwest';

require('app.styl');

const App = React.createClass({
  getInitialState: function() {
    return {
      lock: false,
      message: null
    };
  },
  handleClick() {
    if(this.state.lock) return;
    this.setState({ lock: true });
    qwest.get('/print').then(data => {
      this.setState({ lock: false, message: JSON.parse(data.responseText).message });
    });

    setTimeout(() => {
      this.setState({ message: null });
    }, 5000);
  },
  render () {
    const messageClass = this.state.message ? 'active' : '';
    return (
      <div>
        <div className="play-button" onClick={this.handleClick}>
          PLAY
        </div>
        <div className={`message ${messageClass}`}>
          {this.state.message}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
