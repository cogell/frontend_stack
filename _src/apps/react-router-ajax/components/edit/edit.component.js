var React = require('react');

var Edit = React.createClass({

  render: function () {
    return (
      <h1 contentEditable onChange={this.handleChange}>Im a simple header</h1>
    );
  },

  // helpers
  handleChange: function () {
    console.log('this.DOMNode', this.DOMNode);
  }

});

module.exports = Edit;
