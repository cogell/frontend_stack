var React = require('react');
var Posts = require('./posts');

var Root = React.createClass({

  render: function () {
    return (
      <Posts />
    );
  }

});

module.exports = Root;
