var React = require('react');
require('./post.style');

var Post = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      name: 'Cedric'
    };
  },

  render: function () {
    return (
      <div className="cogell-post">Hello, {this.props.name}</div>
    );
  }

});

module.exports = Post;
