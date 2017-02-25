import React from 'react';

module.exports = React.createClass({
  getInitialState: function () {
    return {liked: true}
  },

  onclick: function () {
    this.setState({liked: !this.state.liked})
  },

  render: function () {
    let text = this.state.liked ? 'aa' : 'bb';
    return (
      <div className={this.state.liked} onClick={this.onclick}>
        Hello world {text}!
      </div>
    )
  }
});
