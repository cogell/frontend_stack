var React = require('react');

var Post: ReactClass = React.createClass({
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
      <div>Hello, {this.props.name}</div>
    );
  }

});

module.exports = Post;
